(function(){
  const ADS_PATH = 'v2_terminal/ads_news_matrix.json';
  let adsEntries = [];
  let started = false;

  function fetchAds(){
    return fetch(ADS_PATH)
      .then(res => res.json())
      .then(data => { adsEntries = data.entries || []; });
  }

  function randomEntry(){
    return adsEntries[Math.floor(Math.random() * adsEntries.length)];
  }

  function createLine(text, cls){
    const d = document.createElement('div');
    d.classList.add('terminal-line');
    if(cls) d.classList.add(cls);
    d.textContent = text;
    return d;
  }

  function displayEntry(entry){
    if(!entry) return;
    const terminal = document.getElementById('terminal');
    if(!terminal) return;
    let el;
    switch(entry.type){
      case 'ascii_banner':
        el = createLine(entry.style + (entry.content ? '\n'+entry.content : ''), 'ad-banner');
        break;
      case 'headline_alert':
        el = createLine(`${entry.style} ${entry.content}`, 'headline-alert');
        break;
      case 'glitch_scroll':
        el = createLine(`${entry.style} ${entry.content}`, 'glitch-scroll');
        break;
      case 'corporate_quote':
        el = createLine(`${entry.style} ${entry.content}`, 'corporate-quote');
        break;
      case 'error_popup':
        el = createLine(`${entry.style} ${entry.content}`, 'error-popup');
        break;
      default:
        el = createLine(entry.content || '');
    }
    terminal.appendChild(el);
    terminal.scrollTop = terminal.scrollHeight;
  }

  function injectAd(){
    if(!adsEntries.length){
      fetchAds().then(()=>displayEntry(randomEntry()));
      return;
    }
    displayEntry(randomEntry());
  }

  function schedule(){
    const delay = 30000 + Math.random()*15000;
    setTimeout(()=>{ injectAd(); schedule(); }, delay);
  }

  function start(){
    if(started) return;
    started = true;
    fetchAds().then(schedule);
  }

  window.adsCore = { start, injectAd };
  window.addEventListener('load', start);
})();
