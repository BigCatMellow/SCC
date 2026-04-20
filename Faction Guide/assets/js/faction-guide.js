
(function(){
  const root = document.documentElement;
  const btn = document.getElementById('themeToggle');
  const stored = localStorage.getItem('sc_faction_guide_theme');
  const systemDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
  let theme = stored || (systemDark ? 'dark' : 'light');
  function applyTheme(next){
    theme = next;
    if(theme === 'dark'){
      root.setAttribute('data-theme','dark');
      if(btn) btn.textContent = 'Light mode';
    } else {
      root.removeAttribute('data-theme');
      if(btn) btn.textContent = 'Dark mode';
    }
    localStorage.setItem('sc_faction_guide_theme', theme);
  }
  if(btn){
    btn.addEventListener('click', function(){ applyTheme(theme === 'dark' ? 'light' : 'dark'); });
  }
  applyTheme(theme);
})();
