import React, { useEffect, useState } from "react";
import { Container, Typography, Box, Button } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material";
import TimeSearchBar from "../../components/TimeSearchBar.js";
import DurationSearchBar from "../../components/DurationSearchBar.js";
import { Icon } from "@mdi/react";
import { mdiRestart, mdiArrowRightBoldHexagonOutline } from "@mdi/js";
import { roomSearchStudy } from "../../model/room/roomFunc.js";

const theme = createTheme({
  palette: {
    primary: {
      main: "#b1c3c3",
    },
  },
});

export default function StudySpotPage() {
  // states
  const [time, setTime] = useState();
  const [duration, setDuration] = useState();

  // functions
  const handleSearch = () => {
    roomSearchStudy({
      location: " ", // wait
      date: d,
      time: time,
      duration: duration,
    })
      .catch((err) => alert(err))
      .then((msg) => console.log(msg)); // dk how we want to format the result yet
  };
  // need to set to default values when reset also
  const onSelectTime = (e) => {
    setTime(e.target.value);
  };

  const onSelectDuration = (e) => {
    setDuration(e.target.value);
  };

  // variables
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var d = new Date();
  var dayName = days[d.getDay()];

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          backgroundColor: "",
          justifyBackground: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "35%",
            width: "100%",
            bgcolor: "#eaeaea",
            padding: "16px",
            borderRadius: "5%",
            marginTop: 5,
          }}
        >
          <Typography
            //component="h1"
            sx={{
              marginTop: 2,
              flexGrow: 0.4,
              fontFamily: "monospace",
              fontSize: 20,
              textAlign: "center",
            }}
          >
            {dayName}, {""}
            {new Date().toLocaleString("en-US", {
              day: "2-digit",
              month: "long",
              year: "numeric",
            })}
          </Typography>
          <TimeSearchBar onSelect={onSelectTime}></TimeSearchBar>
          <DurationSearchBar onSelect={onSelectDuration}></DurationSearchBar>
          <div
            style={{
              display: "flex",
              gap: "30px",
              marginTop: -180,
              alignSelf: "center",
            }}
          >
            <Button
              variant="contained"
              color="primary"
              size="small"
              endIcon={<Icon path={mdiRestart} size={0.7} />}
              href="/studyspotbooking"
            >
              <Typography sx={{ fontSize: 14 }}>Reset</Typography>
            </Button>
            <Button
              variant="contained"
              size="small"
              endIcon={
                <Icon path={mdiArrowRightBoldHexagonOutline} size={0.7} />
              }
              href="/spotssearchpage"
            >
              <Typography sx={{ fontSize: 14 }}>Go</Typography>
            </Button>
          </div>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
