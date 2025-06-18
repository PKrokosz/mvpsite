// luna_node.js — Node-oriented logic for server use

const fs = require('fs');
const path = require('path');

// 📦 Załaduj bazę odpowiedzi
// Używamy domyślnego pliku `responses.json` znajdującego się w repozytorium
const responses = JSON.parse(
  fs.readFileSync(path.join(__dirname, 'responses.json'), 'utf8')
);

// 🧠 RUNTIME MEMORY
const sessionMemory = {
  lastTrigger: null,
  lastScene: null,
  activeTryb: 'tryb:neutralny',
  glitchwaveLevel: 'napięcie:glitchwave:średnie',
  history: [],
};

// 🧩 GŁÓWNA FUNKCJA INTERPRETACYJNA
function interpretResponse(trigger) {
  sessionMemory.lastTrigger = trigger;
  sessionMemory.history.push(trigger);

  // 🎛️ Tryby
  if (trigger.startsWith('tryb:')) {
    sessionMemory.activeTryb = trigger;
    return `[TRYB ZMIENIONY] ${trigger.replace('tryb:', '').toUpperCase()} aktywny.`;
  }

  // 🧭 Sceny
  if (trigger.startsWith('scena:')) {
    sessionMemory.lastScene = trigger;
  }

  // 🧍 NPC i tryb ukrycia
  if (sessionMemory.activeTryb === 'tryb:ukryty' && trigger.startsWith('npc:')) {
    return '[TRYB:UKRYTY] NPC niewidoczny dla systemu.';
  }

  // ⚡ Reakcje napięcia
  if (sessionMemory.glitchwaveLevel === 'napięcie:glitchwave:wysokie' && trigger.includes('donka')) {
    return '[PRZECIĄŻENIE] Donka odpowiada nie wprost: ' + (responses['donka'] || '...');
  }

  // 🔁 Alias
  if (responses[`alias:${trigger}`]) {
    const aliasTo = responses[`alias:${trigger}`];
    return responses[aliasTo] || `[ALIAS] Brak treści dla: ${aliasTo}`;
  }

  // ✅ Główna odpowiedź lub fallback
  return responses[trigger] || responses['fallback:niezrozumiane'] || '[FALLBACK] Brak odpowiedzi.';
}

// 🛠️ EXPORTY
module.exports = {
  interpretResponse,
  sessionMemory,
  responses
};
