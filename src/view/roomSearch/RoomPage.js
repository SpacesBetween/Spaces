import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import dayjs from "dayjs";
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

// check if a date is weekend
const isWeekend = (date) => {
  const day = date.day();

  return day === 0 || day === 6;
};

const nextWeekday = () => {
  // Room can only book in advance, so default
  // date can only book from tomorrow onwards.
  const tomorrow = dayjs().add(1, "day");

  // check if today is a weekend or not
  return isWeekend(tomorrow)
    ? dayjs().startOf("week").add(1, "week")
    : tomorrow;
};

export default function RoomPage() {
  // states
  const [date, setDate] = useState(nextWeekday().toDate());
  const [time, setTime] = useState("8");
  const [duration, setDuration] = useState("0.5 hr");
  // will be using conditional rendering to render availablespots page
  const [spotPage, setSpotPage] = useState(false);

  // functions
  const onSelectDate = (e) => {
    setDate(e.$d);
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
            height: "60%",
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
              onClick={() => {
                if (date < dayjs().add(1, "day") || isWeekend(date)) {
                  alert("Illegal date, please select a weekday in the future.");
                } else {
                  setSpotPage(true);
                }
              }}
            >
              <Typography sx={{ fontSize: 14 }}>Go</Typography>
            </Button>
          </div>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
