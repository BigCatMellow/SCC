import { spawn } from 'node:child_process';
import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const root = process.cwd();
const chromeCandidates = [
  'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe',
];
const chromePath = chromeCandidates.find(candidate => fs.existsSync(candidate));
if (!chromePath) {
  throw new Error('No Chrome/Edge executable found for browser preview check.');
}

const port = 9337;
const userDataDir = fs.mkdtempSync(path.join(os.tmpdir(), 'sctmg-browser-'));
const missionsUrl = pathToFileURL(path.join(root, 'missions.html')).href;

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function fetchJson(url, retries = 40) {
  let lastError;
  for (let i = 0; i < retries; i += 1) {
    try {
      const response = await fetch(url);
      if (response.ok) return response.json();
      lastError = new Error(`${response.status} ${response.statusText}`);
    } catch (error) {
      lastError = error;
    }
    await sleep(150);
  }
  throw lastError;
}

async function waitForPopupTargetId(existingTargetIds, retries = 40) {
  for (let i = 0; i < retries; i += 1) {
    const targets = await fetchJson(`http://127.0.0.1:${port}/json/list`, 1);
    const popup = targets.find(target =>
      target.type === 'page'
      && !existingTargetIds.has(target.id)
      && target.webSocketDebuggerUrl
    );
    if (popup) return popup.id;
    await sleep(150);
  }
  return null;
}

class Cdp {
  constructor(wsUrl) {
    this.nextId = 1;
    this.pending = new Map();
    this.listeners = new Map();
    this.ws = new WebSocket(wsUrl);
  }

  async open() {
    await new Promise((resolve, reject) => {
      this.ws.addEventListener('open', resolve, { once: true });
      this.ws.addEventListener('error', reject, { once: true });
      this.ws.addEventListener('message', event => this.handleMessage(event));
    });
  }

  handleMessage(event) {
    const message = JSON.parse(event.data);
    if (message.id && this.pending.has(message.id)) {
      const { resolve, reject } = this.pending.get(message.id);
      this.pending.delete(message.id);
      if (message.error) reject(new Error(message.error.message));
      else resolve(message.result || {});
      return;
    }
    const callbacks = this.listeners.get(message.method) || [];
    callbacks.forEach(callback => callback(message.params || {}, message));
  }

  send(method, params = {}, sessionId = undefined) {
    const id = this.nextId++;
    const payload = { id, method, params };
    if (sessionId) payload.sessionId = sessionId;
    this.ws.send(JSON.stringify(payload));
    return new Promise((resolve, reject) => this.pending.set(id, { resolve, reject }));
  }

  on(method, callback) {
    const callbacks = this.listeners.get(method) || [];
    callbacks.push(callback);
    this.listeners.set(method, callbacks);
  }

  close() {
    this.ws.close();
  }
}

function valueFrom(result) {
  if (result.exceptionDetails) {
    throw new Error(result.exceptionDetails.text || 'Runtime evaluation failed.');
  }
  return result.result?.value;
}

async function evaluate(cdp, sessionId, expression) {
  const result = await cdp.send('Runtime.evaluate', {
    expression,
    awaitPromise: true,
    returnByValue: true,
  }, sessionId);
  return valueFrom(result);
}

async function waitFor(cdp, sessionId, expression, label, retries = 60) {
  for (let i = 0; i < retries; i += 1) {
    const value = await evaluate(cdp, sessionId, expression);
    if (value) return value;
    await sleep(100);
  }
  throw new Error(`Timed out waiting for ${label}.`);
}

function assert(condition, message) {
  if (!condition) throw new Error(message);
}

const chrome = spawn(chromePath, [
  '--headless=new',
  '--disable-gpu',
  '--disable-extensions',
  '--no-first-run',
  '--no-default-browser-check',
  '--allow-file-access-from-files',
  `--remote-debugging-port=${port}`,
  `--user-data-dir=${userDataDir}`,
  'about:blank',
], { stdio: 'ignore' });

