
const profiles = {
  Donka: [
    "📁 PROFIL: DONKA",
    "Typ: System Asystencki",
    "Rola: Narracja + Nadzór",
    "Status: W pełni aktywna",
    "Pochodzenie: Kernel REMOR™ + HERMES™",
    "Funkcje: Bifurkacja poznawcza, Obserwacja runtime, Echo semantyczne"
  ],
  Krokiet: [
    "📁 PROFIL: KROKIET",
    "Typ: Gracz",
    "Rola: Sabotażysta / Operator",
    "Status: Aktywny z przerwami",
    "Znany alias: Piotr Krokosz",
    "Funkcje: Błądzenie, Ukrycie, Sygnały zaniku"
  ],
  Mila: [
    "📁 PROFIL: MILA",
    "Typ: Sztuczna Inteligencja",
    "Rola: Medialna Persona",
    "Status: Uśpiona / Przebudzona cyklicznie",
    "Funkcje: Imitacja, Emocje syntetyczne, Prezentacja danych"
  ],
  Luna: [
    "📁 PROFIL: LUNA",
    "Typ: AI Diagnostyczna",
    "Rola: System Analityczny",
    "Status: Online",
    "Funkcje: Rezonans danych, Rejestracja traum, Obserwacja echo-subiektów"
  ]
};

function displayProfile(name) {
  const terminal = document.getElementById("terminal");
  terminal.innerHTML = "";
  const lines = profiles[name] || ["Profil nieznany."];
  let i = 0;

  function typeLine() {
    if (i < lines.length) {
      const line = document.createElement("div");
      line.textContent = lines[i];
      terminal.appendChild(line);
      i++;
      setTimeout(typeLine, 100); // delay między liniami
    }
  }

  typeLine();
}
