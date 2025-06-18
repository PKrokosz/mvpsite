(function(){
  const ADS_PATH = 'v2_terminal/ads_news_matrix.json';
  let adsEntries = [];
  let started = false;
  const sideFeed = document.getElementById('sidefeed');

  function pushFeedMessage(message, cls){
    if(!sideFeed) return;
    const msg = document.createElement('div');
    msg.classList.add('terminal-line');
    if(cls) msg.classList.add(cls);
    msg.textContent = message;
    sideFeed.appendChild(msg);
    sideFeed.scrollTop = sideFeed.scrollHeight;
  }

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
    let text;
    let cls;
    switch(entry.type){
      case 'ascii_banner':
        text = entry.style + (entry.content ? '\n'+entry.content : '');
        cls = 'ad-banner';
        break;
      case 'headline_alert':
        text = `${entry.style} ${entry.content}`;
        cls = 'headline-alert';
        break;
      case 'glitch_scroll':
        text = `${entry.style} ${entry.content}`;
        cls = 'glitch-scroll';
        break;
      case 'corporate_quote':
        text = `${entry.style} ${entry.content}`;
        cls = 'corporate-quote';
        break;
      case 'error_popup':
        text = `${entry.style} ${entry.content}`;
        cls = 'error-popup';
        break;
      default:
        text = entry.content || '';
    }
    pushFeedMessage(text, cls);
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
