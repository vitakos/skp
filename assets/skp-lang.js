/* SKP bilingual toggle — English literal in markup, Spanish in data-es */
(function(){
  var KEY='skp-lang';
  function apply(lang){
    document.documentElement.setAttribute('data-lang',lang);
    document.querySelectorAll('[data-es]').forEach(function(el){
      if(!el.hasAttribute('data-en')) el.setAttribute('data-en', el.textContent);
      el.textContent = lang==='es' ? el.getAttribute('data-es') : el.getAttribute('data-en');
    });
    document.querySelectorAll('[data-es-label]').forEach(function(el){
      if(!el.hasAttribute('data-en-label')) el.setAttribute('data-en-label', el.getAttribute('data-label')||'');
      el.setAttribute('data-label', lang==='es' ? el.getAttribute('data-es-label') : el.getAttribute('data-en-label'));
    });
    document.querySelectorAll('[data-es-ph]').forEach(function(el){
      if(!el.hasAttribute('data-en-ph')) el.setAttribute('data-en-ph', el.getAttribute('placeholder')||'');
      el.setAttribute('placeholder', lang==='es' ? el.getAttribute('data-es-ph') : el.getAttribute('data-en-ph'));
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
