import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

import { getLegacyBuilderPayload } from '../runtime/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const pageChecks = [
  { faction: 'zerg', file: 'zerg.html', payloadFile: 'runtime/payloads/zerg.js' },
  { faction: 'protoss', file: 'protoss.html', payloadFile: 'runtime/payloads/protoss.js' },
  { faction: 'terran', file: 'terran.html', payloadFile: 'runtime/payloads/terran.js' },
];

function assert(condition, message) {
  if (!condition) {
    throw new Error(message);
  }
}

function parseWindowAssignment(source, globalName) {
  const prefix = `window.${globalName} =`;
  const start = source.indexOf(prefix);
  assert(start !== -1, `Missing ${globalName} assignment`);

  const objectLiteral = source.slice(start + prefix.length).trim().replace(/;\s*$/, '');
  return Function(`"use strict"; return (${objectLiteral});`)();
}

function checkBuilderHtmlWiring(html, label, faction) {
  assert(
    html.includes(`./runtime/payloads/${faction}.js`) || html.includes("window.__starcraftTMGRuntimePayload = getLegacyBuilderPayload("),
    `${label}: missing runtime payload import hook`
  );
  assert(
    html.includes('const runtimePayload = window.__starcraftTMGRuntimePayload;'),
    `${label}: missing runtime payload handoff`
  );
  assert(
    html.includes('runtimePayload?.factionCards'),
    `${label}: faction cards are not runtime-backed`
  );
  assert(
    html.includes('runtimePayload?.units'),
    `${label}: units are not runtime-backed`
  );
  assert(
    html.includes('runtimePayload?.tacticalCards'),
    `${label}: tactical cards are not runtime-backed`
  );
  assert(
    !html.includes('function mergeRuntimeRecords('),
    `${label}: legacy merge helper still present`
  );
  assert(
    html.includes('./runtime/payloads/unit-upgrade-cost-overrides.js'),
    `${label}: missing upgrade override payload`
  );
  assert(
    html.includes('./runtime/payloads/advice-packages.js'),
    `${label}: missing advice/packages payload`
  );
  assert(
    html.includes('./runtime/payloads/mission-setup.js'),
    `${label}: missing mission setup payload`
  );
  assert(
    html.includes('./runtime/payloads/army-sheet-export.js'),
    `${label}: missing army export payload`
  );
}

function checkBuilderPayloadFile(contents, label, faction) {
  assert(
    contents.includes('window.__starcraftTMGRuntimePayload = '),
    `${label}: missing runtime payload global`
  );
  assert(
    contents.includes(`window.__starcraftTMGRuntimeFaction = "${faction}"`) ||
      contents.includes(`window.__starcraftTMGRuntimeFaction = '${faction}'`) ||
      contents.includes(`window.__starcraftTMGRuntimeFaction = ${JSON.stringify(faction)}`),
    `${label}: payload file faction marker is wrong`
  );
  assert(
    contents.includes('window.__starcraftTMGRuntimeStatus = '),
    `${label}: missing runtime status global`
  );
}

function checkRulesPage(html, label) {
  assert(html.includes('id="rulesSearchInput"'), `${label}: missing rules search`);
  assert(html.includes('href="glossary.html"'), `${label}: missing glossary navigation`);
}

function checkGlossaryPage(html, label) {
  assert(html.includes('id="glossarySearchInput"'), `${label}: missing glossary search`);
  assert(html.includes('id="glossaryGrid"'), `${label}: missing glossary grid`);
  assert(html.includes('class="glossary-card"'), `${label}: missing rendered glossary cards`);
  assert(html.includes('href="rules.html"'), `${label}: missing rules navigation`);
}

function checkMissionsPage(html, label) {
  assert(html.includes('./runtime/payloads/mission-setup.js'), `${label}: missing mission setup payload import`);
  assert(html.includes('<nav class="bottom-nav">'), `${label}: missing bottom nav`);
  assert(html.includes('data-tab="setup"'), `${label}: missing setup tab`);
  assert(html.includes('data-tab="missions"'), `${label}: missing missions tab`);
  assert(html.includes('data-tab="maps"'), `${label}: missing maps tab`);
  assert(html.includes('data-tab="ref"'), `${label}: missing reference tab`);
  assert(!html.includes('const EMBEDDED_MISSIONS = ['), `${label}: still contains embedded missions data`);
  assert(!html.includes('const EMBEDDED_MAPS = ['), `${label}: still contains embedded maps data`);
  assert(html.includes('window.__missionSetupData || { missions: [], maps: [] }'), `${label}: missing payload-only mission setup handoff`);
}

