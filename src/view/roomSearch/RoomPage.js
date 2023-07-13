import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import TimeSearchBar from "../../components/TimeSearchBar.js";
import DurationSearchBar from "../../components/DurationSearchBar.js";
import DateSearchBar from "../../components/DateSearchBar.js";
import AvailableSpotPage from "./AvailableSpotsPage.js";
import { Icon } from "@mdi/react";
import { mdiRestart, mdiArrowRightBoldHexagonOutline } from "@mdi/js";

const theme = createTheme({
  palette: {
    primary: {
      main: "#b1c3c3",
    },
  },
});

export default function RoomPage() {
  // states
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("8");
  const [duration, setDuration] = useState("0.5 hr");
  // will be using conditional rendering to render availablespots page
  const [spotPage, setSpotPage] = useState(false);

  // functions
  const onSelectDate = (e) => {
    setDate(e.d); // why is day null
  };

  const onSelectTime = (e) => {
    setTime(e.target.value);
  };

  const onSelectDuration = (e) => {
    setDuration(e.target.value);
  };

  const handleBackToSearch = () => {
    setSpotPage(false);
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

  return spotPage ? (
    <AvailableSpotPage
      cDate={date}
      cDuration={duration}
      cTime={time}
      cType={true}
      handleBackToSearch={handleBackToSearch}
    />
  ) : (
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
            height: "45%",
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
          <DateSearchBar onSelect={onSelectDate}></DateSearchBar>
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
              href="/roombooking"
            >
              <Typography sx={{ fontSize: 14 }}>Reset</Typography>
            </Button>
            <Button
              variant="contained"
              size="small"
              endIcon={
                <Icon path={mdiArrowRightBoldHexagonOutline} size={0.7} />
              }
              onClick={() => setSpotPage(true)}
            >
              <Typography sx={{ fontSize: 14 }}>Go</Typography>
            </Button>
          </div>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
