

(function(){
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');
  const stored = localStorage.getItem('sc_print_rulebook_theme');
  const systemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  let theme = stored || (systemDark ? 'dark' : 'light');

  function applyTheme(next){
    theme = next;
    if(theme === 'dark'){
      root.setAttribute('data-theme','dark');
      btn.textContent = 'Light mode';
    } else {
      root.removeAttribute('data-theme');
      btn.textContent = 'Dark mode';
    }
    localStorage.setItem('sc_print_rulebook_theme', theme);
  }

  function balanceSideNotes(){
    const desktopMin = 860;
    document.querySelectorAll('.layout').forEach((layout) => {
      if(!layout.dataset.originalHtml){
        layout.dataset.originalHtml = layout.innerHTML;
      }
      layout.innerHTML = layout.dataset.originalHtml;

      if(window.innerWidth <= desktopMin){
        return;
      }

      const main = layout.querySelector(':scope > div');
      const aside = layout.querySelector(':scope > aside');
      if(!main || !aside){
        return;
      }

      const panels = Array.from(main.children).filter((el) => el.nodeType === 1);
      if(panels.length <= 1){
        return;
      }

      const top = document.createElement('div');
      top.className = 'layout-top';

      const rail = document.createElement('div');
      rail.className = 'layout-main';

      const rest = document.createElement('div');
      rest.className = 'layout-rest';

      layout.innerHTML = '';
      top.appendChild(rail);
      top.appendChild(aside);
      layout.appendChild(top);
      layout.appendChild(rest);

      let splitIndex = 0;
      rail.appendChild(panels[0]);
      splitIndex = 1;

      while(splitIndex < panels.length && rail.offsetHeight < aside.offsetHeight * 0.92){
        rail.appendChild(panels[splitIndex]);
        splitIndex += 1;
      }

      panels.slice(splitIndex).forEach((panel) => rest.appendChild(panel));

      if(!rest.children.length){
        rest.remove();
      }
    });
  }

  let resizeTimer = null;
  function queueBalance(){
    window.clearTimeout(resizeTimer);
    resizeTimer = window.setTimeout(balanceSideNotes, 60);
  }

  btn.addEventListener('click', function(){
    applyTheme(theme === 'dark' ? 'light' : 'dark');
  });

  applyTheme(theme);

  const pop = document.getElementById('termPopover');
  const popName = pop.querySelector('.term-name');
  const popDef = pop.querySelector('.term-def');
  const popBack = document.getElementById('popoverBackLink');
  const popKeyword = document.getElementById('popoverKeywordLink');
  const popClose = pop.querySelector('.term-close');

  function closePopover(){
    pop.classList.remove('show');
  }

  document.addEventListener('click', function(e){
    const btnTerm = e.target.closest('.term-btn');
    if(btnTerm){
      e.preventDefault();
      popName.textContent = btnTerm.dataset.term || 'Term';
      popDef.textContent = btnTerm.dataset.definition || '';
      const page = btnTerm.closest('section.page');
      const heading = page && (page.querySelector('.section-title') || page.querySelector('.part-title'));
      if(popBack){
        popBack.href = page && page.id ? ('#' + page.id) : '#contents';
        popBack.textContent = heading ? ('Return to ' + heading.textContent.trim()) : 'Return to this section';
      }
      if(popKeyword){
        popKeyword.href = '#sec-xiv-02-high-impact-keyword-lessons';
      }
      const rect = btnTerm.getBoundingClientRect();
      const top = Math.min(window.innerHeight - 24, rect.bottom + 12);
      const left = Math.min(window.innerWidth - 24, Math.max(12, rect.left));
      pop.style.top = top + 'px';
      pop.style.left = left + 'px';
      pop.classList.add('show');
      return;
    }
    if(!e.target.closest('#termPopover')){
      closePopover();
    }
  });

  if(popClose){ popClose.addEventListener('click', closePopover); }
  window.addEventListener('scroll', closePopover, {passive:true});

  window.addEventListener('load', queueBalance);
  window.addEventListener('resize', queueBalance);
  queueBalance();
})();

