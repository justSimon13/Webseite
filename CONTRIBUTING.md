Perfekt! Hier kommt dein leicht verständliches, professionelles Git-Workflow-Diagramm **inkl. Beschreibung als `CONTRIBUTING.md`**, das du direkt in dein GitHub-Repo packen kannst.

---

## 📘 `CONTRIBUTING.md`

````md
# 🚀 Git-Workflow für Simon Fischer Consulting

Vielen Dank für deinen Beitrag zu diesem Projekt!

Wir arbeiten mit einem **sauberen Release-Workflow**, der Entwicklung und Produktion klar trennt.  
Dieser Leitfaden hilft dir, strukturiert und sicher Änderungen einzubringen.

---

## 🔀 Branch-Strategie

| Branch      | Zweck                                                        |
| ----------- | ------------------------------------------------------------ |
| `main`      | Nur Releases (z. B. v1.0.0) – **niemals direkt bearbeiten!** |
| `dev`       | Aktive Entwicklung                                           |
| `feature/*` | Optionale Feature-Branches, die in `dev` gemerged werden     |

---

## 🧭 Typischer Ablauf

### 1. Neuer Branch für Entwicklung

```bash
git checkout main
git pull
git checkout -b dev
```
````

Oder bei größeren Features:

```bash
git checkout dev
git pull
git checkout -b feature/neues-formular
```

---

### 2. Änderungen committen

```bash
git add .
git commit -m "feat: neues Kontaktformular mit Validierung"
git push origin feature/neues-formular
```

> ✍ Verwende sprechende Commit-Messages mit `feat:`, `fix:`, `refactor:` usw.

---

### 3. Merge in `dev` (z. B. via Pull Request)

```bash
git checkout dev
git merge feature/neues-formular
git push origin dev
```

---

### 4. Wenn `dev` stabil ist → Merge in `main` & Release

```bash
git checkout main
git merge dev
git push origin main

# Release-Tag setzen
git tag -a v1.1.0 -m "Release 1.1.0 – Kontaktformular hinzugefügt"
git push origin v1.1.0
```

---

## 🔢 Versionierung (semver)

- **`MAJOR`** → Breaking Change (z. B. `v2.0.0`)
- **`MINOR`** → Neue Features, abwärtskompatibel (`v1.1.0`)
- **`PATCH`** → Bugfix, ohne neue Features (`v1.0.1`)

---

## 🛠 Beispiel-Verlauf

```plaintext
main → v1.0.0
   ↳ dev → v1.1.0
        ↳ feature/contact-form
```

---

## ✅ Regeln

- Niemals direkt in `main` committen
- `main` ist immer releasbar
- PRs gehen in `dev`, nicht direkt in `main`
- Nach jedem Release: neuen `dev`-Branch von `main` abspalten

---

Danke fürs Mitarbeiten! 💪

````

---

## 🔖 Bonus: Visual Workflow

```plaintext
main ──────●───────●───────●───► (v1.0.0 → v1.1.0 → v1.2.0)
             ↘         ↘
             dev       dev
              ↓         ↓
        feature/a   feature/b
````

---

Wenn du möchtest, kann ich dir auch eine einfache `.gitignore`, `.gitattributes` und eine GitHub Actions-Vorlage als Grundgerüst mitgeben. Interesse?
