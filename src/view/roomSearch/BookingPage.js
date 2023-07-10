import React, { useState } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import TypeOfBookingBar from "../../components/TypeOfBookingBar.js";
import { Icon } from "@mdi/react";
import { mdiRestart, mdiArrowRightBoldHexagonOutline } from "@mdi/js";

const theme = createTheme({
  palette: {
    primary: {
      main: "#b1c3c3",
    },
  },
});

export default function BookingPage() {
  // states
  const [bookingType, setBookingType] = useState(false);

  // functions
  const onSelectType = (e) => {
    if (e.target.value === "1") {
      setBookingType(true);
    } else {
      setBookingType(false);
    }
  };

  const routingLogic = () => {
    if (bookingType) {
      return "/roombooking";
    } else {
      return "/studyspotbooking";
    }
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
            height: "30%",
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
              marginBottom: 4,
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
          <TypeOfBookingBar onSelect={onSelectType}></TypeOfBookingBar>

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
              size="small"
              endIcon={
                <Icon path={mdiArrowRightBoldHexagonOutline} size={0.7} />
              }
              href={routingLogic()}
            >
              <Typography sx={{ fontSize: 14 }}> Go </Typography>
            </Button>
          </div>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
