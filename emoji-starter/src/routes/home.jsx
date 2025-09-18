import { Typography, Stack, Button, Paper } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import ScoreBoard from "../components/ScoreBoard";

export default function Home() {
  return (
    <Stack spacing={2}>
      <Typography variant="h4">Chapter Mini Project</Typography>
      <Typography color="text.secondary">
        Guess the first letter of each picture. +10 correct, −15 wrong.
        Three rounds. Good luck!
      </Typography>

      <ScoreBoard />

      <Paper variant="outlined" sx={{ p: 2 }}>
        <Typography variant="subtitle1" sx={{ mb: 1 }}>
          You’ll practice:
        </Typography>
        <ul style={{ marginTop: 0 }}>
          <li>Conditional Rendering (Game Over / Próxima pergunta)</li>
          <li>Dynamic Objects (lista de perguntas)</li>
          <li>Hooks (useState/useEffect)</li>
          <li>React Router (Home, Game, High Score)</li>
          <li>Forms em React + MUI</li>
          <li>Lifting State Up (placar compartilhado)</li>
        </ul>
      </Paper>

      <Button variant="contained" size="large" component={RouterLink} to="/game">
        Start Game
      </Button>
    </Stack>
  );
}
