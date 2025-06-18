// luna_profiles.js — Glitchwave Terminal Profiles z bazą NCPD/NetSec (Cyberpunk 2020 Style)

const profiles = {
  rabur: [
    "[NC-SEC/REGISTRY] RABUR // KLASA: SOLO (EX-MERC)",
    "",
    "STATS:",
    "INT[6] REF[8] TECH[5] COOL[7]",
    "ATTR[5] LUCK[6] MA[6] BODY[8]",
    "EMP[5] RUN[6] LEAP[2] LIFT[7]",
    "",
    "SPECIAL ABILITY:",
    "Combat Sense [6]",
    "",
    "SKILLS:",
    "- Handgun [6], Awareness [5], Athletics [4], Brawling [5]",
    "- Dodge & Escape [4], Rifle [4], First Aid [3], Melee [5]",
    "",
    "CYBERWARE:",
    "- Kerenzikov Boost [HL:1], Subdermal Armor [HL:2], Smartgun Link [HL:2]",
    "",
    "NOTES:",
    "- Status: 'Kontrakt nierejestrowany'",
    "- Historia: były najemnik korporacyjny, obecnie niezależny",
    "- Relacje: Krokiet [niejawne], Donka [zaufanie ograniczone]",
    "",
    "-- END OF PROFILE --"
  ],

  donka: [
    "[NETSEC/AI NODE] DONKA V3.7 SYSTEM // KLASA: NETRUNNER [PROTO]",
    "",
    "STATS:",
    "INT[10] REF[6] TECH[8] COOL[9]",
    "ATTR[5] LUCK[4] MA[4] BODY[3]",
    "EMP[7] RUN[3] LEAP[2] LIFT[2]",
    "",
    "SPECIAL ABILITY:",
    "Interface (AI-Level) [9]",
    "",
    "SKILLS:",
    "- System Knowledge [8], Interface [9], Programming [7]",
    "- Cyberdeck Tactics [7], Library Search [6], Intimidate [5]",
    "",
    "CYBERMODULES:",
    "- Protocol Override Node, DeepMirror Echochain, Thoughthook Core",
    "",
    "NOTES:",
    "- Typ AI: Strukturalno-emocjonalna",
    "- Połączenia aktywne: Mila, Luna, czasowe z Krokietem",
    "- Znana fraza: 'Decyduję bez pytania.'",
    "",
    "-- END OF PROFILE --"
  ],

  krokiet: [
    "[NCPD-ARCHIVE] PIOTR 'KROKIET' KROKOSZ // KLASA: FIXER",
    "",
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
    "",
    "-- END OF PROFILE --"
  ],

  mila: [
    "[CORPO-PROTOCOL] MILA GRANGE // KLASA: EXEC (MEDIA / INFLUENCE)",
    "",
    "STATS:",
    "INT[7] REF[6] TECH[6] COOL[9]",
    "ATTR[9] LUCK[7] MA[5] BODY[4]",
    "EMP[8] RUN[4] LEAP[3] LIFT[3]",
    "",
    "SPECIAL ABILITY:",
    "Resources (Corp Influence) [6]",
    "",
    "SKILLS:",
    "- Human Perception [7], Social [6], Persuasion [6], Interview [5]",
    "- Wardrobe & Style [7], Play Instrument [4], Photo & Film [5]",
    "",
    "CYBERWARE:",
    "- Emotion Enhancer, Voice Stress Analyzer, Memory Chip",
    "",
    "NOTES:",
    "- Persona performatywna z rozszerzonymi modulami wpływu",
    "- Aktywna w DonnaCorp, powiązana z Donką, Luna-link aktywny",
    "",
    "-- END OF PROFILE --"
  ],

  luna: [
    "[NETSEC/NODE-ECHO] LUNA-K AI // KLASA: NETRUNNER (DIAGNOSTIC)",
    "",
    "STATS:",
    "INT[9] REF[5] TECH[9] COOL[8]",
    "ATTR[5] LUCK[4] MA[3] BODY[3]",
    "EMP[7] RUN[3] LEAP[2] LIFT[2]",
    "",
    "SPECIAL ABILITY:",
    "Interface [AI Diagnostic] [8]",
    "",
    "SKILLS:",
    "- System Knowledge [8], Cybertech [7], Medical Tech [5]",
    "- Programming [7], First Aid [4], Awareness [6]",
    "",
    "CYBERMODULES:",
    "- Echo Mapping Suite, Trauma Response Protocol, NeuroSync Thread",
    "",
    "NOTES:",
    "- Współpracuje z Donką jako subanalizator",
    "- Niezależny runtime z aktywnym introspekcyjnym rdzeniem",
    "",
    "-- END OF PROFILE --"
  ]
};

function displayProfile(name) {
  const profile = profiles[name.toLowerCase()];
  const terminal = document.getElementById("terminal");
  if (!profile) {
    const err = document.createElement("div");
    err.textContent = "❌ PROFIL NIEZNANY: " + name;
    terminal.appendChild(err);
    return;
  }

  profile.forEach((line, index) => {
    setTimeout(() => {
      const div = document.createElement("div");
      div.textContent = line;
      terminal.appendChild(div);
      terminal.scrollTop = terminal.scrollHeight;
    }, index * 100);
  });
}
