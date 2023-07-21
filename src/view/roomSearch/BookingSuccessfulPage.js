import {
  Box,
  Container,
  Button,
  Typography,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { Icon } from "@mdi/react";
import { mdiCloseBoxOutline } from "@mdi/js";
import { useNavigate, useLocation } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#b1c3c3",
    },
  },
});

export default function BookingSuccessfulPage() {
  // navigator
  const navigate = useNavigate();

  // location data
  const location = useLocation();
  const data = location.state;
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
          }}
        >
          <div>
          <Typography
            sx={{
              flexGrow: 0.4,
              fontFamily: "monospace",
              fontSize: 19,
              textAlign: "center",
              marginTop: 10
            }}
          >
            Booking Successful!
            <br/>Venue: {data["data"][0].venue_id}
            <br/>Time: {data["data"][0].time}
            <br/>Duration: {data["data"][0].duration} hr
            <br />Day: {data["data"][0].day}
          </Typography>
          </div>
          <div
            style={{
              display: "flex",
              gap: "20px",
              alignSelf: "center",
              marginTop: 130,
            }}
          >
            <Button
              variant="contained"
              size="small"
              endIcon={<Icon path={mdiCloseBoxOutline} size={0.8} />}
              onClick={() => navigate("/roomsearch")}
            >
              <Typography sx={{ fontSize: 16 }}>Close</Typography>
            </Button>
          </div>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
