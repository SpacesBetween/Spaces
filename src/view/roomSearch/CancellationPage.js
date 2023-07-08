import {
  Box,
  Container,
  Button,
  Typography,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { Icon } from "@mdi/react";
import { mdiCheckCircle, mdiCloseBoxOutline } from "@mdi/js";
import { useEffect, useState } from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#b1c3c3",
    },
  },
});

export default function CancellationPage({ onArrival }) {
  // state to handle the logic when 'yes' button is clicked
  const [yes, setYes] = useState(false);
  const [success, setSuccess] = useState(false);

  // effect to handle async onArrival to remove booking from backend
  useEffect(() => {
    if (yes) {
      onArrival()
        .catch((err) => alert(err))
        .then((msg) => {
          setSuccess(true);
          console.log(msg);
        });
    }
    // else do nothing
  });

  // function to handle routing logic
  const route = () => {
    if (success && yes) {
      return "/cancelsuccess";
    }
  };

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
          <Typography
            sx={{
              marginTop: 2,
              flexGrow: 0.4,
              fontFamily: "monospace",
              fontSize: 20,
              textAlign: "center",
            }}
          >
            Confirm Cancellation?
          </Typography>

          <Typography
            sx={{
              marginTop: -15,
              flexGrow: 0.4,
              fontFamily: "monospace",
              fontSize: 15,
              textAlign: "left",
            }}
          >
            Details of Booking:
          </Typography>

          <div
            style={{
              display: "flex",
              gap: "20px",
              alignSelf: "center",
              marginTop: 190,
            }}
          >
            <Button
              variant="contained"
              color="primary"
              size="small"
              endIcon={<Icon path={mdiCheckCircle} size={0.75} />}
              onClick={() => setYes(true)}
              href={route()}
            >
              <Typography sx={{ fontSize: 16 }}>Yes</Typography>
            </Button>
            <Button
              variant="contained"
              size="small"
              endIcon={<Icon path={mdiCloseBoxOutline} size={0.75} />}
              href="/roomsearch"
            >
              <Typography sx={{ fontSize: 16 }}>No</Typography>
            </Button>
          </div>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
