"use client";
import { ThemeProvider } from "@emotion/react";
import { createTheme, useMediaQuery } from "@mui/material";
import { ProjectContent } from "./projectcontent";
import { Suspense } from "react";
import { ProjectSkeleton } from "./skeletons";

export default function Projects() {
  "use client";
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = createTheme({
    palette: {
      primary: {
        main: "#22272E",
        dark: "#1565c0",
      },
      secondary: {
        main: "#23003D",
        dark: "#1565c0",
      },
      text: {
        primary: prefersDarkMode ? "#dcdcdc" : "#22272E",
      }
    },
    components: {
      MuiCard: {
        styleOverrides: {
          root: {
            backgroundColor: prefersDarkMode ? "#606e80" : "#ecedee",
            minWidth: '90%',
            height: 500,
          },
        },
      },
    },
  });
  // const temp: number[] = [1, 2, 3, 4, 5];

  return (
    <ThemeProvider theme={theme}>
      <div className="flex w-fill items-center">
        <Suspense fallback={<ProjectSkeleton />}><ProjectContent /></Suspense>
      </div>
    </ThemeProvider>
  );
}
