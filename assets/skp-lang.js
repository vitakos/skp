/* SKP quadrilingual toggle — English / Spanish / French / Russian */
(function(){
  var KEY='skp-lang';
  function pick(lang, el, attrEs, attrFr, attrRu, fallback){
    if(lang==='es') return el.getAttribute(attrEs)||fallback;
    if(lang==='fr') return el.getAttribute(attrFr)||fallback;
    if(lang==='ru') return el.getAttribute(attrRu)||el.getAttribute(attrEs)||fallback;
    return fallback;
  }
  function apply(lang){
    document.documentElement.setAttribute('data-lang',lang);
    document.querySelectorAll('[data-es],[data-fr],[data-ru]').forEach(function(el){
      if(!el.hasAttribute('data-en')) el.setAttribute('data-en', el.textContent);
      el.textContent = pick(lang, el, 'data-es', 'data-fr', 'data-ru', el.getAttribute('data-en'));
    });
    document.querySelectorAll('[data-es-label],[data-fr-label],[data-ru-label]').forEach(function(el){
      if(!el.hasAttribute('data-en-label')) el.setAttribute('data-en-label', el.getAttribute('data-label')||'');
      el.setAttribute('data-label', pick(lang, el, 'data-es-label', 'data-fr-label', 'data-ru-label', el.getAttribute('data-en-label')));
    });
    document.querySelectorAll('[data-es-ph],[data-fr-ph],[data-ru-ph]').forEach(function(el){
      if(!el.hasAttribute('data-en-ph')) el.setAttribute('data-en-ph', el.getAttribute('placeholder')||'');
      el.setAttribute('placeholder', pick(lang, el, 'data-es-ph', 'data-fr-ph', 'data-ru-ph', el.getAttribute('data-en-ph')));
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
