import {
  Box,
  Container,
  Button,
  Typography,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { Icon } from "@mdi/react";
import { mdiCalendarHeart, mdiCardSearchOutline } from "@mdi/js";

const theme = createTheme({
  palette: {
    primary: {
      main: "#b1c3c3",
    },
  },
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
              //component="h1"
              sx={{
                marginTop: 8,
                flexGrow: 0.4,
                fontFamily: "monospace",
                fontSize: 20,
                textAlign: "center",
              }}
            >
              What are you searching for?
            </Typography>

            <div style={{ display: "flex", gap: "20px" }}>
              <Button
                variant="contained"
                color="primary"
                size="small"
                endIcon={<Icon path={mdiCardSearchOutline} size={0.8} />}
              >
                <Typography sx={{ fontSize: 14 }}>Room Bookings</Typography>
              </Button>
              <Button
                variant="contained"
                size="small"
                endIcon={<Icon path={mdiCalendarHeart} size={0.7} />}
              >
                <Typography sx={{ fontSize: 14 }}>Event Search</Typography>
              </Button>
            </div>
          </Box>
        </Container>
      </ThemeProvider>
  );
}