try {
  const version = await fetchJson(`http://127.0.0.1:${port}/json/version`);
  const initialTargets = await fetchJson(`http://127.0.0.1:${port}/json/list`);
  const knownTargetIds = new Set(initialTargets.map(targetInfo => targetInfo.id));
  const browser = new Cdp(version.webSocketDebuggerUrl);
  await browser.open();
  await browser.send('Target.setDiscoverTargets', { discover: true });

  const target = await browser.send('Target.createTarget', { url: missionsUrl });
  knownTargetIds.add(target.targetId);
  const attached = await browser.send('Target.attachToTarget', {
    targetId: target.targetId,
    flatten: true,
  });
  const pageSession = attached.sessionId;
  await browser.send('Page.enable', {}, pageSession);
  await browser.send('Runtime.enable', {}, pageSession);

  await waitFor(browser, pageSession, 'document.readyState === "complete" && !!document.querySelector("#panel-setup")', 'missions page load');
  await evaluate(browser, pageSession, `
    localStorage.removeItem('starcraft_tmg_missions_builder_state_v1');
    randomBoth();
    true;
  `);
  await waitFor(browser, pageSession, '!!document.querySelector(".actions .btn.map")', 'setup preview button');

  const popupPromise = new Promise(resolve => {
    browser.on('Target.targetCreated', params => {
      if (params.targetInfo?.type === 'page' && params.targetInfo.targetId !== target.targetId) {
        resolve(params.targetInfo.targetId);
      }
    });
  });

  const popupOpened = await evaluate(browser, pageSession, 'openExport()');
  assert(popupOpened === true || popupOpened === undefined, 'Open Setup Preview did not report successful popup creation.');
  const popupTargetId = await Promise.race([
    popupPromise,
    waitForPopupTargetId(knownTargetIds),
  ]);
  assert(popupTargetId, 'Open Setup Preview did not create a popup target.');

  const popupAttached = await browser.send('Target.attachToTarget', {
    targetId: popupTargetId,
    flatten: true,
  });
  const popupSession = popupAttached.sessionId;
  await browser.send('Page.enable', {}, popupSession);
  await browser.send('Runtime.enable', {}, popupSession);
  await waitFor(browser, popupSession, 'document.readyState === "complete" && !!document.querySelector(".scenario-card")', 'preview popup content');

  const desktop = await evaluate(browser, popupSession, `(() => {
    const firstGrid = document.querySelector('.scenario-grid');
    const svg = document.querySelector('.scenario-map-svg');
    const mission = document.querySelector('.scenario-card-header.mission');
    const map = document.querySelector('.scenario-card-header.map');
    const rect = svg.getBoundingClientRect();
    return {
      title: document.title,
      hasMission: !!mission,
      hasMap: !!map,
      hasDeployment: !!document.querySelector('.scenario-card-header.deploy-red, .scenario-card-header.deploy-blue, .scenario-card-header.deployment'),
      gridColumns: getComputedStyle(firstGrid).gridTemplateColumns,
      svgWidth: Math.round(rect.width),
      svgHeight: Math.round(rect.height),
      scrollWidth: document.documentElement.scrollWidth,
      viewportWidth: window.innerWidth,
      missionColor: getComputedStyle(mission).backgroundColor,
      mapColor: getComputedStyle(map).backgroundColor,
      bodyText: document.body.innerText,
    };
  })()`);

  assert(desktop.title === 'Battle Setup Preview', 'Preview popup title is wrong.');
  assert(desktop.hasMission && desktop.hasMap, 'Preview does not include both mission and map cards.');
  assert(desktop.hasDeployment, 'Preview does not include deployment information.');
  assert(desktop.gridColumns.split(' ').length >= 2, 'Desktop preview is not using the expected two-column grid.');
  assert(desktop.svgWidth > 250 && desktop.svgHeight > 150, 'Map SVG is too small on desktop preview.');
  assert(desktop.scrollWidth <= desktop.viewportWidth + 1, 'Desktop preview has horizontal overflow.');
  assert(desktop.bodyText.includes('Battle Setup'), 'Preview body is missing the Battle Setup header.');

  await browser.send('Emulation.setDeviceMetricsOverride', {
    width: 390,
    height: 844,
    deviceScaleFactor: 2,
    mobile: true,
  }, popupSession);
  await sleep(150);
  const mobile = await evaluate(browser, popupSession, `(() => {
    const firstGrid = document.querySelector('.scenario-grid');
    const svg = document.querySelector('.scenario-map-svg');
    const rect = svg.getBoundingClientRect();
    return {
      gridColumns: getComputedStyle(firstGrid).gridTemplateColumns,
      svgWidth: Math.round(rect.width),
      svgHeight: Math.round(rect.height),
      scrollWidth: document.documentElement.scrollWidth,
      viewportWidth: window.innerWidth,
      bodyPadding: getComputedStyle(document.body).padding,
    };
  })()`);

  assert(mobile.gridColumns.split(' ').length === 1, 'Mobile preview did not collapse to a single-column grid.');
  assert(mobile.svgWidth <= mobile.viewportWidth, 'Mobile map SVG is wider than the viewport.');
  assert(mobile.svgWidth > 250, 'Mobile map SVG is too small to read.');
  assert(mobile.scrollWidth <= mobile.viewportWidth + 1, 'Mobile preview has horizontal overflow.');

  await browser.send('Emulation.clearDeviceMetricsOverride', {}, popupSession);
  await browser.send('Emulation.setEmulatedMedia', { media: 'print' }, popupSession);
  await sleep(150);
  const print = await evaluate(browser, popupSession, `(() => {
    const firstGrid = document.querySelector('.scenario-grid');
    const sheet = document.querySelector('.sheet');
    const note = document.querySelector('.screen-only-note');
    return {
      gridColumns: getComputedStyle(firstGrid).gridTemplateColumns,
      sheetMaxWidth: getComputedStyle(sheet).maxWidth,
      screenNoteDisplay: note ? getComputedStyle(note).display : null,
      scrollWidth: document.documentElement.scrollWidth,
      viewportWidth: window.innerWidth,
    };
  })()`);
  assert(print.gridColumns.split(' ').length >= 2, 'Print preview is not preserving the two-column sheet layout.');
  assert(print.sheetMaxWidth === 'none', 'Print preview sheet max-width was not removed.');
  assert(print.screenNoteDisplay === 'none', 'Screen-only note is visible in print media.');
  await browser.send('Page.printToPDF', { printBackground: true }, popupSession);

  console.log(JSON.stringify({
    ok: true,
    chromePath,
    selectedPreview: {
      desktop,
      mobile,
      print,
    },
  }, null, 2));
  browser.close();
} finally {
  chrome.kill();
  fs.rmSync(userDataDir, { recursive: true, force: true });
}
