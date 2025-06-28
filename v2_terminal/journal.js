(function(){
  const JOURNAL_PATH = 'journal.json';
  let entries = [];

  function load(){
    return fetch(JOURNAL_PATH)
      .then(r => r.json())
      .then(data => {
        entries = data.entries || [];
        try{ localStorage.setItem('journalCache', JSON.stringify(entries)); }catch(e){}
      })
      .catch(() => {
        try{
          const cached = localStorage.getItem('journalCache');
          if(cached){ entries = JSON.parse(cached); }
        }catch(e){}
      });
  }

  function save(){
    try{ localStorage.setItem('journalCache', JSON.stringify(entries)); }catch(e){}
  }

  function write(entryText, author='anon'){
    const entry = { timestamp: Date.now(), author, entry: entryText };
    entries.push(entry);
    save();
    return entry;
  }

  function read(idx){
    return entries[idx];
  }

  function all(){
    return entries.slice();
  }

  window.journal = { load, write, read, all };
  window.addEventListener('load', load);
})();
