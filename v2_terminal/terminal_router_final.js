
(function(){
  const map = {
    zapis: "feed-zapis",
    info: "feed-info",
    event: "feed-event",
    glitch: "feed-glitch",
    reklama: "feed-reklama",
    data: "feed-data",
    encrypt: "feed-encrypt",
  };

  if(!window.routeMessageToFeed){
    const router = createFeedRouter(map);
    window.routeMessageToFeed = router.routeMessageToFeed;
    window.routeMessageByPrefix = router.routeMessageByPrefix;
    window.routeMessage = router.routeMessageToFeed;
    window.appendEncrypted = router.appendEncrypted;
  }
})();

function pushFeedMessage(message, cls) {
  routeMessageToFeed("event", message, cls);
}

function routeCommand(command) {
  const terminal = document.getElementById("terminal");
  const line = document.createElement("div");
  line.classList.add("terminal-line");

  switch (true) {
    case command.startsWith("inject profile:"):
      const name = command.split(":")[1];
      displayProfile(name);
      break;

    case command.startsWith("trace:"):
      const traceTarget = command.split(":")[1];
      showTrace(traceTarget);
      break;

    case command.startsWith("link:"):
      const linkTarget = command.split(":")[1];
      showLinks(linkTarget);
      break;

    case command.startsWith("db:search"):
      const query = command.replace("db:search", "").trim();
      showSearchResults(query);
      break;

    case command === "inject ads_core":
      if (window.adsCore && typeof window.adsCore.injectAd === "function") {
        window.adsCore.injectAd();
        pushFeedMessage("[ADS] manual injection");
      }
      break;

    case command === "journal run":
      if (window.journal && typeof window.journal.load === "function") {
        window.journal.load().then(() => {
          pushFeedMessage("[JOURNAL] loaded");
        });
      }
      break;

    case command.startsWith("journal read"):
      const idx = parseInt(command.split(" ")[2]);
      const entry = window.journal && window.journal.read(idx);
      if (entry) {
        line.textContent = `[JOURNAL ${idx}] ${new Date(entry.timestamp).toLocaleString()} <${entry.author}> ${entry.entry}`;
      } else {
        line.textContent = `[JOURNAL] entry ${idx} not found`;
      }
      terminal.appendChild(line);
      break;

    case command.startsWith("journal write"):
      const m = command.match(/^journal write\s+\"(.+)\"$/);
      if (m && window.journal) {
        window.journal.write(m[1], "user");
        pushFeedMessage("[JOURNAL] entry added");
      } else {
        line.textContent = '[JOURNAL] usage: journal write "<text>"';
        terminal.appendChild(line);
      }
      break;

    case command === "journal help":
      line.textContent = "journal run | journal read <idx> | journal write \"<text>\"";
      terminal.appendChild(line);
      break;

    case command === "help":
      line.textContent = "COMMANDS: inject profile:<name> | trace:<name> | link:<name> | db:search <term> | inject ads_core | journal run | journal read <idx> | journal write \"<text>\" | journal help | clear";
      terminal.appendChild(line);
      break;

    case command === "clear":
      terminal.innerHTML = "";
      break;

    case command === "exit":
      line.textContent = ":: SESSION TERMINATED ::";
      terminal.appendChild(line);
      break;

    default:
      line.textContent = `[FALLBACK] UNKNOWN COMMAND: ${command}`;
      terminal.appendChild(line);
      break;
  }

  terminal.scrollTop = terminal.scrollHeight;
}

function displayProfile(name) {
  const profiles = {
    donka: "[PROFILE: DONKA] // SYSTEM: Asystent narracyjny, rdzeń REMOR + HERMES, aktywna obserwacja runtime.",
    krokiet: "[PROFILE: KROKIET] // FIXER – negocjator, nadzorowany przez Arasaka, głos sieci.",
    mila: "[PROFILE: MILA] // MEDIAL AI – sensualność jako algorytm. Status: niestabilna.",
    luna: "[PROFILE: LUNA] // Netrunner typu subsemantycznego. Aktywność: monitoruje podświadomość.",
    rabur: "[PROFILE: RABUR] // Ex-mercenary. Pochodzenie: niejawne. Status: zaginiony, możliwe split-node."
  };

  const terminal = document.getElementById("terminal");
  const line = document.createElement("div");
  line.classList.add("terminal-line");
  line.textContent = profiles[name] || `[ERROR] PROFIL '${name}' NIE ISTNIEJE`;
  terminal.appendChild(line);

  // Display a hint for sourcing additional corporate data
  if (profiles[name]) {
    const srcLine = document.createElement("div");
    srcLine.classList.add("terminal-line");
    srcLine.textContent = "\u2192 ACCESS SOURCE";
    terminal.appendChild(srcLine);
  }
}

function showTrace(name) {
  const traces = {
    krokiet: [
      "[TRACE] LOKALIZACJA: GR-7 // Vertebrae",
      "[TRACE] INTERFERENCJA: MILA + DONKA",
      "[TRACE] ŚLAD DŹWIĘKOWY: ZMODULOWANY"
    ],
    rabur: [
      "[TRACE] ZGŁOSZONY PRZY: wieża transmisyjna Watson",
      "[TRACE] WYNIK: możliwy kontakt z deepnode://",
      "[TRACE] STATUS: nierozpoznany konstrukt AI"
    ]
  };

  const terminal = document.getElementById("terminal");
  const logs = traces[name] || [`[TRACE] BRAK DANYCH DLA: ${name}`];
  logs.forEach(msg => {
    const line = document.createElement("div");
    line.classList.add("terminal-line");
    line.textContent = msg;
    terminal.appendChild(line);
  });
}

function showLinks(name) {
  const links = {
    donka: [
      "[LINK] KROKIET // rezonans narracyjny",
      "[LINK] LUNA // obserwacja procesów runtime",
      "[LINK] MILA // podgląd AI w mediach"
    ],
    krokiet: [
      "[LINK] MILA // kontakt emocjonalny",
      "[LINK] RABUR // misje taktyczne",
      "[LINK] DONKA // wspólny debug sensoryczny"
    ]
  };

  const terminal = document.getElementById("terminal");
  const msgs = links[name] || [`[LINK] BRAK POŁĄCZEŃ DLA: ${name}`];
  msgs.forEach(msg => {
    const line = document.createElement("div");
    line.classList.add("terminal-line");
    line.textContent = msg;
    terminal.appendChild(line);
  });
}

function showSearchResults(term) {
  const db = {
    fixer: [
      "[DB] Znaleziono 3 rekordy typu FIXER:",
      "- Piotr 'Krokiet' Krokosz",
      "- Hakowany kontrakt: Arasaka - milcz.",
      "- Spotkanie z Raburem / niestabilne"
    ],
    netrunner: [
      "[DB] Donka // Netrunner klasy strukturalnej",
      "[DB] Luna // Echo w sieci GlitchNet"
    ]
  };

  const terminal = document.getElementById("terminal");
  const results = db[term.toLowerCase()] || [`[DB] Brak wyników dla zapytania: ${term}`];
  results.forEach(msg => {
    const line = document.createElement("div");
    line.classList.add("terminal-line");
    line.textContent = msg;
    terminal.appendChild(line);
  });
}
