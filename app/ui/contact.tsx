"use client";
import {
  Button,
  createTheme,
  Paper,
  TextField,
  useMediaQuery,
} from "@mui/material";
import { sendMessage } from "@/app/lib/data";
import { useDebouncedCallback } from "use-debounce";
import { useState } from "react";
import { ThemeProvider } from "@emotion/react";

const PaperContents = () => {
  const [loading, setLoading] = useState(false);
  const [timer, setTimer] = useState(0);
  const [showPopup, setShowPopup] = useState(false);
  const [hidePopup, setHidePopup] = useState(false);
  const triggerPopup = () => {
    setShowPopup(true);
    setTimeout(() => {
      setHidePopup(true);
      setTimeout(() => {
        setShowPopup(false);
        setHidePopup(false);
      }, 500);
    }, 2000);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimer(15);
    const formData = new FormData(e.currentTarget);

    sendMessage(formData).then((res) => {
      if (res === "success") {
        triggerPopup();
      } else {
        alert("fail");
      }
    });

    const interval = setInterval(() => {
      setTimer((prevTimer) => {
        if (prevTimer <= 1) {
          clearInterval(interval);
          setLoading(false);
          return 0;
        }
        return prevTimer - 1;
      });
    }, 1000);
  };

  return (
    <div className="w-full flex flex-col justify-center items-center">
      <div
        className={`absolute flex bg-[#3ec26a] w-[250px] h-[50px] rounded-lg shadow-lg justify-center items-center ${
          showPopup ? "animate-[fadeIn_0.5s_ease-in-out]" : "hidden"
        } ${hidePopup ? "animate-[fadeOut_0.5s_ease-in-out]" : ""}`}
      >
        <p>Successfully sent!</p>
      </div>
      <form
        // action={useDebouncedCallback(sendMessageTriggerPopup, 15000, {
        //   leading: true,
        //   trailing: false,
        // })}
        onSubmit={onSubmit}
        className="flex flex-col space-y-4 w-[90%]"
      >
        <TextField
          variant="outlined"
          label="name"
          name="name"
          required
          inputProps={{ maxLength: "25" }}
        />
        <TextField
          variant="outlined"
          label="email"
          name="email"
          required
          inputProps={{ maxLength: "25", type: "email" }}
        />
        <TextField
          variant="outlined"
          label="message(max 255)"
          name="message"
          multiline
          rows={10}
          required
          inputProps={{ maxLength: "255" }}
        />

        <Button type="submit" variant="contained" disabled={loading}>
          {loading ? `Please Wait(${timer})` : "Submit"}
        </Button>
      </form>
    </div>
  );
};

export default function Contact() {
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = createTheme({
    palette: {
      primary: {
        main: "#462a70",
        // dark: "#22272e",
      },
      background: {
        paper: prefersDarkMode ? "#343b45" : "#f0f0f0",
      },
      text: {
        primary: prefersDarkMode ? "#f0f0f0" : "#22272e",
        secondary: prefersDarkMode ? "#f0f0f0" : "#22272e",
      },
    },
    components: {
      MuiOutlinedInput: {
        styleOverrides: {
          notchedOutline: {
            borderColor: prefersDarkMode ? "#b0b0b0" : "#22272e", // Customize this color as needed
          },
        },
      },
    },
  });

  return (
    <div className="flex flex-col justify-center items-center">
      <h3 className="mb-2 text-2xl">Contact me</h3>
      <ThemeProvider theme={theme}>
        <Paper
          variant="elevation"
          elevation={4}
          square={false}
          sx={{
            width: 350,
            height: 500,
            display: "flex",
            justifyContent: "center",
          }}
        >
          <PaperContents />
        </Paper>
      </ThemeProvider>
    </div>
  );
}
