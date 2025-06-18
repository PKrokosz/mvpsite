const terminal = document.getElementById('terminal');

function appendLine(text, cssClass) {
  const d = document.createElement('div');
  d.classList.add('terminal-line');
  if (cssClass) d.classList.add(cssClass);
  d.textContent = text;
  terminal.appendChild(d);
}

export function renderArasakaProfile(profile) {
  appendLine(`[ARASAKA REPORT] ID: ${profile.id.toUpperCase()}`);
  appendLine(`ROLE: ${profile.role} | FACTION: ${profile.faction}`);
  appendLine(`STATS INT:${profile.stats.INT} REF:${profile.stats.REF} TECH:${profile.stats.TECH}`);
  appendLine('Assessment: Potential cognitive threat');
}

export function renderMilitechProfile(profile) {
  appendLine(`[MILITECH DOSSIER] ${profile.name}`);
  appendLine(`Specialization: ${profile.role}`);
  appendLine(`BODY:${profile.stats.BODY} REF:${profile.stats.REF} COOL:${profile.stats.COOL}`);
  appendLine('Note: Candidate for tactical recruitment');
}

export function renderNCPDReport(profile) {
  appendLine(`[NCPD] Subject: ${profile.name}`);
  appendLine(`Known aliases: ${profile.id}`);
  appendLine(`Criminal record: none`);
  appendLine('Warning level: moderate');
}

export function renderDonnaBrief(profile) {
  appendLine(`[DONNA CORP] Brief on ${profile.name}`);
  appendLine(`Narrative index: ${profile.stats.LUCK}`);
  appendLine(`EMP:${profile.stats.EMP} COOL:${profile.stats.COOL}`);
  appendLine('Internal comment: maintain observation');
}

export const corpRenderers = {
  arasaka: renderArasakaProfile,
  militech: renderMilitechProfile,
  ncpd: renderNCPDReport,
  donna: renderDonnaBrief,
};

window.corpRenderers = corpRenderers;
