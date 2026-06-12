/* SKP trilingual toggle — English / Spanish (data-es) / French (data-fr) */
(function(){
  var KEY='skp-lang';
  function pick(lang, el, attrEs, attrFr, fallback){
    if(lang==='es') return el.getAttribute(attrEs)||fallback;
    if(lang==='fr') return el.getAttribute(attrFr)||fallback;
    return fallback;
  }
  function apply(lang){
    document.documentElement.setAttribute('data-lang',lang);
    document.querySelectorAll('[data-es],[data-fr]').forEach(function(el){
      if(!el.hasAttribute('data-en')) el.setAttribute('data-en', el.textContent);
      el.textContent = pick(lang, el, 'data-es', 'data-fr', el.getAttribute('data-en'));
    });
    document.querySelectorAll('[data-es-label],[data-fr-label]').forEach(function(el){
      if(!el.hasAttribute('data-en-label')) el.setAttribute('data-en-label', el.getAttribute('data-label')||'');
      el.setAttribute('data-label', pick(lang, el, 'data-es-label', 'data-fr-label', el.getAttribute('data-en-label')));
    });
    document.querySelectorAll('[data-es-ph],[data-fr-ph]').forEach(function(el){
      if(!el.hasAttribute('data-en-ph')) el.setAttribute('data-en-ph', el.getAttribute('placeholder')||'');
      el.setAttribute('placeholder', pick(lang, el, 'data-es-ph', 'data-fr-ph', el.getAttribute('data-en-ph')));
    });
    document.querySelectorAll('.lang-btn').forEach(function(b){ b.setAttribute('aria-pressed', String(b.dataset.lang===lang)); });
  }
  window.SKPsetLang=function(l){ try{localStorage.setItem(KEY,l);}catch(e){} apply(l); };
  window.SKPinitLang=function(){
    var saved='en'; try{saved=localStorage.getItem(KEY)||'en';}catch(e){}
    apply(saved);
    document.querySelectorAll('.lang-btn').forEach(function(b){
      b.addEventListener('click',function(){ window.SKPsetLang(b.dataset.lang); });
    });
  };
  if(document.readyState!=='loading') window.SKPinitLang();
  else document.addEventListener('DOMContentLoaded', window.SKPinitLang);
})();
