// luna.js - ES module for browser use
let responsesCache = null;

async function loadResponses() {
  if (!responsesCache) {
    const res = await fetch('responses.json');
    responsesCache = await res.json();
  }
  return responsesCache;
}

export const sessionMemory = {
  lastTrigger: null,
  lastScene: null,
  activeTryb: 'tryb:neutralny',
  glitchwaveLevel: 'napięcie:glitchwave:średnie',
  history: [],
};

export async function getLunaResponse(trigger) {
  const responses = await loadResponses();
  sessionMemory.lastTrigger = trigger;
  sessionMemory.history.push(trigger);

  if (trigger.startsWith('tryb:')) {
    sessionMemory.activeTryb = trigger;
    return `[TRYB ZMIENIONY] ${trigger.replace('tryb:', '').toUpperCase()} aktywny.`;
  }

  if (trigger.startsWith('scena:')) {
    sessionMemory.lastScene = trigger;
  }

  if (sessionMemory.activeTryb === 'tryb:ukryty' && trigger.startsWith('npc:')) {
    return '[TRYB:UKRYTY] NPC niewidoczny dla systemu.';
  }

  if (sessionMemory.glitchwaveLevel === 'napięcie:glitchwave:wysokie' && trigger.includes('donka')) {
    return '[PRZECIĄŻENIE] Donka odpowiada nie wprost: ' + (responses['donka'] || '...');
  }

  if (responses[`alias:${trigger}`]) {
    const aliasTo = responses[`alias:${trigger}`];
    return responses[aliasTo] || `[ALIAS] Brak treści dla: ${aliasTo}`;
  }

  return responses[trigger] || responses['fallback:niezrozumiane'] || '[FALLBACK] Brak odpowiedzi.';
}
