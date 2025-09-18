import { Paper, Stack, Typography, Button } from "@mui/material";
import { useScore } from "../Context/ScoreContext";
import { Link as RouterLink } from "react-router-dom";

export default function HighScore() {
  const { highScore } = useScore();
  return (
    <Stack spacing={2}>
      <Paper variant="outlined" sx={{ p: 3, textAlign: "center" }}>
        <Typography variant="h5">🏆 High Score</Typography>
        <Typography variant="h3" sx={{ mt: 1 }}>{highScore}</Typography>
      </Paper>
      <Button variant="contained" component={RouterLink} to="/game">
        Play
      </Button>
    </Stack>
  );
}
