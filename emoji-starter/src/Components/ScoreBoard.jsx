import { Paper, Stack, Typography } from "@mui/material";
import { useScore } from "../Context/ScoreContext";

export default function ScoreBoard() {
  const { score, highScore } = useScore();
  return (
    <Paper variant="outlined" sx={{ p: 2 }}>
      <Stack direction="row" justifyContent="space-between">
        <Typography>Score: <b>{score}</b></Typography>
        <Typography>High score: <b>{highScore}</b></Typography>
      </Stack>
    </Paper>
  );
}
