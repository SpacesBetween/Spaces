import {
  Box,
  Container,
  Button,
  Typography,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { Icon } from "@mdi/react";
import { mdiArrowLeft, mdiBookCheckOutline } from "@mdi/js";
import { useLocation, useNavigate } from "react-router-dom";
import { handleNewBooking } from "../../model/room/roomFunc.js";
import { supabase } from "../../configuration/supabaseClient.js";

const theme = createTheme({
  palette: {
    primary: {
      main: "#b1c3c3",
    },
  },
});

// can get the user session here
const {
  data: { user },
} = await supabase.auth.getUser();

export default function ReceiptPage() {
  // location data
  const location = useLocation();
  const data = location.state;

  // navigator
  const navigate = useNavigate();

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
            Reciept of Booking
            <br />Venue: {data.venueName}
            <br />Date: {data.date.toDateString()}
            <br />Time: {data.time}
            <br />Duration: {data.duration}
            <br />Booking Type: {data.type ? "Whole Room" : "Spot"}
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
                handleNewBooking(
                  user,
                  data.venueName,
                  data.date,
                  data.time,
                  data.duration,
                  data.type
                )
                  .catch((err) => alert(err))
                  .then((data) => {
                    console.log(data);
                    navigate("/booksuccess", {state: {data}});
                  });
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
      </Container>
    </ThemeProvider>
  );
}
