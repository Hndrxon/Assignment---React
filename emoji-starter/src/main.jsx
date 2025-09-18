import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider, CssBaseline } from "@mui/material";
import theme from "./theme";
import App from "./App";
import Home from "./routes/Home";
import Game from "./routes/Game";
import HighScore from "./routes/HighScore";
import { ScoreProvider } from "./context/ScoreContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "game", element: <Game /> },
      { path: "high-score", element: <HighScore /> },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ScoreProvider>
        <RouterProvider router={router} />
      </ScoreProvider>
    </ThemeProvider>
  </React.StrictMode>
);
