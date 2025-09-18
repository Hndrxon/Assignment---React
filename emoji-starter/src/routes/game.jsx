import { useEffect, useMemo, useState } from "react";
import { Alert, Button, Stack, Typography } from "@mui/material";
import { getRandomRound } from "../data/questions";
import QuestionCard from "../Components/QuestionCard";
import ScoreBoard from "../Components/ScoreBoard";
import { useScore } from "../Context/ScoreContext";
import { Link as RouterLink } from "react-router-dom";

const ROUNDS = 3;
const WIN = 10;
const LOSS = -15;

export default function Game() {
  const { score, addPoints, resetScore, maybeUpdateHigh } = useScore();

  // load random questions only once
  const questions = useMemo(() => getRandomRound(ROUNDS), []);
  const [index, setIndex] = useState(0);
  const [feedback, setFeedback] = useState(null); // "correct" | "wrong" | null
  const [finished, setFinished] = useState(false);

  // start with score 0
  useEffect(() => {
    resetScore();
  }, [resetScore]);

  function handleAnswer(guess) {
    const first = questions[index].word[0]; // first letter of the word
    const ok = guess === first;

    addPoints(ok ? WIN : LOSS);
    setFeedback(ok ? "correct" : "wrong");

    // next question or end game after a short delay
    setTimeout(() => {
      const next = index + 1;
      if (next >= questions.length) {
        setFinished(true);
        maybeUpdateHigh();
      } else {
        setIndex(next);
        setFeedback(null);
      }
    }, 600);
  }

  return (
    <Stack spacing={2}>
      <ScoreBoard />

      {!finished ? (
        <>
          {feedback === "correct" && (
            <Alert severity="success">Correct! +{WIN}</Alert>
          )}
          {feedback === "wrong" && (
            <Alert severity="error">Wrong! {LOSS}</Alert>
          )}

          <QuestionCard
            index={index}
            emoji={questions[index].emoji}
            onSubmit={handleAnswer}
            disabled={Boolean(feedback)}
          />
          <Typography color="text.secondary" align="center">
            Round {index + 1} / {ROUNDS}
          </Typography>
        </>
      ) : (
        <Stack spacing={2} alignItems="center">
          <Alert severity="info" sx={{ width: "100%" }}>
            <b>Game Over</b> — final score: {score}
          </Alert>
          <Stack direction="row" spacing={1}>
            <Button variant="contained" component={RouterLink} to="/game">
              Play again
            </Button>
            <Button variant="outlined" component={RouterLink} to="/high-score">
              See High Score
            </Button>
          </Stack>
        </Stack>
      )}
    </Stack>
  );
}
