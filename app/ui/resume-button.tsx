'use client'
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Button } from "@mui/material";

export default function ResumeButton() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#462a70",
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
        onClick={() => {
          window.open("/jww_resume.pdf", "_blank");
        }}
      >
        Resume
      </Button>
    </ThemeProvider>
  );
}
