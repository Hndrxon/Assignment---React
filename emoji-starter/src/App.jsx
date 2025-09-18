import { Outlet, NavLink } from "react-router-dom";
import Layout from "./components/Layout";
import { Button, Stack } from "@mui/material";

export default function App() {
  return (
    <Layout
      actions={
        <Stack direction="row" spacing={1}>
          <Button component={NavLink} to="/" color="inherit">Home</Button>
          <Button component={NavLink} to="/game" color="inherit">Play</Button>
          <Button component={NavLink} to="/high-score" color="inherit">High Score</Button>
        </Stack>
      }
    >
      <Outlet />
    </Layout>
  );
}
