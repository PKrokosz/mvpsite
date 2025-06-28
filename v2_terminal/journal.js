(function(){
  const JOURNAL_PATH = 'journal.json';
  const GITHUB_REPO = window.JOURNAL_GITHUB_REPO;
  const GITHUB_TOKEN = window.JOURNAL_GITHUB_TOKEN;
  const GITHUB_BRANCH = window.JOURNAL_GITHUB_BRANCH || 'main';
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

  function syncToGitHub(entry){
    if(!GITHUB_TOKEN || !GITHUB_REPO){
      return Promise.resolve();
    }
    const headers = {
      'Authorization': 'token ' + GITHUB_TOKEN,
      'Accept': 'application/vnd.github.v3+json'
    };
    const api = `https://api.github.com/repos/${GITHUB_REPO}/contents/${JOURNAL_PATH}`;
    return fetch(`${api}?ref=${GITHUB_BRANCH}`, { headers })
      .then(r => r.json())
      .then(data => {
        const sha = data.sha;
        let content = '';
        try{ content = atob(data.content.replace(/\n/g, '')); }catch(e){}
        let json;
        try{ json = JSON.parse(content); }catch(e){ json = { entries: [] }; }
        if(!Array.isArray(json.entries)) json.entries = [];
        json.entries.push(entry);
        const body = {
          message: 'Add journal entry',
          content: btoa(JSON.stringify(json, null, 2)),
          sha,
          branch: GITHUB_BRANCH
        };
        return fetch(api, {
          method: 'PUT',
          headers: Object.assign({ 'Content-Type': 'application/json' }, headers),
          body: JSON.stringify(body)
        });
      });
  }

  function write(entryText, author='anon'){
    const entry = { timestamp: Date.now(), author, entry: entryText };
    entries.push(entry);
    save();
    if(GITHUB_TOKEN && GITHUB_REPO){
      syncToGitHub(entry).catch(e => console.error('GitHub sync failed', e));
    }
    return entry;
  }

  function read(idx){
    return entries[idx];
  }

  function all(){
    return entries.slice();
  }

  window.journal = { load, write, read, all, syncToGitHub };
  window.addEventListener('load', load);
})();
