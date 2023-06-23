import {
    Box,
    Container,
    Button,
    Typography,
    createTheme,
    ThemeProvider
  } from "@mui/material";
  import { Icon } from "@mdi/react";
  import { mdiArrowLeft, mdiBookCheckOutline } from "@mdi/js";
  
  const theme = createTheme({
    palette: {
      primary: {
        main: "#b1c3c3"
      }
    }
  });
  
  export default function HomePage() {
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
              height: "30%",
              width: "100%",
              bgcolor: "#eaeaea",
              padding: "16px",
              borderRadius: "5%"
            }}
          >
            <Typography
              sx={{
                marginTop: 1,
                flexGrow: 0.4,
                fontFamily: "monospace",
                fontSize: 20,
                textAlign: "center"
              }}
            >
              Reciept of Booking:
            </Typography>
  
            <div
              style={{
                display: "flex",
                gap: "20px",
                alignSelf: "center",
                marginTop: 325
              }}
            >
              <Button
                variant="contained"
                color="primary"
                size="small"
                endIcon={<Icon path={mdiBookCheckOutline} size={0.8} />}
              >
                <Typography sx={{ fontSize: 14 }}>Confirm</Typography>
              </Button>
              <Button
                variant="contained"
                size="small"
                endIcon={<Icon path={mdiArrowLeft} size={0.7} />}
              >
                <Typography sx={{ fontSize: 14 }}>Back</Typography>
              </Button>
            </div>
          </Box>
        </Container>
      </ThemeProvider>
    );
  }