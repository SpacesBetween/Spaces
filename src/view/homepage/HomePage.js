import {
  Box,
  Button,
  Typography,
  createTheme,
  ThemeProvider,
  CardMedia,
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
    <CardMedia>
      <ThemeProvider theme={theme}>
          <Box
            sx={{
              display: "flex",
              position: "absolute",
              flexDirection: "column",
              height: "30%",
              width: "30%",
              top: "35%",
              left: "35%",
              bgcolor: "#eaeaea",
              padding: "16px",
              borderRadius: "5%",
            }}
          >
            <Typography
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

            <div style={{ display: "flex", gap: "20px", position: "absolute", left: "13%" , top: "60%"}}>
              <Button
                variant="contained"
                color="primary"
                size="small"
                endIcon={<Icon path={mdiCardSearchOutline} size={0.8} />}
                href="../roomSearch/RoomSearchPage.js"
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
      </ThemeProvider>
    </CardMedia>
  );
}
