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

  if(!window.routeMessageToFeed){
    const router = createFeedRouter(map, {flashReklama:true});
    window.routeMessageToFeed = router.routeMessageToFeed;
    window.routeMessageByPrefix = router.routeMessageByPrefix;
    window.routeMessage = router.routeMessageToFeed; // compatibility
    window.appendEncrypted = router.appendEncrypted;
  }

  function glitchInject(text){
    if(typeof window.routeMessageToFeed === 'function'){
      window.routeMessageToFeed('glitch', text);
    }
  }

  window.glitchInject = glitchInject;
})();
