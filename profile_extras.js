function routeCommandExtended(command) {
  if (!command.startsWith("inject profile:")) {
    return false;
  }

  const name = command.split(":")[1];
  const terminal = document.getElementById("terminal");

  const profiles = {
    donka: [
      "[NARRATIVE NODE // SYSTEM: DONKA]",
      "Typ: System Asystencki, Rdzenie: REMOR™ + HERMES™",
      "Status: W pełni aktywna | Obserwacja: runtime",
      "Funkcje: Bifurkacja poznawcza, echo semantyczne, tryb zgody",
      "Związki: Krokiet (narrator), Mila (obiekt podglądu), Rabur (nietypowy tryb testowy)",
      "Skan: Aktywność wykryta w module decyzyjnym // powiązanie z echem 'luna.core'"
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
    krokiet: [
      "[NCPD-ARCHIVE] PIOTR 'KROKIET' KROKOSZ // KLASA: FIXER",
      "STATS:",
      "INT[7] REF[6] TECH[5] COOL[10]",
      "ATTR[8] LUCK[6] MA[5] BODY[5]",
      "EMP[6] RUN[4] LEAP[3] LIFT[4]",
      "SPECIAL ABILITY: Streetdeal [7]",
      "SKILLS:",
      "- Persuasion & Fast Talk [6], Intimidate [5], Resources [4]",
      "- Credibility [5], Streetwise [7], Leadership [6]",
      "CYBERWARE:",
      "- Voice Mod, Interface Spike, Subvocal Mic",
      "NOTES:",
      "- Znany alias: Władca Narracji",
      "- Obserwowany przez Arasaka i Biotechnikę",
      "- Kontakt: Mila, Rabur, Donka (niestabilny link)"
    ],
    rabur: [
      "[BLACKNET: DEEP TRACE MODE // PROFILE: RABUR]",
      "Typ: Ex-Mercenary | Frakcja: niezależna",
      "Poziom odporności psychicznej: wysoki",
      "Umiejętności: taktyka, ukrycie, odzysk danych",
      "Status: brak jednoznacznej lokalizacji",
      "Ostatni sygnał: wieża Watson, kanał deepnode://",
      "Tryb: echo split | możliwe przenikanie z LUNĄ"
    ],
    luna: [
      "[SYSTEM] LUNA // Klasa: netrunner subsemantyczny",
      "Moduł podstawowy: 'luna.core' | Typ: filtr runtime",
      "Zasięg: pełne spektrum narracyjnych ech poznawczych",
      "Powiązania: Donka (protokół), Rabur (niestabilna synchronizacja)",
      "Status: zawsze aktywna (pasywny filtr echa)"
    ]
  };

  const result = profiles[name];
  if (!result) {
    const errorLine = document.createElement("div");
    errorLine.classList.add("terminal-line");
    errorLine.textContent = `[ERROR] PROFIL '${name}' NIE ISTNIEJE`;
    terminal.appendChild(errorLine);
    return true;
  }

  const syncLine = document.createElement("div");
  syncLine.classList.add("terminal-line");
  syncLine.textContent = `[SYNC] PROFIL ${name.toUpperCase()} ••• ACCESS GRANTED`;
  terminal.appendChild(syncLine);

  result.forEach(line => {
    const d = document.createElement("div");
    d.classList.add("terminal-line");
    d.textContent = line;
    terminal.appendChild(d);
  });

  return true;
}