function checkMissionPayload(contents, reference, label) {
  const payload = parseWindowAssignment(contents, '__missionSetupData');

  assert(Array.isArray(payload.missions), `${label}: missions payload is not an array`);
  assert(Array.isArray(payload.maps), `${label}: maps payload is not an array`);
  assert(payload.missions.length > 0, `${label}: missions payload is empty`);
  assert(payload.maps.length > 0, `${label}: maps payload is empty`);

  const payloadMissionIds = payload.missions.map(item => item.id);
  const referenceMissionIds = (reference.missions || []).map(item => item.id);
  const payloadMapIds = payload.maps.map(item => item.id);
  const referenceMapIds = (reference.maps || []).map(item => item.id);

  assert(
    JSON.stringify(payloadMissionIds) === JSON.stringify(referenceMissionIds),
    `${label}: missions payload ids do not match mission_setup_reference.json`
  );
  assert(
    JSON.stringify(payloadMapIds) === JSON.stringify(referenceMapIds),
    `${label}: maps payload ids do not match mission_setup_reference.json`
  );
}

function checkAdvicePackagesPayload(contents, label) {
  const adviceData = parseWindowAssignment(contents, '__armyBuilderAdviceData');

  for (const note of adviceData.factionNotes || []) {
    assert(note.factionId, `${label}: faction note missing factionId for ${note.factionName}`);
    assert(note.factionKey, `${label}: faction note missing factionKey for ${note.factionName}`);
  }

  for (const pkg of adviceData.packages || []) {
    assert(pkg.factionId, `${label}: package missing factionId for ${pkg.id}`);
    assert(pkg.factionKey, `${label}: package missing factionKey for ${pkg.id}`);

    for (const tacticalCardId of pkg.tacticalCardIds || []) {
      assert(tacticalCardId, `${label}: package ${pkg.id} has unresolved tactical card id`);
    }

    for (const unit of pkg.units || []) {
      assert(unit.unitId, `${label}: package ${pkg.id} has unresolved unit id for ${unit.name}`);

      const upgradeIds = unit.upgradeIds || [];
      const upgradeNames = unit.upgrades || [];
      assert(
        upgradeIds.length === upgradeNames.length,
        `${label}: package ${pkg.id} unit ${unit.name} has upgrade id/name length mismatch`
      );

      for (let index = 0; index < upgradeNames.length; index += 1) {
        assert(
          upgradeIds[index],
          `${label}: package ${pkg.id} unit ${unit.name} has unresolved upgrade id for ${upgradeNames[index]}`
        );
      }
    }
  }
}

const report = [];

for (const page of pageChecks) {
  const payload = getLegacyBuilderPayload(page.faction);
  assert(Array.isArray(payload.factionCards) && payload.factionCards.length > 0, `${page.faction}: no faction cards in runtime payload`);
  assert(Array.isArray(payload.units) && payload.units.length > 0, `${page.faction}: no units in runtime payload`);
  assert(Array.isArray(payload.tacticalCards) && payload.tacticalCards.length > 0, `${page.faction}: no tactical cards in runtime payload`);

  const htmlPath = path.join(rootDir, page.file);
  const html = await fs.readFile(htmlPath, 'utf8');
  checkBuilderHtmlWiring(html, page.file, page.faction);

  const payloadPath = path.join(rootDir, page.payloadFile);
  const payloadContents = await fs.readFile(payloadPath, 'utf8');
  checkBuilderPayloadFile(payloadContents, page.payloadFile, page.faction);

  report.push({
    faction: page.faction,
    file: htmlPath,
    counts: {
      factionCards: payload.factionCards.length,
      units: payload.units.length,
      tacticalCards: payload.tacticalCards.length,
    },
    runtimeStatus: payload.status,
  });
}

const rulesHtml = await fs.readFile(path.join(rootDir, 'rules.html'), 'utf8');
checkRulesPage(rulesHtml, 'rules.html');
const glossaryHtml = await fs.readFile(path.join(rootDir, 'glossary.html'), 'utf8');
checkGlossaryPage(glossaryHtml, 'glossary.html');

const missionsHtml = await fs.readFile(path.join(rootDir, 'missions.html'), 'utf8');
checkMissionsPage(missionsHtml, 'missions.html');
const missionPayloadContents = await fs.readFile(path.join(rootDir, 'runtime', 'payloads', 'mission-setup.js'), 'utf8');
const missionReference = JSON.parse(await fs.readFile(path.join(rootDir, 'source-references', 'generated', 'mission_setup_reference.json'), 'utf8'));
checkMissionPayload(missionPayloadContents, missionReference, 'runtime/payloads/mission-setup.js');

const advicePackagesContents = await fs.readFile(path.join(rootDir, 'runtime', 'payloads', 'advice-packages.js'), 'utf8');
checkAdvicePackagesPayload(advicePackagesContents, 'runtime/payloads/advice-packages.js');

console.log(JSON.stringify({ ok: true, pages: report }, null, 2));
