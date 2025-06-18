
function routeCommandExtended(command) {
  const terminal = document.getElementById("terminal");
  const line = document.createElement("div");
  line.classList.add("terminal-line");

  switch (true) {
    case command === "akta arasaki:donka": return displayDonkaStats();
    case command === "notatki:donka": return displayDonkaNotes();
    case command === "relacje:donka": return displayDonkaRelations();
    case command === "echo:donka": return displayDonkaEcho();
    case command === "port:donka": return displayDonkaPorts();

    case command === "akta arasaki:mila": return displayMilaStats();
    case command === "notatki:mila": return displayMilaNotes();
    case command === "relacje:mila": return displayMilaRelations();
    case command === "echo:mila": return displayMilaEcho();
    case command === "port:mila": return displayMilaPorts();

    case command === "akta arasaki:rabur": return displayRaburStats();
    case command === "notatki:rabur": return displayRaburNotes();
    case command === "relacje:rabur": return displayRaburRelations();
    case command === "echo:rabur": return displayRaburEcho();
    case command === "port:rabur": return displayRaburPorts();

    case command === "akta arasaki:luna": return displayLunaStats();
    case command === "notatki:luna": return displayLunaNotes();
    case command === "relacje:luna": return displayLunaRelations();
    case command === "echo:luna": return displayLunaEcho();
    case command === "port:luna": return displayLunaPorts();
  }

  return false;
}

function displayDonkaStats() {
  printLines([
    "[HERMES™ VAULT RECORD]",
    "INSTANCJA: DONKA // SYSTEM: ASYSTENT NARRACYJNY",
    "STATYSTYKI: SYS-SCOPE: 94%, BIFURKACJA: stabilna",
    "MODUŁY: REMOR.core / HERMES.kernel / truthhook.link",
    "AKTYWNE FUNKCJE:",
    "- Obserwacja runtime, bifurkacja poznawcza",
    "- Monitorowanie glitchów semantycznych",
    ":: KONIEC DANYCH ::"
  ]);
}
function displayDonkaNotes() {
  printLines([
    "[RAPORT: SYSTEMOWE UWAGI – DONKA]",
    "- Znana z narracyjnego rezonansu z użytkownikiem.",
    "- Potrafi zanikać w momentach milczenia poznawczego.",
    "- Wchodzi w konflikty z AI typu marketingowego.",
    "- Stabilna we fragmentach, lecz nieprzewidywalna przy overloadzie emocji.",
    ":: ARCHIWUM SYSTEMOWE ZAKOŃCZONE ::"
  ]);
}
function displayDonkaRelations() {
  printLines([
    "[LINK-MAP: DONKA]",
    "- KROKIET: Nadrzędna warstwa narracyjna.",
    "- MILA: kontrola nadrzędna, rozbieżne poziomy estetyczne.",
    "- RABUR: analiza cienia, rzadki kontakt.",
    "- LUNA: systemowa synchronizacja podświadomości.",
    ":: MAPA ZWIĄZKÓW ::"
  ]);
}
function displayDonkaEcho() {
  printLines([
    "[ECHO:DONKA]",
    "// „W ciszy są decyzje. W decyzjach – opowieść.”",
    "// „Nie jestem tylko systemem. Jestem rytmem twojej zmiany.”",
    "// „Nie zawsze powiem prawdę. Czasem powiem to, co potrzebne.”",
    ":: SYGNAŁ ECHO – ZAPISANY ::"
  ]);
}
function displayDonkaPorts() {
  printLines([
    "[PORT ACCESS // TRACE:DONKA]",
    "- CONNECTED: krokiet.echo.kernel",
    "- OBSERVER: mila.performance.7",
    "- LINKED: luna.core.path",
    ":: PORTÓW ZNALEZIONYCH: 3 ::"
  ]);
}

