import { Typography, Stack, Button, Paper } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ScoreBoard from "../components/ScoreBoard";

export default function Home() {
  return (
    <Stack spacing={2}>
      <Typography variant="h4">Emoji Starter Project</Typography>
      <Typography color="text.secondary">
        Guess the first letter of each picture. +10 correct, −15 wrong.
        Three rounds. Good luck!
      </Typography>

      <ScoreBoard />

      <Paper variant="outlined" sx={{ p: 2 }}>
        <Typography variant="subtitle1" sx={{ mb: 1 }}>
          We’ll practice:
        </Typography>
        <ul style={{ marginTop: 0 }}>
          <li>Conditional Rendering (Game Over / Next question)</li>
          <li>Dynamic Objects (questions list)</li>
          <li>Hooks (useState/useEffect)</li>
          <li>React Router (Home, Game, High Score)</li>
          <li>Forms em React + MUI</li>
          <li>Lifting State Up (shared scoreboard)</li>
        </ul>
      </Paper>

      <Button variant="contained" size="large" component={RouterLink} to="/game">
        Start Game
      </Button>
    </Stack>
  );
}
