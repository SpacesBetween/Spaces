import {
    Box,
    Container,
    Button,
    Typography,
    createTheme,
    ThemeProvider
  } from "@mui/material";
  import { Icon } from "@mdi/react";
  import { mdiArrowURightTop, mdiCloseBoxOutline } from "@mdi/js";
  
  const theme = createTheme({
    palette: {
      primary: {
        main: "#b1c3c3"
      }
    }
  });
  
  export default function BookingSuccessfulPage() {
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
            justifyContent: "center"
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
              borderRadius: "5%"
            }}
          >
            <Typography
              sx={{
                marginTop: 2,
                flexGrow: 0.4,
                fontFamily: "monospace",
                fontSize: 20,
                textAlign: "center"
              }}
            >
              Booking Successful!
            </Typography>
  
            <Typography
              sx={{
                marginTop: -15,
                flexGrow: 0.4,
                fontFamily: "monospace",
                fontSize: 15,
                textAlign: "left",
                marginLeft: 2
              }}
            >
              Details of Booking:
            </Typography>
  
            <div
              style={{
                display: "flex",
                gap: "20px",
                alignSelf: "center",
                marginTop: 190
              }}
            >
              <Button
                variant="contained"
                size="small"
                endIcon={<Icon path={mdiCloseBoxOutline} size={0.8} />}
              >
                <Typography sx={{ fontSize: 16 }}>Close</Typography>
              </Button>
            </div>
          </Box>
        </Container>
      </ThemeProvider>
    );
  }
  