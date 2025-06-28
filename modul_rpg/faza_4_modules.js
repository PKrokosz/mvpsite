// js/modules.js

/**
 * Module registry and dynamic loader for Glitchwave terminal.
 * Map commands to loader functions that fetch and render module content.
 */
export const Modules = {
  // Registry of available modules and their loader functions
  registry: {
    hermes: loadHermesModule,
    remor: loadRemorModule,
    donka: loadDonkaModule,
    luna: loadLunaModule,
    // Add more modules here as needed
  },

  /**
   * Execute a module command by name.
   * @param {string} moduleName - key of the module to load
   * @param {HTMLElement} target - container where module HTML will be injected
   */
  async run(moduleName, target) {
    const loader = this.registry[moduleName.toLowerCase()];
    if (!loader) {
      // Show error if module not found
      target.innerHTML = `<div class="error">[ERROR] Module '${moduleName}' not found.</div>`;
      return;
    }
    try {
      // Call the loader to fetch and render the module
      await loader(target);
    } catch (err) {
      // Handle any errors during loading
      target.innerHTML = `<div class="error">[ERROR] Failed to load module '${moduleName}': ${err.message}</div>`;
    }
  }
};

/**
 * Generic function to fetch an HTML fragment and inject into target container.
 * @param {string} url - path to the module HTML file
 * @param {HTMLElement} target - container element for injection
 */
async function fetchAndInject(url, target) {
  const resp = await fetch(url);
  if (!resp.ok) throw new Error(`HTTP ${resp.status}`);
  const html = await resp.text();
  target.innerHTML = html;
}

// Loader functions for each module:
async function loadHermesModule(target) {
  await fetchAndInject('modules/hermes_page.html', target);
}
async function loadRemorModule(target) {
  await fetchAndInject('modules/remor_page.html', target);
}
async function loadDonkaModule(target) {
  await fetchAndInject('modules/donka_feed_shell.html', target);
}
async function loadLunaModule(target) {
  await fetchAndInject('modules/v1_luna_legacy/luna.html', target);
}

// Example usage in journal or main script:
// Modules.run('hermes', document.getElementById('terminal-shell'));
// Modules.run('donka', document.getElementById('profile-pane'));
