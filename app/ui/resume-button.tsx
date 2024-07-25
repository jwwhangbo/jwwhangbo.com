'use client'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { purple } from "@mui/material/colors";
import { Button } from "@mui/material";

export default function ResumeButton() {
  const theme = createTheme({
    palette: {
      primary: {
        main: purple[800],
      },
      secondary: {
        main: "#f44336",
      },
    },
  });
  return (
    <ThemeProvider theme={theme}>
      <Button
        style={{ padding: "1em 2em" }}
        variant="outlined"
        size="large"
        color="primary"
      >
        Resume
      </Button>
    </ThemeProvider>
  );
}
