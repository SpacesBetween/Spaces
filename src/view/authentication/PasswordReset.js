import {
  TextField,
  Box,
  Button,
  Container,
  Link,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { useState } from "react";
import { forgetPassword } from "../../model/auth/auth.js";
import { useNavigate } from "react-router-dom";
import React from "react";

const theme = createTheme({
  palette: {
    primary: {
      main: "#8BB0D6",
    },
  },
});

export default function PasswordReset() {
  const [email, setEmail] = useState("");

  const navigate = useNavigate();

  const handleReset = () => {
    forgetPassword(email)
      .then((msg) => {
        alert(msg);
      })
      .catch((err) => alert(err));
  };

  return (
    <ThemeProvider theme={theme}>
      <Container
        maxWidth="xs"
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          justifyBackground: "center",
          justifyContent: "center",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "40%",
            width: "100%",
            bgcolor: "#eaeaea",
            padding: "16px",
            justifyContent: "center",
          }}
        >
          <div className="Email-input">
            <TextField
              id="outlined-start-adornment"
              label="Email"
              variant="outlined"
              helperText="Please enter your email."
              sx={{
                m: 1,
                width: "80%",
                position: "relative",
                left: "8%",
                top: "20%",
              }}
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </div>
          <div className="ResetButton">
            <Button
              variant="contained"
              sx={{ m: 1, position: "relative", left: "62%", top: "40%" }}
              onClick={handleReset}
            >
              Send
            </Button>
          </div>
          <div className="Links">
            <div>
              <Link
                sx={{
                  position: "relative",
                  left: "11%",
                  top: 40,
                  cursor: "pointer",
                }}
                onClick={() => navigate("/signup")}
              >
                Don't have an account? Sign up
              </Link>
            </div>
            <div>
              <Link
                sx={{
                  position: "relative",
                  left: "11%",
                  top: 40,
                  cursor: "pointer",
                }}
                onClick={() => navigate("/login")}
              >
                Have an account actually, login.
              </Link>
            </div>
          </div>
        </Box>
      </Container>
    </ThemeProvider>
  );
}
