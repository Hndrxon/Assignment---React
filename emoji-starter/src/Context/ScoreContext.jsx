import { createContext, useContext, useEffect, useState } from "react";

const ScoreContext = createContext(null);

export function ScoreProvider({ children }) {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(() => {
    const saved = localStorage.getItem("emoji-high-score");
    return saved ? Number(saved) : 0;
  });

  useEffect(() => {
    localStorage.setItem("emoji-high-score", String(highScore));
  }, [highScore]);

  const resetScore = () => setScore(0);
  const addPoints = (n) => setScore((s) => s + n);
  const maybeUpdateHigh = () => setHighScore((hs) => (score > hs ? score : hs));

  return (
    <ScoreContext.Provider
      value={{ score, highScore, addPoints, resetScore, maybeUpdateHigh }}
    >
      {children}
    </ScoreContext.Provider>
  );
}

export function useScore() {
  const ctx = useContext(ScoreContext);
  if (!ctx) throw new Error("useScore must be used within ScoreProvider");
  return ctx;
}
