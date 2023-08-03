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
  import { useState, useEffect } from "react";
  import { useNavigate, useLocation } from "react-router-dom";
import { unjoinEvent } from "../../model/event/eventFunc.js";
  
  const theme = createTheme({
    palette: {
      primary: {
        main: "#b1c3c3",
      },
    },
  });
  
  export default function UnjoinEventPage() {
    // state to handle the logic when 'yes' button is clicked
    const [yes, setYes] = useState(false);
    const [success, setSuccess] = useState(false);
  
    const navigate = useNavigate();
  
    // location data
    const location = useLocation();
    const data = location.state;
  
    // effect to handle routing logic
    useEffect(() => {
      if (success && yes) {
        return navigate("/profile");
      }
      return () => {};
    }, [yes, success, navigate]);
  
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
              height: "75%",
              width: "100%",
              bgcolor: "#eaeaea",
              padding: "16px",
              borderRadius: "5%",
            }}
          >
            <Typography
              sx={{
                marginTop: 5,
                flexGrow: 0.4,
                fontFamily: "monospace",
                fontSize: 20,
                textAlign: "center",
              }}
            >
              Are you sure that you want to unjoin this event?
            </Typography>
            <Typography
              sx={{
                marginTop: 6,
                flexGrow: 0.4,
                fontFamily: "monospace",
                fontSize: 20,
                textAlign: "center",
              }}
            >
              -Event Details-
              <br />Event Name: {data.name}
              <br />Date: {data.startDate}
              <br />Starting Time: {data.startTime}
              <br />Host: {data.host}
              <br />Role: {data.userType} <br />
              (It will be sad if you are the host and you are unjoining :O)
            </Typography>
  
            <div
              style={{
                display: "flex",
                gap: "20px",
                alignSelf: "center",
                marginTop: 60,
                marginBottom: 30
              }}
            >
              <Button
                variant="contained"
                color="primary"
                size="small"
                endIcon={<Icon path={mdiCheckCircle} size={0.75} />}
                onClick={() => {
                  setYes(true);
                  unjoinEvent(data.event_id, data.user.id)
                    .then((msg) => {
                      setSuccess(true);
                    })
                    .catch((err) => alert(err));
                }}
              >
                <Typography sx={{ fontSize: 16 }}>Yes </Typography>
              </Button>
              <Button
                variant="contained"
                size="small"
                endIcon={<Icon path={mdiCloseBoxOutline} size={0.75} />}
                onClick={() => navigate("/profile")}
              >
                <Typography sx={{ fontSize: 16 }}>No</Typography>
              </Button>
            </div>
          </Box>
        </Container>
      </ThemeProvider>
    );
  }
  