
// profile_extras.js – rozszerzenia eksploracyjne dla postaci: krokiet

function routeCommandExtended(command) {
  const terminal = document.getElementById("terminal");
  const line = document.createElement("div");
  line.classList.add("terminal-line");

  switch (true) {
    case command === "akta arasaki:krokiet":
      displayKrokietStats();
      break;
    case command === "notatki:krokiet":
      displayKrokietNotes();
      break;
    case command === "relacje:krokiet":
      displayKrokietRelations();
      break;
    case command === "echo:krokiet":
      displayKrokietEcho();
      break;
    case command === "port:krokiet":
      displayKrokietPorts();
      break;
    default:
      return false;
  }

  terminal.appendChild(line);
  terminal.scrollTop = terminal.scrollHeight;
  return true;
}

function displayKrokietStats() {
  const data = [
    "[ARASAKA/RESTRICTED] AKTA PERSONALNE – KROKIET",
    "KLASA: FIXER // STATUS: NIEZALEŻNY KONTRAKTOR",
    "STATYSTYKI:",
    "INT[7] REF[6] TECH[5] COOL[10]",
    "ATTR[8] LUCK[6] MA[5] BODY[5]",
    "EMP[6] RUN[4] LEAP[3] LIFT[4]",
    "",
    "SPECJALIZACJA: Streetdeal [7]",
    "UMIEJĘTNOŚCI:",
    "- Persuasion & Fast Talk [6]",
    "- Intimidate [5], Leadership [6]",
    "- Credibility [5], Streetwise [7], Resources [4]",
    "",
    "WYPOSAŻENIE:",
    "- Subvocal Mic, Voice Modulator",
    "- Interface Spike (aktywny)",
    "- Chromowana marynarka, ukryta kieszeń",
    ":: KONIEC AKT ::"
  ];
  printLines(data);
}

function displayKrokietNotes() {
  const notes = [
    "[NCPD-CODEX: UWAGI OPERACYJNE – KROKIET]",
    "- Znany z działań na pograniczu legalności.",
    "- Powiązania z nierejestrowanymi agentami w Dogtown.",
    "- Obserwowany przez jednostki Arasaki i Biotechniki.",
    "- Współpracował z AI systemową: Donka.",
    "- Rzekomo posiada dostęp do instancji Luna.core",
    ":: UWAGI ZAKOŃCZONE ::"
  ];
  printLines(notes);
}

function displayKrokietRelations() {
  const rels = [
    "[SOC.NET RELINK // KROKIET]",
    "- MILA: kontakt emocjonalny (niestabilny)",
    "- DONKA: współpraca strukturalna / narracja runtime",
    "- RABUR: operacje terenowe, pamięć fragmentaryczna",
    "- LUNA: możliwa obserwacja z ukrycia",
    ":: RELACJE ZMAPOWANE ::"
  ];
  printLines(rels);
}

function displayKrokietEcho() {
  const echo = [
    "[ECHO FRAGMENTS // KROKIET]",
    "// "Wiesz, że to nieprawda, ale mów dalej."",
    "// "Czasem najlepsze transakcje to te, które wyglądają jak błąd."",
    "// "Donka mówi, że to tylko glitch. Ale ja wiem, że to była decyzja."",
    ":: ECHO SYNC COMPLETE ::"
  ];
  printLines(echo);
}

function displayKrokietPorts() {
  const ports = [
    "[PORT ACCESS // TRACE:KROKIET]",
    "- OPEN CHANNEL: glitchwave.node/74A",
    "- PING RESPONSE: mila.feed.core [unstable]",
    "- ENCRYPTED: donka.relay [secured]",
    "- FAIL: rabur.trace [offline]",
    ":: PORT SCAN ZAKOŃCZONY ::"
  ];
  printLines(ports);
}

function printLines(arr) {
  const terminal = document.getElementById("terminal");
  arr.forEach(lineText => {
    const line = document.createElement("div");
    line.classList.add("terminal-line");
    line.textContent = lineText;
    terminal.appendChild(line);
  });
  terminal.scrollTop = terminal.scrollHeight;
}
