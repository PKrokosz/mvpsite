(function(){
  function appendEncrypted(text){
    const feed = document.getElementById('encrypt-feed');
    if(!feed) return;
    const line = document.createElement('div');
    const words = text.split(' ');
    words.forEach((word, idx)=>{
      const span = document.createElement('span');
      span.classList.add('encrypted');
      span.textContent = word;
      line.appendChild(span);
      if(idx < words.length-1){
        line.appendChild(document.createTextNode(' '));
      }
    });
    feed.appendChild(line);
    feed.scrollTop = feed.scrollHeight;
  }
  window.appendEncrypted = appendEncrypted;
})();
