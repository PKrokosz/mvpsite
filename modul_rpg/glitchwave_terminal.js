// js/glitchwave-terminal.js
import { Journal } from './journal.js';
import { Profile } from './profile.js';
import { Modules } from './modules.js';

const template = document.createElement('template');
template.innerHTML = `
  <style>
    @import '../style.css';
  </style>
  <div class="glitchwave-terminal">
    <header class="terminal-header">//====[ GLITCHWAVE INTERFACE // SubEcho Vault ]====\\</header>
    <div class="terminal-shell" id="terminal-shell"></div>
    <aside class="profile-pane" id="profile-pane"></aside>
    <footer class="terminal-footer">[STATUS] NET-LINK ACTIVE — SLOT: 0x01</footer>
  </div>
`;

class GlitchwaveTerminal extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' }).append(template.content.cloneNode(true));
  }

  async connectedCallback() {
    const user = this.getAttribute('user') || 'KROKIET';
    const shell = this.shadowRoot.getElementById('terminal-shell');
    const pane = this.shadowRoot.getElementById('profile-pane');
    await Profile.init(user, pane);
    await Journal.init(user, shell);
  }
}

customElements.define('glitchwave-terminal', GlitchwaveTerminal);
