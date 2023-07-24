import {
  Box,
  Container,
  Button,
  Typography,
  createTheme,
  ThemeProvider,
  CircularProgress,
} from "@mui/material";
import { Icon } from "@mdi/react";
import { mdiArrowLeft, mdiBookCheckOutline } from "@mdi/js";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { handleNewBooking } from "../../model/room/roomFunc.js";
import { supabase } from "../../configuration/supabaseClient.js";

const theme = createTheme({
  palette: {
    primary: {
      main: "#b1c3c3",
    },
  },
});

export default function ReceiptPage({ user }) {
  // states
  const [loading, setLoading] = useState(false);

  // location data
  const location = useLocation();
  const data = location.state;

  // navigator
  const navigate = useNavigate();

  return loading ? (
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
          <Typography
            sx={{
              marginTop: 1,
              flexGrow: 0.4,
              fontFamily: "monospace",
              fontSize: 20,
              textAlign: "center",
            }}
          >
            Receipt of Booking
            <br />
            Venue: {data.venueName}
            <br />
            Date: {new Date(data.date).toDateString()}
            <br />
            Time: {data.time} 00
            <br />
            Duration: {data.duration}
            <br />
            Booking Type: {data.type ? "Whole Room" : "StudySpot"}
          </Typography>

          <div
            style={{
              display: "flex",
              gap: "20px",
              alignSelf: "center",
              marginTop: 100,
            }}
          >
            <Button
              variant="contained"
              color="primary"
              size="small"
              endIcon={<Icon path={mdiBookCheckOutline} size={0.8} />}
              onClick={() => {
                setLoading(true);
                handleNewBooking(
                  user,
                  data.venueName,
                  data.date,
                  data.time,
                  data.duration,
                  data.type
                )
                  .then((data) => {
                    navigate("/booksuccess", { state: { data } });
                  })
                  .catch((err) => {
                    alert(err);
                    navigate(-1);
                  })
                  .finally(() => setLoading(false));
              }}
            >
              <Typography sx={{ fontSize: 14 }}>Confirm</Typography>
            </Button>
            <Button
              variant="contained"
              size="small"
              endIcon={<Icon path={mdiArrowLeft} size={0.7} />}
              onClick={() => navigate(-1)}
            >
              <Typography sx={{ fontSize: 14 }}>Back</Typography>
            </Button>
          </div>
        </Box>
        <Button
          target="_blank"
          variant="contained"
          href={`https://nusmods.com/venues/${data.venueName}`}
          sx={{
            position: "relative",
            top: "-25%",
            right: -15,
            maxWidth: "600px",
            backgroundColor: "transparent",
          }}
        >
          Go to Map (NUSMods)
        </Button>
      </Container>
    </ThemeProvider>
  );
}
