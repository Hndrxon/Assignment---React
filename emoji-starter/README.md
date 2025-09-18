# Emoji Starter — React + Material UI 🎯

> A tiny, classroom-friendly game that practices **conditional rendering**, **dynamic objects**, **hooks**, **React Router**, **forms**, and **lifting state up** — wrapped in a clean **Material UI** interface.

![demo](https://img.shields.io/badge/React-18-blue) ![Vite](https://img.shields.io/badge/Vite-fast-purple) ![Material%20UI](https://img.shields.io/badge/MUI-5-blue) ![Router](https://img.shields.io/badge/React%20Router-6-red) ![License](https://img.shields.io/badge/license-MIT-green)

---

## 🧠 What is it?

**Emoji Starter** is a quick 3-round game: you see an **emoji** and type the **first letter** of its English name.

- **+10** points for a correct guess, **−15** for a wrong guess.  
- **High score** is saved in `localStorage`.  
- Built to showcase a modern **React + MUI** stack with **student-level** coherence and clear commits.

> Great starter project to demonstrate real-world UI patterns (forms, feedback, navigation) without overwhelming complexity.

---

## ✨ Features

- **Gameplay**: 3 rounds, instant feedback, scoreboard, and game-over screen.
- **Real-time scoring**: Score and high score update **immediately** on each answer.
- **Persistence**: High score stored in `localStorage`.
- **Routing**: `Home`, `Game`, and `High Score` pages via **React Router**.
- **Material UI**: AppBar, Cards, Buttons, Paper, Alerts, Theme & `CssBaseline`.
- **Clean architecture**: Context for lifting state up, data module for questions, isolated components.
- **Student-friendly**: Small codebase, readable logic, clear commit history recommendations.

---

## 🧱 Tech Stack

- **React 18** (Vite template)
- **React Router 6**
- **Material UI 5** (`@mui/material`, `@mui/icons-material`, `@emotion/*`)
- **Vite** (dev server + build)
- **LocalStorage** (persistence)

---

## 🗂️ Project Structure

```
src/
├─ App.jsx
├─ main.jsx
├─ theme.js
├─ context/
│  └─ ScoreContext.jsx
├─ components/
│  ├─ Layout.jsx
│  ├─ QuestionCard.jsx
│  └─ ScoreBoard.jsx
├─ routes/
│  ├─ Home.jsx
│  ├─ Game.jsx
│  └─ HighScore.jsx
└─ data/
   └─ questions.js
```

**Why this layout?**
- `context/ScoreContext.jsx`: centralizes scoring logic and high-score persistence.
- `routes/*`: page-level components for each route.
- `components/*`: reusable pieces (UI and presentation).
- `data/questions.js`: dynamic list of objects + helper to shuffle/select rounds.
- `theme.js`: theming in one place (palette, radius, etc.).

---

## 🕹️ How the Game Works

1. On `Game` mount, the score is reset to **0** and a **3-question round** is randomly generated.
2. The user submits 1 letter.  
   - **Correct** → `+10`  
   - **Wrong** → `−15`
3. Score updates **immediately** (and if it beats the high score, the high score updates in real-time).
4. After the 3rd question, the UI switches to **Game Over** with actions to replay or view **High Score**.

> The “instant update” is implemented inside the **Score Context** to avoid timing issues and StrictMode double effects in dev.

---

## 🧩 Course Topics → Where They Appear

- **Conditional Rendering** — feedback Alerts, Game vs. Game Over screens.
- **Dynamic Objects Rendering** — `data/questions.js` list + random round selection.
- **Hooks** — `useState`, `useEffect`, `useMemo` across components.
- **React Router** — routes: `/` (Home), `/game`, `/high-score`.
- **Forms** — MUI `TextField` with `onSubmit` in `QuestionCard`.
- **Lifting State Up** — `ScoreContext` provides state to the tree; components consume via `useScore`.
- **Material UI** — AppBar, Cards, Buttons, Paper, ThemeProvider, CssBaseline.

---

## 🚀 Getting Started

### 1) Create & Install
```bash
npm create vite@latest emoji-starter -- --template react
cd emoji-starter
npm i @mui/material @mui/icons-material @emotion/react @emotion/styled react-router-dom
```

### 2) Dev Server
```bash
npm run dev
# open the URL shown in the terminal (usually http://localhost:5173)
```

### 3) Build
```bash
npm run build
```

> If you keep `index.css`, use it only for minimal global rules. **MUI `CssBaseline`** already normalizes styles.

---

## 🧰 Key Files (Deep Dive)

### `context/ScoreContext.jsx`
- Holds `score` and `highScore`.
- `addPoints(n)` updates the score **and** high score atomically:
  ```js
  setScore(prev => {
    const next = prev + n;
    setHighScore(hs => (next > hs ? next : hs));
    return next;
  });
  ```
- Persists `highScore` using an effect that writes to `localStorage`.
- Exposes `resetScore()` for a clean start of each game.

### `routes/Game.jsx`
- Generates a **3-question round** with `getRandomRound(3)`.
- Resets score on mount, handles answer submission, timing of feedback, and “finished” state.

### `components/QuestionCard.jsx`
- MUI `Card` + `TextField` with `maxLength: 1` to limit input to a single letter.
- Calls `onSubmit(letter)` to let `Game` handle scoring.

---

## 🎯 Learning Outcomes

- Understand **state ownership** and why we centralize cross-cutting logic in a **Context Provider**.
- Implement **atomic updates** with functional `setState`.
- Use **React Router** for multi-page flows in SPAs.
- Build forms with **MUI** and handle submission cleanly.
- Ship small, focused commits that tell a clear story.

---

## 🧪 Testing Ideas (Optional)

- **Unit**: `addPoints` should update score and highScore deterministically.
- **Integration**: submit a correct and incorrect answer; assert score changes and end state after 3 rounds.
- **E2E**: start game → answer 3 times → verify Game Over and replay.

*(You can add Vitest + React Testing Library later for full coverage.)*

---

## 🛠 Troubleshooting

- Score doesn’t update? Ensure components are wrapped by `ScoreProvider` in `main.jsx`.
- High score not persisting? Inspect `localStorage` entry `emoji-high-score`.
- StrictMode resets? Don’t put score-reset logic in effects that run on every render; keep it on page mount.
- Router not working after build? Ensure your host serves SPA routes (fallback to `index.html`).

---

## 🗺️ Roadmap

- Per-question **timer** and bonus points.
- **Difficulty** levels (longer words, more rounds).
- Swap emojis for **images/audio**.
- **Leaderboard** via backend or Firebase.
- i18n / accessibility enhancements (ARIA labels, focus management on feedback).

---

## 👤 Author & Credits

- Built with ❤️ by Henderson Falcão Ferreira Batista to learning React fundamentals in a clean, modern stack.
- UI components by **Material UI**.

---

## 📄 License

MIT — do whatever you want, just keep the license and be kind. 🙂
