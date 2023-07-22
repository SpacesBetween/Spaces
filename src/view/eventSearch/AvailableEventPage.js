import React, { useState, useEffect } from "react";
import {
  Button,
  createTheme,
  CircularProgress,
  ThemeProvider,
  Typography,
} from "@mui/material";
import Events from "../../components/Events.js";
import "./AvailableEventPage.css";
import { fetchEvents } from "../../model/event/eventFunc.js";

export default function AvailableEventPage() {
  const [i, setI] = useState(0);
  const [twenty, setTwenty] = useState([]);
  const [getTwenty, setGetTwenty] = useState(true);
  const [prevTwenty, setPrevTwenty] = useState(false);
  const [nextButton, setNextButton] = useState(false);
  const [backButton, setBackButton] = useState(false);
  const [loading, setLoading] = useState(true);

  const theme = createTheme({
    palette: {
      primary: {
        main: "#b1c3c3",
      },
    },
  });

  useEffect(() => {
    if (getTwenty) {
      fetchEvents(i)
        .then((data) => {
          setTwenty(data);
          if (data?.length === 20) {
            setNextButton(true);
          }
          setI(i + 20);
        })
        .catch((err) => alert(err))
        .finally(() => {
          setLoading(false);
          setGetTwenty(false);
        });
    } else if (prevTwenty) {
      fetchEvents(i - 20)
        .then((data) => {
          setTwenty(data);
          setNextButton(true);
          setI(i - 20);
          if (i > 0) {
            setBackButton(true);
          }
        })
        .catch((err) => alert(err))
        .finally(() => {
          setLoading(false);
          setPrevTwenty(false);
        });
    }
  }, [getTwenty, prevTwenty, i]);
  return (
    <ThemeProvider theme={theme}>
      <Typography
        //component="h1"
        sx={{
          flexGrow: 0.4,
          fontFamily: "monospace",
          fontSize: 50,
          textAlign: "center",
          zIndex: "999",
          color: "black",
          backgroundColor: "lightblue",
          marginTop: "8",
        }}
      >
        WHAT TO EVENT @ NUS?!
      </Typography>
      <h3
        style={{
          textAlign: "center",
          color: "black",
          backgroundColor: "lightblue",
          marginTop: "0",
        }}
      >
        Here are the official NUS events for you to browse~
      </h3>
      {loading ? (
        <CircularProgress
          size={70}
          color="secondary"
          sx={{
            justifyContent: "center",
            position: "relative",
            left: "49%",
            right: "49%",
            marginTop: "20px",
          }}
        />
      ) : (
        <>
          <Events eventArr={twenty} />
          <div style={{ display: "inline-flex" }}>
            {backButton && (
              <Button
                variant="contained"
                size="medium"
                onClick={() => setPrevTwenty(true)}
              >
                Back
              </Button>
            )}
            {nextButton && (
              <Button
                variant="contained"
                size="medium"
                onClick={() => setGetTwenty(true)}
              >
                Next Page
              </Button>
            )}
          </div>
        </>
      )}
    </ThemeProvider>
  );
}
