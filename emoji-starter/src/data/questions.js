// Dynamic rendering: list of round objects
// Word in English + corresponding emoji
export const QUESTIONS = [
  { word: "apple", emoji: "🍎" },
  { word: "pants", emoji: "👖" },
  { word: "hat", emoji: "👒" },
  { word: "banana", emoji: "🍌" },
  { word: "car", emoji: "🚗" },
  { word: "dog", emoji: "🐶" },
];

// In each match we will use 3 random ones.
export function getRandomRound(size = 3) {
  const shuffled = [...QUESTIONS].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, size);
}
