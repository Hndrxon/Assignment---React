import { useState } from "react";
import {
  Card, CardContent, CardActions,
  Typography, TextField, Button, Stack,
} from "@mui/material";

/**
 * Props:
 *  - index (question number)
 *  - emoji
 *  - onSubmit(answerString) => void
 */
export default function QuestionCard({ index, emoji, onSubmit, disabled }) {
  const [guess, setGuess] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
    if (!guess.trim()) return;
    onSubmit(guess.trim().toLowerCase());
    setGuess("");
  }

  return (
    <Card variant="outlined">
      <CardContent>
        <Typography variant="h6" sx={{ mb: 1 }}>
          With which letter does it start
        </Typography>
        <Typography color="text.secondary" sx={{ mb: 2 }}>
          Question #{index + 1}
        </Typography>

        <Typography
          aria-label="picture"
          sx={{ fontSize: 86, textAlign: "center", mb: 2 }}
        >
          {emoji}
        </Typography>

        <form onSubmit={handleSubmit}>
          <Stack direction="row" spacing={1}>
            <TextField
              label="Type the first letter"
              value={guess}
              onChange={(e) => setGuess(e.target.value.slice(0, 1))}
              inputProps={{ maxLength: 1 }}
              disabled={disabled}
              required
            />
            <Button type="submit" variant="contained" disabled={disabled}>
              Play
            </Button>
          </Stack>
        </form>
      </CardContent>
      <CardActions />
    </Card>
  );
}
