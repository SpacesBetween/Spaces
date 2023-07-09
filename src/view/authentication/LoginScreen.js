import { useState } from "react";
import {
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  OutlinedInput,
  IconButton,
  Box,
  Collapse,
  Button,
  Alert,
  AlertTitle,
  Container,
  Link,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { Close, Visibility, VisibilityOff } from "@mui/icons-material";
import { handleLogin } from "../../model/auth/auth.js";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#8BB0D6",
    },
  },
});

export default function LoginScreen() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const [open, setOpen] = useState(false);

  // navigate const
  const navigate = useNavigate();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickLogin = () =>
    handleLogin({ email: email, password: password }).then((msg) => {
      setLoginMessage(msg);
      if (loginMessage !== "Success") {
        setOpen(true);
      } else {
        navigate("/home");
      }
    });

  return (
    <>
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
              height: "50%",
              width: "100%",
              bgcolor: "#eaeaea",
              padding: "16px",
            }}
          >
            <div className="Email-input">
              <TextField
                id="outlined-start-adornment"
                label="Email"
                variant="outlined"
                error={email === ""}
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
            <div className="Password-input">
              <FormControl
                sx={{
                  m: 1,
                  width: "80%",
                  position: "relative",
                  left: "8%",
                  top: "20%",
                }}
                error={password === ""}
                variant="outlined"
                onChange={(event) => {
                  setPassword(event.target.value);
                }}
              >
                <InputLabel htmlFor="outlined-adornment-password">
                  Password
                </InputLabel>
                <OutlinedInput
                  id="outlined-adornment-password"
                  type={showPassword ? "text" : "password"}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                  label="Password"
                />
              </FormControl>
            </div>
            <div className="LoginButton">
              <Button
                variant="contained"
                sx={{ m: 1, position: "relative", left: "62%", top: "40%" }}
                onClick={handleClickLogin}
              >
                Login
              </Button>
            </div>
            <div className="Links">
              <div>
                <Link
                  sx={{ position: "relative", left: "11%", top: 40 }}
                  href="/signup"
                >
                  Don't have an account? Sign up
                </Link>
              </div>
              <div>
                <Link
                  sx={{
                    position: "relative",
                    left: "30%",
                    top: 40,
                    cursor: "not-allowed",
                  }}
                  href="#"
                >
                  Forget password
                </Link>
              </div>
            </div>
          </Box>
          <Collapse in={open}>
            <Alert
              severity="warning"
              action={
                <IconButton
                  aria-label="close"
                  color="inherit"
                  size="small"
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <Close />
                </IconButton>
              }
            >
              <AlertTitle>Warning</AlertTitle>
              {loginMessage}
            </Alert>
          </Collapse>
        </Container>
      </ThemeProvider>
    </>
  );
}
