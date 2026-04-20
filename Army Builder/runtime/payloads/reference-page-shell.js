(() => {
  function isInArmyBuilder() {
    return /\/Army(?:%20|\s)Builder\//i.test(window.location.pathname || '');
  }

  function builderHref(path) {
    return isInArmyBuilder() ? path : `Army%20Builder/${path}`;
  }

  function companionHref(path) {
    return isInArmyBuilder() ? `../${path}` : path;
  }

  function resolveHref(item) {
    const href = typeof item.href === 'function' ? item.href() : item.href;
    if (item.scope === 'companion') return companionHref(href);
    if (item.scope === 'builder') return builderHref(href);
    return href;
  }

  const MENU_LINKS = [
    { type: 'section', label: 'Command' },
    { type: 'link', id: 'battle', scope: 'companion', href: 'index.html', icon: '▶', label: 'Battle Companion', accent: 'missions' },
    { type: 'section', label: 'Army Builder' },
    { type: 'link', id: 'builder-home', scope: 'builder', href: 'index.html', icon: '⌂', label: 'Command Launcher', accent: 'home' },
    { type: 'link', id: 'zerg', scope: 'builder', href: 'zerg.html', icon: '☣', label: 'Zerg', accent: 'zerg' },
    { type: 'link', id: 'protoss', scope: 'builder', href: 'protoss.html', icon: '✦', label: 'Protoss', accent: 'protoss' },
    { type: 'link', id: 'terran', scope: 'builder', href: 'terran.html', icon: '⚙', label: 'Terran', accent: 'terran' },
    { type: 'section', label: 'Rules & Guides' },
    { type: 'link', id: 'missions', scope: 'builder', href: 'missions.html', icon: '🗺', label: 'Missions', accent: 'missions' },
    { type: 'link', id: 'rules', scope: 'builder', href: 'rules.html', icon: '★', label: 'Rules', accent: 'rules' },
    { type: 'link', id: 'glossary', scope: 'builder', href: 'glossary.html', icon: '☰', label: 'Glossary', accent: 'glossary' },
    { type: 'link', id: 'guides', scope: 'builder', href: 'guides.html', icon: '▣', label: 'Rulebook Library', accent: 'rules' },
    { type: 'link', id: 'field-guide', scope: 'builder', href: 'field-guide.html', icon: '◇', label: 'Faction Field Guide', accent: 'protoss' },
  ];

  function inferActivePage() {
    const fileName = String(window.location.pathname || '')
      .split('/')
      .pop()
      .replace(/\.html$/i, '')
      .toLowerCase();
    if (!fileName || fileName === 'index') return isInArmyBuilder() ? 'builder-home' : 'battle';
    if (fileName === 'field-guide') return 'field-guide';
    if (fileName === 'guides') return 'guides';
    return fileName;
  }

  function renderMenu({ activePage }) {
    const current = String(activePage || '').toLowerCase();

    return [
      '<div class="app-menu-head">',
      '<div class="app-menu-head-copy">',
      '<div class="app-menu-eyebrow">StarCraft TMG</div>',
      '<div class="app-menu-title">App Navigation</div>',
      '</div>',
      '<button class="app-menu-close" type="button" aria-label="Close navigation menu" onclick="if(window.closeAppMenu) window.closeAppMenu()">×</button>',
      '</div>',
      '<nav class="app-menu-list">',
      ...MENU_LINKS.map(item => {
        if (item.type === 'section') return `<div class="app-menu-section-label">${item.label}</div>`;
        const isCurrent = current === item.id;
        const accent = item.accent ? ` data-accent="${item.accent}"` : '';
        const href = resolveHref(item);
        return `<a class="app-menu-link${isCurrent ? ' current' : ''}"${accent} href="${href}"><span class="app-menu-icon">${item.icon}</span><span>${item.label}</span></a>`;
      }),
      '</nav>'
    ].join('');
  }

  function renderTabs({ activePage }) {
    const current = String(activePage || '').toLowerCase();
    const isRules = current === 'rules';
    const isGlossary = current === 'glossary';

    return [
      '<button class="content-tab" type="button" id="bottomMenuBtn">',
      '<span class="content-tab-icon">&#9776;</span>',
      '<span class="content-tab-label">Menu</span>',
      '</button>',
      `<a class="content-tab${isRules ? ' active' : ''}" href="rules.html">`,
      '<span class="content-tab-icon">&#9733;</span>',
      '<span class="content-tab-label">Rules</span>',
      '</a>',
      `<a class="content-tab${isGlossary ? ' active' : ''}" href="glossary.html">`,
      '<span class="content-tab-icon">&#9776;</span>',
      '<span class="content-tab-label">Glossary</span>',
      '</a>'
    ].join('');
  }

  function initAppMenu(options = {}) {
    const activePage = options.activePage || inferActivePage();
    const panel = document.getElementById('appMenuPanel');
    const overlay = document.getElementById('appMenuOverlay') || document.getElementById('app-menu-overlay');
    const topButton = document.getElementById('appMenuBtn') || document.getElementById('app-menu-btn');
    const bottomButton = document.getElementById('bottomMenuBtn');
    const host = document.getElementById('referenceAppMenuShell') || panel;
    if (!panel || !overlay || !host) return;

    host.innerHTML = renderMenu({ activePage });

    function setOpen(open) {
      overlay.classList.toggle('open', open);
      panel.classList.toggle('open', open);
      panel.setAttribute('aria-hidden', open ? 'false' : 'true');
      if (topButton) topButton.setAttribute('aria-expanded', open ? 'true' : 'false');
      if (bottomButton) bottomButton.setAttribute('aria-expanded', open ? 'true' : 'false');
      document.body.classList.toggle('app-menu-open', open);
    }

    const openMenu = () => setOpen(true);
    const closeMenu = () => setOpen(false);
    const toggleMenu = () => setOpen(!panel.classList.contains('open'));

    if (!panel.dataset.sharedMenuBound) {
      topButton?.addEventListener('click', toggleMenu);
      bottomButton?.addEventListener('click', toggleMenu);
      overlay.addEventListener('click', event => {
        if (event.target === overlay) closeMenu();
      });
      document.addEventListener('keydown', event => {
        if (event.key === 'Escape') closeMenu();
      });
      panel.addEventListener('click', event => {
        if (event.target.closest('a')) closeMenu();
      });
      panel.dataset.sharedMenuBound = 'true';
    }

    window.openAppMenu = openMenu;
    window.closeAppMenu = closeMenu;
    window.toggleAppMenu = toggleMenu;
  }

  function initWhenReady() {
    if (document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', () => initAppMenu(), { once: true });
    } else {
      initAppMenu();
    }
  }

  window.__referencePageShell = {
    renderMenu,
    renderTabs,
    initAppMenu,
    menuLinks: MENU_LINKS
  };

  initWhenReady();
})();
