import {
  Alert,
  AlertTitle,
  TextField,
  Box,
  Button,
  Container,
  CircularProgress,
  FormControl,
  InputLabel,
  Collapse,
  OutlinedInput,
  InputAdornment,
  IconButton,
  createTheme,
  ThemeProvider,
} from "@mui/material";
import { Close, Visibility, VisibilityOff } from "@mui/icons-material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";
import { supabase } from "@supabase/auth-ui-shared";

const theme = createTheme({
  palette: {
    primary: {
      main: "#8BB0D6",
    },
  },
});

const updateUser = async (password) => {
  const { error } = await supabase.auth.updateUser({
    password: password,
  });

  if (error) {
    throw error;
  } else {
    return "Success!";
  }
};

export default function PasswordResetForm() {
  // states
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [passwordCfm, setPasswordCfm] = useState();
  const [msg, setMsg] = useState();
  // states for handling conditional rendering
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // navigation
  // const navigate = useNavigate();

  // functions
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickSubmit = () => {
    setLoading(true);
    updateUser(password)
      .then((msg) => setMsg(msg))
      .catch(err => {
        setMsg(err.msg);
        setOpen(true);
      })
      .finally(() => setLoading(false));
    // navigate("/home");
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
            <FormControl
              sx={{
                m: 1,
                width: "80%",
                position: "relative",
                left: "8%",
                top: "20%",
              }}
              variant="outlined"
              onChange={(event) => {
                setPasswordCfm(event.target.value);
              }}
            >
              <InputLabel htmlFor="outlined-adornment-password">
                Confirm Password
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-password"
                error={() => password !== passwordCfm}
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
                label="Confirm Password"
              />
            </FormControl>
          </div>
          <div className="SubmitButton">
            {loading ? (
              <CircularProgress
                sx={{ position: "relative", left: "49%", right: "49%" }}
              />
            ) : (
              <Button
                variant="contained"
                sx={{ m: 1, position: "relative", left: "62%", top: "40%" }}
                onClick={handleClickSubmit}
              >
                Submit
              </Button>
            )}
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
            {msg}
          </Alert>
        </Collapse>
      </Container>
    </ThemeProvider>
  );
}
