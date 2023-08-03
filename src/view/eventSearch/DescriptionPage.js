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
import { mdiArrowLeft, mdiCalendarStarFourPoints } from "@mdi/js";
import { useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { joinEvent } from "../../model/event/eventFunc.js";

const theme = createTheme({
  palette: {
    primary: {
      main: "#b1c3c3",
    },
  },
});

export default function DescriptionPage({ user }) {
  // states
  const [loading, setLoading] = useState(false);

  // location data
  const location = useLocation();
  const data = location.state;

  // navigator
  const navigate = useNavigate();

  // functions
  const participantJoining = () => {
    setLoading(true);
    joinEvent(user.id, data.id, "Participant")
      .then((data) => {
        navigate("/eventbook", { state: { data } });
      })
      .catch((err) => {
        if (
          err.message ===
          'duplicate key value violates unique constraint "EventParticipants_pkey"'
        ) {
          alert("have you joined this event already?");
        } else {
          alert(err.message);
        }
      })
      .finally(() => {
        setLoading(false);
      });
  };

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
            height: "70%",
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
              fontSize: 25,
              textAlign: "center",
              fontWeight: "bold",
            }}
          >
            Description of Event
          </Typography>
          <Typography
            sx={{
              marginTop: 0,
              flexGrow: 0.4,
              fontFamily: "monospace",
              fontSize: 18,
              textAlign: "center",
            }}
          >
            {data?.description} <br />
            <br />
            <b>Host: </b>
            {data?.host}
            <br />
            <b>Date:</b> {data?.date} <br />
            <b>Time:</b> {data?.time} <br />
          </Typography>

          <div
            style={{
              display: "flex",
              gap: "20px",
              alignSelf: "center",
              marginTop: 70,
            }}
          >
            <Button
              variant="contained"
              color="primary"
              size="small"
              endIcon={<Icon path={mdiCalendarStarFourPoints} size={0.8} />}
              onClick={participantJoining}
            >
              <Typography sx={{ fontSize: 14 }}>Join!</Typography>
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
      </Container>
    </ThemeProvider>
  );
}
