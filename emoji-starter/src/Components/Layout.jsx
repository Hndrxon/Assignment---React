import { AppBar, Toolbar, Typography, Container, Box } from "@mui/material";

export default function Layout({ actions, children }) {
  return (
    <>
      <AppBar position="static" elevation={1}>
        <Toolbar sx={{ display: "flex", gap: 2 }}>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            Emoji Starter
          </Typography>
          {actions}
        </Toolbar>
      </AppBar>
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>{children}</Box>
      </Container>
    </>
  );
}
