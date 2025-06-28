(function(global){
  function createFeedRouter(map, opts={}) {
    const flashReklama = !!opts.flashReklama;
    function appendEncrypted(content){
      const id = map['encrypt'];
      const container = id && document.querySelector(`#${id} .feed-body`);
      if(!container) return;
      const div = document.createElement('div');
      div.classList.add('terminal-line','fade-encrypt');
      div.textContent = content;
      container.appendChild(div);
      container.scrollTop = container.scrollHeight;
    }
    function routeMessageToFeed(type, content, cls){
      if(type === 'encrypt'){
        appendEncrypted(content);
        return;
      }
      const id = map[type];
      const container = id && document.querySelector(`#${id} .feed-body`);
      if(!container) return;
      const div = document.createElement('div');
      div.classList.add('terminal-line');
      if(cls) div.classList.add(cls);
      if(flashReklama && (type==='reklama' || type==='ad')) div.classList.add('flash-banner');
      div.textContent = content;
      container.appendChild(div);
      container.scrollTop = container.scrollHeight;
    }
    function routeMessageByPrefix(text, cls){
      const m = text.match(/^\[(glitch|info|event|reklama|zapis|data|encrypt)\]/i);
      if(m){
        routeMessageToFeed(m[1].toLowerCase(), text, cls);
        return true;
      }
      return false;
    }
    return {routeMessageToFeed, routeMessageByPrefix, appendEncrypted};
  }
  global.createFeedRouter = createFeedRouter;
})(window);
