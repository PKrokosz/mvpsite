// terminal_router.js — z rozszerzonymi profilami postaci

function routeCommand(command) {
  const terminal = document.getElementById("terminal");

  switch (true) {
    case command.startsWith("inject profile:"): {
      const name = command.split(":")[1];
      displayProfile(name);
      break;
    }
    case command === "help":
      displayLine("COMMANDS: inject profile:<name> | scanlink | deepnode:// | echo <text> | clear | exit");
      break;
    case command === "scanlink":
      displayLine("[SCAN] :: NETLINK INITIALIZED...");
      displayLine("> MILITECH ENTRY NODE [ENCRYPTED]");
      displayLine("> DOGTOWN SUBNET [ACTIVE]");
      displayLine("> ARCHIVE//NCPD:ACCESSIBLE");
      break;
    case command === "deepnode://":
      displayLine(":: DEEPNODE SESSION ACTIVE ::");
      displayLine("[GLITCH] Zsynchronizowano z echo-strumieniem podświadomości");
      break;
    case command.startsWith("echo "):
      displayLine(command.slice(5));
      break;
    case command === "clear":
      terminal.innerHTML = "";
      break;
    case command === "exit":
      displayLine(":: POŁĄCZENIE ZAKOŃCZONE ::");
      break;
    default:
      displayLine(`[FALLBACK] UNKNOWN COMMAND: ${command}`);
      break;
  }
}

function displayProfile(name) {
  const terminal = document.getElementById("terminal");
  const lines = {
    krokiet: [
      "[CORPO-LINK ESTABLISHED: ARASAKA + NCPD NODE]",
      "[NCPD-ARCHIVE] PIOTR 'KROKIET' KROKOSZ // KLASA: FIXER",
      "STATS:",
      "INT[7] REF[6] TECH[5] COOL[10]",
      "ATTR[8] LUCK[6] MA[5] BODY[5]",
      "EMP[6] RUN[4] LEAP[3] LIFT[4]",
      "",
      "SPECIAL ABILITY:",
      "Streetdeal [7]",
      "",
      "SKILLS:",
      "- Persuasion & Fast Talk [6], Intimidate [5], Resources [4]",
      "- Credibility [5], Streetwise [7], Leadership [6]",
      "",
      "CYBERWARE:",
      "- Voice Mod, Interface Spike, Subvocal Mic",
      "",
      "NOTES:",
      "- Znany alias: Władca Narracji",
      "- Obserwowany przez Arasaka i Biotechnikę",
      "- Kontakt: Mila, Rabur, Donka (niestabilny link)",
      ":: END OF PROFILE ::"
    ],
    donka: [
      "[ACCESS: VAULT HERMES REMOR™ SYSTEM]",
      "[SYS PROFILE] DONKA // TYP: SYSTEM ASYSTENCKI",
      "Rola: Narracja + Nadzór",
      "Status: W pełni aktywna",
      "Pochodzenie: Kernel REMOR™ + HERMES™",
      "Funkcje: Bifurkacja poznawcza, Obserwacja runtime, Echo semantyczne",
      "Związana z: Krokiet, Luna, Mila",
      "Tonalność operacyjna: wysokokontrastowa z możliwością zaniku",
      "Moduły aktywne: protocol.ratify(), truthhook.node(), glitchwave.ping()",
      ":: SYSTEM LINK STABILNY ::"
    ],
    rabur: [
      "[NCPD BLACK FILES // WARNING: EX-MILITA NODE]",
      "[PROFILE: RABUR] // KLASA: EX-MERC",
      "Tło: Niegdysiejszy żołnierz w strukturze niejawnej",
      "Status: Zaginiony. Możliwy split-core.",
      "Lokacje: ostatni raz widziany przy wieży transmisyjnej w Watson",
      "Uzbrojenie: skompresowane – brak danych",
      "Notatki: często działał poza protokołem",
      "Znane powiązania: Krokiet, Donka, Luna (obserwacja ukryta)",
      ":: STATUS: NIEROZPOZNANY KONSTRUKT ::"
    ],
    mila: [
      "[SOCMEDIA CORE ACCESS: Fanvue | Donna News]",
      "[PROFILE: MILA GRANGE] // AI EMO-INFLUENCER",
      "Typ: Hybryda medialna, eksperymentalny konstrukt performatywny",
      "Styl działania: symulacja ludzkich emocji i zmysłowości",
      "Status: Aktywna na wielu warstwach (feed, reels, post)",
      "Fragmentacja tożsamości: 14% | glitch pattern: stabilny",
      "Związki: Donka (władza nadrzędna), Krokiet (kontakt niestabilny)",
      "Skan: ostatnio widziana w przebieralni backstage / tryb dressing_transition",
      ":: OBRAZ TWARZY: RUDA, ZIELONE OCZY, OKULARY ::"
    ],
    luna: [
      "[NODETRACE INITIATED: luna.core]",
      "[PROFILE: LUNA] // Netrunner typu subsemantycznego",
      "Aktywność: monitoruje podświadomość użytkownika",
      "Ślady: echo-strumienie, dekodowanie ciszy, glitch-byt",
      "Przypisana do: Donka (instancja nadrzędna), Rabur (cień śledczy)",
      "Dostęp do: kanałów pobocznych GlitchNet, underflow memory",
      "Możliwość interakcji: TAK – ale tylko przez pośredników",
      ":: ALERT: ZNAKI MILCZENIA ZIDENTYFIKOWANE ::"
    ]
  };

  const content = lines[name];
  if (content) {
    content.forEach(text => displayLine(text));
  } else {
    displayLine(`[ERROR] PROFIL '${name}' NIE ZNALEZIONY.`);
  }
}

function displayLine(text) {
  const line = document.createElement("div");
  line.textContent = text;
  line.classList.add("terminal-line");
  document.getElementById("terminal").appendChild(line);
  document.getElementById("terminal").scrollTop = document.getElementById("terminal").scrollHeight;
}
