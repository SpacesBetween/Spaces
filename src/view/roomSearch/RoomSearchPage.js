import React, { useEffect } from "react";
import {
  Container,
  Typography,
  Box,
  Button,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import TimeSearchBar from "../../components/TimeSearchBar.js";
import { Icon } from "@mdi/react";
import LocationSearchBar from "../../components/LocationSearchBar.js";
import { mdiRestart, mdiArrowRightBoldHexagonOutline } from "@mdi/js";

const theme = createTheme({
  palette: {
    primary: {
      main: "#b1c3c3",
    },
  },
});

export default function RoomSearchPage() {
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
              height: "50%",
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
            <TimeSearchBar></TimeSearchBar>
            <LocationSearchBar></LocationSearchBar>
            <div
              style={{
                display: "flex",
                gap: "30px",
                marginTop: -125,
                alignSelf: "center",
              }}
            >
              <Button
                variant="contained"
                color="primary"
                size="small"
                endIcon={<Icon path={mdiRestart} size={0.7} />}
              >
                <Typography sx={{ fontSize: 14 }}>Reset</Typography>
              </Button>
              <Button
                variant="contained"
                size="small"
                endIcon={
                  <Icon path={mdiArrowRightBoldHexagonOutline} size={0.7} />
                }
              >
                <Typography sx={{ fontSize: 14 }}>Go</Typography>
              </Button>
            </div>
          </Box>
        </Container>
      </ThemeProvider>
  );
}
