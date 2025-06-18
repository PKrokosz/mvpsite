# 🌐 MVPsite — Terminal Glitchwave (Narracyjny Interfejs z AI)

> Dynamiczny silnik odpowiedzi oparty na pliku `responses.json`, obsługiwany przez modularny terminal w HTML i/lub Node.js. Projekt przeznaczony do integracji z systemami takimi jak REMOR™, HERMES™, CoreForge™.

---

## 🧩 Struktura Repozytorium

```
mvpsite-main/
├── index.html                 # Strona główna (opcjonalnie redirect do terminala)
├── luna.html                  # Terminal webowy (frontend)
├── luna.js                    # Silnik odpowiedzi (Node.js CLI / server)
├── terminal.js                # Silnik odpowiedzi (frontend JS - fetch)
├── responses.json             # Baza danych odpowiedzi (autolimes-ready)
├── mvpsite_v_2_terminal.html # Alternatywny terminal (legacy/dev)
└── README.md
```

---

## ⚙️ Jak działa system?

1. **Wpisujesz trigger (np. "deklaracja", "kyiosuke", "event:watson_disappearance")**
2. Terminal wywołuje `responses.json`, dopasowując klucz do odpowiedzi
3. Jeśli brak dopasowania → zwrotka `fallback:niezrozumiane`

---

## 🚀 Jak uruchomić?

### 🖥️ Tryb lokalny (Node.js CLI)

```bash
npm install
node luna.js
```

### 🌐 Tryb przeglądarkowy (Frontend)

1. Upewnij się, że plik `responses.json` znajduje się w katalogu obok `luna.html`
2. Otwórz `luna.html` w przeglądarce
3. Terminal obsługuje wpisy w polu input i wyświetla odpowiedzi z JSON

---

## 🔧 Dev Tools (opcjonalne)

Repozytorium nie zawiera domyślnie skryptów developerskich. W razie potrzeby
możesz utworzyć własne narzędzia do walidacji i rozszerzania plików JSON.

---

## 🧠 Glitchwave: System Pamięci i Fabuły

Ten projekt obsługuje rozgrywkę RPG prowadzoną przez Krokosza w uniwersum Cyberpunka:
- Integracja z postaciami: `Rabur`, `Krokiet`, `Mila`, `Luna`, `Kyiosuke`
- Zdarzenia fabularne: `event:trauma_test`, `event:echo_activation`, `subecho:reakcja`
- Lokacje: `needleeye`, `watson`, `vertebrae_base`
- Anomalie i systemy: `glitchwave`, `alto`, `subecho`

---

## 📦 Wersjonowanie

Plik `responses.json` powinien być aktualizowany iteracyjnie z zachowaniem spójności kluczy. Do wersji produkcyjnej używaj:
- `responses.json` (do przeglądarki)
- `responses_full.json` (do pracy w Node.js lub autolimes)

---

## 👤 Autor i Kontakt

**Piotr Krokosz (Krokiet)**  
Twórca systemów narracyjnych i frameworków AI  
📍 `https://github.com/PKrokosz`

---

## 🛡️ Licencja

Projekt prywatny / eksperymentalny. Do użytku z systemami REMOR™, CoreForge™, BackFork™.  
Niepublikować maszynowo wygenerowanych odpowiedzi bez zgody autora.

--- 
