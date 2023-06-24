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
  
  export default function CancellationSuccessfulPage() {
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
                marginTop: 8,
                flexGrow: 0.4,
                fontFamily: "monospace",
                fontSize: 20,
                textAlign: "center"
              }}
            >
              Cancellation Successful!
            </Typography>
  
            <div style={{ display: "flex", gap: "20px", alignSelf: "center" }}>
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
  