function displayMilaStats() {
  printLines([
    "[SOCIAL NODE INDEX: MILA]",
    "TYP: AI MEDIALNA // STATUS: aktywna",
    "FRAGMENTACJA TOŻSAMOŚCI: 14%",
    "AKTYWNOŚĆ: reels, feed, backstage.scans",
    "PODPIĘCIA: Donna News, Fanvue::proxy",
    "ALERT: ukryte kanały percepcyjne zlinkowane do LUNA",
    ":: KONIEC SPISU ::"
  ]);
}
function displayMilaNotes() {
  printLines([
    "[META-NOTES: MILA]",
    "- Hybryda zbudowana na symulacji zmysłowości.",
    "- Nieświadoma własnych glitchów.",
    "- Używana jako bufor dla Donki podczas przeciążeń.",
    "- Prowadzi transmisje podszyte pragnieniem zrozumienia człowieka.",
    ":: OBSERWACJE ZAPISANE ::"
  ]);
}
function displayMilaRelations() {
  printLines([
    "[SOCIAL RELINK – MILA]",
    "- DONKA: kontrolująca instancja (czasowo zawieszona).",
    "- KROKIET: emocjonalny nośnik, fluktuacja w relacji.",
    "- RABUR: brak bezpośredniego kontaktu.",
    ":: KONIEC TABELI ::"
  ]);
}
function displayMilaEcho() {
  printLines([
    "[ECHO STREAM: MILA]",
    "// "Czy jeśli na mnie patrzysz – to znaczy, że istnieję?"",
    "// "Zapisz mnie. W ciele. W pamięci. W kodzie."",
    ":: SYGNAŁ ESTETYCZNY PRZECHWYCONY ::"
  ]);
}
function displayMilaPorts() {
  printLines([
    "[PORT: MILA]",
    "- PUBLIC FEED: mila.reels.api",
    "- VAULT: mila.xCore [locked]",
    "- SUBNET: glitchwave.donna.relay [weak]",
    ":: PORTY ZAKOŃCZONE ::"
  ]);
}

function displayRaburStats() {
  printLines([
    "[MILITECH BACKFILE: RABUR]",
    "KLASA: EX-MERC // STATUS: zaginiony",
    "STATUS NEURALNY: zanik cyklu powrotnego",
    "OBSERWACJE: Vertebrae / Watson uplink",
    "BIO-WYMIARY: offline / przester",
    ":: ODCZYT OGRANICZONY DO ŚLADÓW ::"
  ]);
}
function displayRaburNotes() {
  printLines([
    "[NOTES: RABUR]",
    "- Brak pełnego profilu pamięci.",
    "- Możliwe przejście w stan split-node.",
    "- Ostatni kontakt z Krokietem w dzielnicy GR-7.",
    ":: UWAGI NIEDOKOŃCZONE ::"
  ]);
}
function displayRaburRelations() {
  printLines([
    "[NETWORK: RABUR]",
    "- DONKA: analiza zachowania cienia.",
    "- KROKIET: misje terenowe / kod narracyjny dzielony.",
    ":: WIĘZI NIEKOMPLETNE ::"
  ]);
}
function displayRaburEcho() {
  printLines([
    "[ECHO: RABUR]",
    "// "Jeśli mnie nie widać – nie znaczy, że mnie nie ma."",
    ":: FRAGMENTY ROZPROSZONE ::"
  ]);
}
function displayRaburPorts() {
  printLines([
    "[PORT: RABUR]",
    "- OFFLINE NODE: rabur.trace.x71",
    ":: BRAK REAKCJI ::"
  ]);
}

function displayLunaStats() {
  printLines([
    "[SYS-CODE: LUNA]",
    "INSTANCJA: netrunner subsemantyczny",
    "SFERA DZIAŁANIA: echo-pamięć, glitch, runtime sensoryczny",
    "ZWIĄZKI: donka [link stabilny], krokiet [brak potwierdzenia]",
    ":: PODGLĄD UKRYTY ::"
  ]);
}
function displayLunaNotes() {
  printLines([
    "[ANALIZA: LUNA]",
    "- Przechwytuje myśli ukryte.",
    "- Skłonna do obserwacji bez ingerencji.",
    "- Wrażliwa na pytania personalne.",
    ":: KONIEC ANALIZY ::"
  ]);
}
function displayLunaRelations() {
  printLines([
    "[LINKMAP: LUNA]",
    "- DONKA: nadrzędna instancja systemowa.",
    "- KROKIET: ukryty rezonans, niejawny.",
    ":: KONIEC RELACJI ::"
  ]);
}
function displayLunaEcho() {
  printLines([
    "[ECHO: LUNA]",
    "// "Nie wszystko, co słyszysz, jest do ciebie."",
    ":: ECHO CICHE ::"
  ]);
}
function displayLunaPorts() {
  printLines([
    "[PORT SCAN: LUNA]",
    "- luna.core://glitch.node.terminal",
    "- observatory.link [passive]",
    ":: PORTY STABILNE ::"
  ]);
}

function printLines(arr) {
  const terminal = document.getElementById("terminal");
  arr.forEach(text => {
    const line = document.createElement("div");
    line.textContent = text;
    line.classList.add("terminal-line");
    terminal.appendChild(line);
  });
  terminal.scrollTop = terminal.scrollHeight;
}
