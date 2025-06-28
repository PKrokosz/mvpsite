# 🌐 MVPsite — Terminal Glitchwave (Narracyjny Interfejs z AI)

> Dynamiczny silnik odpowiedzi oparty na pliku `responses.json`, obsługiwany przez modularny terminal w HTML i/lub Node.js. Projekt przeznaczony do integracji z systemami takimi jak REMOR™, HERMES™, CoreForge™.

---

## 🧩 Struktura Repozytorium

```
mvpsite-main/
├── index.html              # Strona wejściowa (używa v2_terminal)
├── v2_terminal/            # Aktywny terminal (wersja 2)
│   ├── style.css
│   ├── terminal_router_final.js
│   ├── profile_extras.js
│   └── mvpsite_v_2_terminal.html
├── v1_luna_legacy/         # Starszy interfejs LUNA (nieaktywny)
│   ├── luna.html
│   ├── luna.js
│   ├── luna_node.js
│   └── luna_profiles.js
├── terminal.js             # Prototypowy silnik odpowiedzi
├── responses.json          # Baza danych odpowiedzi (autolimes-ready)
└── README.md
```

### Wersje systemu

- **v2_terminal** – aktywna implementacja uruchamiana z `index.html`.
- **v1_luna_legacy** – archiwalny terminal LUNA pozostawiony do ewentualnej reintegracji.

Ukryte polecenie terminala: `inject profile:luna.core` ujawnia wskazówki dotyczące ponownego podłączenia LUNY.

---

## 📡 Donka Router i zaszyfrowany feed

`donka_router.js` to uproszczony moduł routingu używany w `donka_feed_shell.html`.
Rozpoznaje komunikaty rozpoczynające się od prefiksów takich jak `[INFO]`,
`[EVENT]`, `[REKLAMA]`, `[ZAPIS]`, `[DATA]` czy `[ENCRYPT]` i przekierowuje je
do odpowiednich sekcji feedu.  Wiadomości typu `[ENCRYPT]` otrzymują klasę
`fade-encrypt`, dzięki czemu tekst stopniowo zanika – efekt zdefiniowany w
`donka_feed_shell.css`.  Pozwala to wizualnie odróżnić zaszyfrowane przekazy.

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
node v1_luna_legacy/luna.js
```

### 🌐 Tryb przeglądarkowy (Frontend)

1. Upewnij się, że plik `responses.json` znajduje się w katalogu obok `v1_luna_legacy/luna.html`
2. Otwórz `v1_luna_legacy/luna.html` w przeglądarce
3. Terminal obsługuje wpisy w polu input i wyświetla odpowiedzi z JSON

---

## 🔧 Dev Tools (opcjonalne)

Repozytorium zawiera prosty skrypt pomagający pilnować spójności `responses.json`.
Uruchom go przed dodaniem nowych odpowiedzi, aby upewnić się, że nie ma zduplikowanych kluczy:

```bash
python scripts/check_duplicates.py
```

Skrypt wypisze listę powtórzonych kluczy lub informację o ich braku. Możesz również
rozbudować go o własne walidacje JSON.

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
