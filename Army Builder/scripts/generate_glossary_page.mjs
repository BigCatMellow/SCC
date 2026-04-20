import fs from 'node:fs/promises';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');

const glossaryPath = path.join(rootDir, 'source-references', 'generated', 'complete_glossary.json');
const outputPath = path.join(rootDir, 'glossary.html');

const glossary = JSON.parse(await fs.readFile(glossaryPath, 'utf8'));

function escapeHtml(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function normalizeGlossaryText(text) {
  return String(text || '')
    .replace(/\r\n/g, '\n')
    .replace(/\s+\./g, '.')
    .replace(/\s+,/g, ',')
    .replace(/\s+:/g, ':')
    .replace(/\(\s+/g, '(')
    .replace(/\s+\)/g, ')')
    .replace(/[ \t]{2,}/g, ' ')
    .trim();
}

function formatGlossaryText(text) {
  const normalized = normalizeGlossaryText(text);
  if (!normalized) return '';
  return normalized
    .split(/\n\s*\n/)
    .map((part) => `<p>${escapeHtml(part).replace(/\n/g, '<br>')}</p>`)
    .join('');
}

const glossaryCardsMarkup = glossary
  .slice()
  .sort((a, b) => String(a.name || '').localeCompare(String(b.name || '')))
  .map((entry) => {
    const raw = normalizeGlossaryText(entry.raw_definition || entry.raw || entry.description || entry.text || '');
    const quickRead = normalizeGlossaryText(entry.plain_english || entry.quickRead || '');
    const example = normalizeGlossaryText(entry.example || '');
    const keywords = [entry.name || '', entry.id || '', entry.slug || '', raw].join(' ').toLowerCase();

    const quickReadBlock = quickRead
      ? `<div class="glossary-block"><span class="glossary-block-label">Common English</span><div class="glossary-block-text"><p>${escapeHtml(quickRead)}</p></div></div>`
      : '';
    const exampleBlock = example
      ? `<div class="glossary-block"><span class="glossary-block-label">Example</span><div class="glossary-block-text glossary-example"><p>${escapeHtml(example)}</p></div></div>`
      : '';

    return `<div class="glossary-card" data-keywords="${escapeHtml(keywords)}"><div class="glossary-card-head"><div class="glossary-card-name">${escapeHtml(entry.name || '')}</div><div class="glossary-card-type">${escapeHtml(entry.type || 'Keyword')}</div></div><div class="glossary-card-body"><div class="glossary-block raw"><span class="glossary-block-label">RAW Definition</span><div class="glossary-block-text">${formatGlossaryText(raw)}</div></div>${quickReadBlock}${exampleBlock}</div></div>`;
  })
  .join('');

const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no, viewport-fit=cover">
  <meta name="apple-mobile-web-app-capable" content="yes">
  <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent">
  <meta name="theme-color" content="#1a1a1a">
  <title>Glossary Reference - StarCraft: TMG</title>
  <link rel="manifest" href="manifest.json">
  <style>
    :root { --bg:#0d1118; --panel:#171d28; --panel-2:#1d2531; --panel-3:#263140; --text:#f2efe8; --muted:#a9b0bb; --border:#344256; --accent:#38bdf8; --accent-rgb:56,189,248; --radius:16px; --radius-sm:10px; --shadow:0 14px 28px rgba(0,0,0,.34); --mono:ui-monospace,SFMono-Regular,Menlo,Consolas,monospace; --sans:-apple-system,BlinkMacSystemFont,"Segoe UI",system-ui,sans-serif; --condensed:"Arial Narrow","Segoe UI",sans-serif; }
    * { box-sizing:border-box; margin:0; padding:0; }
    body { background:radial-gradient(circle at top center, rgba(56,189,248,.08), transparent 28%), radial-gradient(circle at 85% 12%, rgba(236,72,153,.08), transparent 20%), linear-gradient(180deg, #111722 0%, var(--bg) 22%, #0a0e15 100%); color:var(--text); font:15px/1.5 var(--sans); -webkit-tap-highlight-color:transparent; padding-bottom:calc(72px + env(safe-area-inset-bottom)); overflow-x:hidden; scrollbar-width:none; }
    body::-webkit-scrollbar { width:0; height:0; display:none; }
    .app { max-width:480px; margin:0 auto; min-height:100vh; min-height:100dvh; padding:0 16px 24px; }
    .header { position:relative; margin-bottom:14px; padding:14px 16px 18px; border:1px solid var(--border); border-radius:var(--radius); background:radial-gradient(circle at top right, rgba(56,189,248,.2), transparent 34%), radial-gradient(circle at 12% 18%, rgba(236,72,153,.1), transparent 24%), linear-gradient(180deg, rgba(255,255,255,.025), rgba(255,255,255,.01)); box-shadow:var(--shadow); overflow:hidden; }
    .header::before { content:""; position:absolute; left:0; top:0; bottom:0; width:4px; background:var(--accent); }
    .header-eyebrow { color:rgba(56,189,248,.95); font-family:var(--mono); font-size:.68rem; text-transform:uppercase; letter-spacing:.12em; font-weight:700; margin-bottom:6px; }
    .title { font-family:var(--condensed); font-size:1.42rem; font-weight:800; margin-bottom:4px; letter-spacing:.04em; text-transform:uppercase; }
    .subtitle { font-size:.82rem; color:var(--muted); max-width:34ch; }
    .search-container { position:sticky; top:0; z-index:50; padding:calc(env(safe-area-inset-top,0px) + 10px) 0 12px; background:linear-gradient(180deg, rgba(13,17,24,.98), rgba(13,17,24,.92)); backdrop-filter:blur(10px); margin-bottom:10px; }
    .search-box { display:flex; align-items:center; background:linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,.015)); border:1px solid var(--border); border-radius:var(--radius-sm); padding:0 12px; box-shadow:0 8px 20px rgba(0,0,0,.18); }
    .search-box:focus-within { border-color:var(--accent); }
    .search-icon { color:var(--muted); margin-right:8px; }
    .search-input { flex:1; background:none; border:none; color:var(--text); font-size:15px; padding:12px 0; outline:none; }
    .search-input::placeholder { color:var(--muted); }
    .clear-btn { background:none; border:none; color:var(--muted); font-size:1.2rem; cursor:pointer; padding:4px; display:none; }
    .clear-btn.visible { display:block; }
    .glossary-summary { display:flex; justify-content:space-between; align-items:center; gap:12px; margin-bottom:12px; padding:14px 16px; border:1px solid var(--border); border-radius:var(--radius); background:linear-gradient(180deg, rgba(255,255,255,.02), rgba(255,255,255,.008)); box-shadow:0 10px 22px rgba(0,0,0,.18); }
    .glossary-summary-copy { min-width:0; }
    .glossary-summary-title { font-size:.92rem; font-weight:700; margin-bottom:4px; }
    .glossary-summary-meta { font-size:.76rem; color:var(--muted); line-height:1.45; }
    .glossary-count-badge { padding:8px 10px; border-radius:999px; border:1px solid rgba(var(--accent-rgb), .34); background:rgba(var(--accent-rgb), .12); color:#e0f2fe; font-size:.72rem; font-weight:700; white-space:nowrap; }
    .glossary-grid { display:grid; gap:12px; }
    .glossary-card { border:1px solid var(--border); border-radius:var(--radius); overflow:hidden; background:var(--panel); box-shadow:0 10px 22px rgba(0,0,0,.18); }
    .glossary-card-head { display:flex; justify-content:space-between; align-items:center; gap:12px; padding:14px 16px 12px; border-bottom:1px solid rgba(255,255,255,.06); }
    .glossary-card-name { font-family:var(--condensed); font-size:1rem; letter-spacing:.04em; font-weight:800; text-transform:uppercase; }
    .glossary-card-type { color:#7dd3fc; font-size:.7rem; font-weight:700; letter-spacing:.08em; text-transform:uppercase; }
    .glossary-card-body { padding:14px 16px 16px; display:grid; gap:12px; }
    .glossary-block { border:1px solid rgba(255,255,255,.06); border-radius:12px; padding:12px 12px 10px; background:rgba(255,255,255,.018); }
    .glossary-block.raw { border-color:rgba(var(--accent-rgb), .22); background:rgba(var(--accent-rgb), .08); }
    .glossary-block-label { display:inline-block; font-family:var(--mono); font-size:.68rem; text-transform:uppercase; letter-spacing:.1em; font-weight:700; color:#f8fafc; margin-bottom:8px; }
    .glossary-block.raw .glossary-block-label { color:#7dd3fc; }
    .glossary-block-text { color:var(--muted); font-size:.84rem; line-height:1.55; }
    .glossary-block-text p + p { margin-top:8px; }
    .glossary-example { color:#fef3c7; }
    .glossary-empty { padding:18px 16px; text-align:center; color:var(--muted); font-size:.82rem; border:1px dashed var(--border); border-radius:14px; background:rgba(255,255,255,.02); }
    .no-results { display:none; padding:24px 16px; border:1px dashed var(--border); border-radius:var(--radius); text-align:center; color:var(--muted); background:rgba(255,255,255,.02); margin-top:12px; }
    .footer { margin-top:16px; padding:12px 14px; text-align:center; color:var(--muted); font-size:.74rem; }
    .content-tabs { position:fixed; left:0; right:0; bottom:0; z-index:300; display:flex; background:var(--panel); border-top:1px solid var(--border); padding-bottom:env(safe-area-inset-bottom); }
    .content-tab { flex:1; border:none; border-radius:0; background:transparent; color:var(--muted); padding:6px 4px; min-height:56px; font-family:var(--condensed); font-size:.62rem; font-weight:700; letter-spacing:.02em; text-transform:uppercase; cursor:pointer; transition:all .15s; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:2px; text-decoration:none; }
    .content-tab.active { color:var(--accent); background:rgba(56,189,248,.12); box-shadow:inset 0 0 0 1px rgba(56,189,248,.22); }
    .content-tab:not(.active):hover { color:var(--text); background:var(--panel-2); }
    .content-tab-icon { font-size:1.1rem; line-height:1; }
    .content-tab-label { line-height:1; }
    .app-menu-btn { display:none; }
    .app-menu-overlay { position:fixed; inset:0; background:rgba(0,0,0,.55); backdrop-filter:blur(3px); z-index:9998; opacity:0; pointer-events:none; transition:opacity .18s ease; }
    .app-menu-overlay.open { opacity:1; pointer-events:auto; }
    .app-menu-panel { position:fixed; top:0; left:0; bottom:0; width:min(82vw,320px); background:linear-gradient(180deg, #141d27 0%, #111722 100%); border-right:1px solid rgba(255,255,255,.08); box-shadow:18px 0 38px rgba(0,0,0,.4); z-index:9999; transform:translateX(-105%); opacity:0; transition:transform .24s ease, opacity .2s ease; padding:calc(env(safe-area-inset-top,0px) + 18px) 14px calc(env(safe-area-inset-bottom,0px) + 18px); display:flex; flex-direction:column; }
    .app-menu-panel.open, .app-menu-overlay.open .app-menu-panel { transform:translateX(0); opacity:1; }
    body.app-menu-open { overflow:hidden; }
    .app-menu-head { display:flex; align-items:flex-start; justify-content:space-between; gap:12px; padding:0 4px 12px; border-bottom:1px solid rgba(255,255,255,.08); margin-bottom:12px; opacity:0; transform:translateY(8px); transition:opacity .18s ease .03s, transform .22s ease .03s; }
    .app-menu-head-copy { min-width:0; }
    .app-menu-eyebrow { color:#9fcfe0; font-family:var(--mono); font-size:.68rem; text-transform:uppercase; letter-spacing:.12em; font-weight:700; margin-bottom:4px; }
    .app-menu-title { color:var(--text); font-family:var(--condensed); font-size:1.05rem; font-weight:800; text-transform:uppercase; }
    .app-menu-close { width:32px; height:32px; flex:0 0 32px; border-radius:999px; border:1px solid rgba(255,255,255,.12); background:rgba(255,255,255,.04); color:var(--text); font-size:1.2rem; line-height:1; cursor:pointer; transition:background .18s ease, border-color .18s ease, transform .18s ease; }
    .app-menu-close:hover { background:rgba(255,255,255,.08); border-color:rgba(255,255,255,.2); transform:translateY(-1px); }
    .app-menu-list { display:flex; flex-direction:column; gap:8px; opacity:0; transform:translateY(10px); transition:opacity .18s ease .06s, transform .22s ease .06s; }
    .app-menu-section-label { padding:10px 12px 2px; color:var(--muted); font-size:.8rem; font-weight:600; }
    .app-menu-link { display:flex; align-items:center; gap:10px; padding:12px 12px; border-radius:12px; color:var(--text); border:1px solid transparent; background:rgba(255,255,255,.02); font-weight:700; transition:transform .18s ease, background .18s ease, border-color .18s ease, color .18s ease; text-decoration:none; }
    .app-menu-link:hover { background:rgba(255,255,255,.05); border-color:rgba(255,255,255,.06); transform:translateX(4px); }
    body.app-menu-open .app-menu-head, body.app-menu-open .app-menu-list { opacity:1; transform:translateY(0); }
    .app-menu-link.current { border-color:rgba(var(--accent-rgb), .7); background:rgba(var(--accent-rgb), .14); color:#fff; }
    .app-menu-icon { width:18px; text-align:center; opacity:.9; }
  </style>
</head>
<body>
  <div class="app-menu-overlay" id="appMenuOverlay"></div>
  <aside class="app-menu-panel" id="appMenuPanel" aria-hidden="true">
    <div id="referenceAppMenuShell"></div>
  </aside>
  <template id="referenceShellLinkFallback"><a href="rules.html"></a><a href="glossary.html"></a></template>
  <div class="app">
    <div class="header">
      <div class="header-eyebrow">StarCraft TMG</div>
      <div class="title">Glossary Reference</div>
      <div class="subtitle">Structured glossary reference for quick in-game term checks and plain-English clarification.</div>
    </div>

    <div class="search-container">
      <div class="search-box">
        <span class="search-icon">🔍</span>
        <input type="text" class="search-input" placeholder="Search glossary..." id="glossarySearchInput">
        <button class="clear-btn" id="glossaryClearBtn" type="button">×</button>
      </div>
    </div>

    <div class="glossary-summary">
      <div class="glossary-summary-copy">
        <div class="glossary-summary-title">Rules terms in one place</div>
        <div class="glossary-summary-meta">Each entry starts with the source-backed RAW text, then adds a quick-read explanation and a gameplay example when it helps clarify use.</div>
      </div>
      <div class="glossary-count-badge" id="glossaryCountBadge">${glossary.length} Terms</div>
    </div>

    <div class="glossary-grid" id="glossaryGrid">${glossaryCardsMarkup}</div>
    <div class="no-results" id="glossaryNoResults">No glossary terms found matching your search.</div>

  </div>

  <div class="content-tabs" id="referenceBottomTabs"></div>

  <script src="./runtime/payloads/reference-page-shell.js"></script>
  <script src="./runtime/payloads/glossary-reference.js"></script>
  <script src="./runtime/payloads/glossary-renderer.js"></script>
  <script>
    const referencePageShell = window.__referencePageShell;
    if (referencePageShell) {
      const menuHost = document.getElementById('referenceAppMenuShell');
      const tabsHost = document.getElementById('referenceBottomTabs');
      if (menuHost) menuHost.innerHTML = referencePageShell.renderMenu({ activePage: 'glossary' });
      if (tabsHost) tabsHost.innerHTML = referencePageShell.renderTabs({ activePage: 'glossary' });
    }

    const glossaryRenderer = window.__glossaryRenderer;
    const glossarySearchInput = document.getElementById('glossarySearchInput');
    const glossaryClearBtn = document.getElementById('glossaryClearBtn');
    const glossaryNoResults = document.getElementById('glossaryNoResults');
    const glossaryGrid = document.getElementById('glossaryGrid');
    const glossaryCountBadge = document.getElementById('glossaryCountBadge');
    const bottomMenuBtn = document.getElementById('bottomMenuBtn');
    const appMenuOverlay = document.getElementById('appMenuOverlay');
    const appMenuPanel = document.getElementById('appMenuPanel');

    if (glossaryRenderer) {
      glossaryRenderer.renderGlossarySection({
        grid: glossaryGrid,
        badge: glossaryCountBadge,
        entries: glossaryRenderer.normalizeEntries(window.__glossaryReference || []),
        emptyText: 'No glossary terms are available yet.'
      });
    }

    const runGlossarySearch = glossaryRenderer
      ? glossaryRenderer.attachGlossarySearch({
          input: glossarySearchInput,
          clearBtn: glossaryClearBtn,
          noResults: glossaryNoResults,
          grid: glossaryGrid
        })
      : () => {};

    function openAppMenu() {
      appMenuOverlay.classList.add('open');
      appMenuPanel.classList.add('open');
      if (bottomMenuBtn) bottomMenuBtn.setAttribute('aria-expanded', 'true');
      appMenuPanel.setAttribute('aria-hidden', 'false');
      document.body.classList.add('app-menu-open');
    }

    function closeAppMenu() {
      appMenuOverlay.classList.remove('open');
      appMenuPanel.classList.remove('open');
      if (bottomMenuBtn) bottomMenuBtn.setAttribute('aria-expanded', 'false');
      appMenuPanel.setAttribute('aria-hidden', 'true');
      document.body.classList.remove('app-menu-open');
    }

    if (bottomMenuBtn) {
      bottomMenuBtn.addEventListener('click', () => {
        if (appMenuPanel.classList.contains('open')) closeAppMenu();
        else openAppMenu();
      });
    }

    appMenuOverlay.addEventListener('click', closeAppMenu);
    document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeAppMenu(); });
    runGlossarySearch('');
  </script>
</body>
</html>
`;

await fs.writeFile(outputPath, html, 'utf8');
console.log(`Wrote ${path.relative(rootDir, outputPath)}`);
