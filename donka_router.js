(function(){
  const map = {
    info: 'info-hud',
    event: 'event-feed',
    reklama: 'ad-banner',
    ad: 'ad-banner',
    encrypt: 'encrypt-feed',
    zapis: 'zapis-trace',
    data: 'data-dump',
    glitch: 'glitch-layer'
  };

  function routeMessage(type, content, cls){
    const id = map[type];
    const container = id && document.querySelector(`#${id} .feed-body`);
    if(!container) return;
    const div = document.createElement('div');
    div.classList.add('terminal-line');
    if(cls) div.classList.add(cls);
    if(type==='reklama' || type==='ad') div.classList.add('flash-banner');
    if(type==='encrypt') div.classList.add('fade-encrypt');
    div.textContent = content;
    container.appendChild(div);
    container.scrollTop = container.scrollHeight;
  }

  function routeMessageByPrefix(text, cls){
    const m = text.match(/^\[(glitch|info|event|reklama|zapis|data|encrypt)\]/i);
    if(m){
      routeMessage(m[1].toLowerCase(), text, cls);
      return true;
    }
    return false;
  }

  function glitchInject(text){
    routeMessage('glitch', text);
  }

  window.routeMessage = routeMessage;
  window.routeMessageByPrefix = routeMessageByPrefix;
  window.routeMessageToFeed = routeMessage; // compatibility
  window.glitchInject = glitchInject;
})();
