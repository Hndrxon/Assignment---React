import { createContext, useContext, useEffect, useRef, useState } from "react";

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

  const mountedRef = useRef(false);
  useEffect(() => {
    if (!mountedRef.current) {
      mountedRef.current = true;
      setScore(0);
    }
  }, []);

  const resetScore = () => setScore(0);

  // update score and high score
  const addPoints = (n) => {
    setScore((prev) => {
      const next = prev + n;
      setHighScore((hs) => (next > hs ? next : hs));
      return next;
    });
  };

  return (
    <ScoreContext.Provider value={{ score, highScore, addPoints, resetScore }}>
      {children}
    </ScoreContext.Provider>
  );
}

export function useScore() {
  const ctx = useContext(ScoreContext);
  if (!ctx) throw new Error("useScore must be used within ScoreProvider");
  return ctx;
}
