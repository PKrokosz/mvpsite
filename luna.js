// luna.js — Unified response engine for browser and server

let responses;
let responsesPromise;

function loadResponses() {
  if (responsesPromise) return responsesPromise;

  if (typeof window === 'undefined') {
    responsesPromise = Promise.all([
      import('fs/promises'),
      import('path')
    ]).then(async ([fs, path]) => {
      const dirname = path.dirname(new URL(import.meta.url).pathname);
      const data = await fs.readFile(path.join(dirname, 'responses.json'), 'utf8');
      responses = JSON.parse(data);
      return responses;
    });
  } else {
    responsesPromise = fetch('responses.json')
      .then(res => res.json())
      .then(data => { responses = data; return responses; });
  }
  return responsesPromise;
}

const sessionMemory = {
  lastTrigger: null,
  lastScene: null,
  activeTryb: 'tryb:neutralny',
  glitchwaveLevel: 'napięcie:glitchwave:średnie',
  history: [],
};

async function interpretResponse(trigger) {
  await loadResponses();
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

export { interpretResponse, interpretResponse as getLunaResponse, sessionMemory };
