import {
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  OutlinedInput,
  IconButton,
  Link,
  Box,
  Collapse,
  Button,
  Alert,
  AlertTitle,
} from "@mui/material";
import { Close, Visibility, VisibilityOff } from "@mui/icons-material";
import React from "react";
import { handleLogin } from "../model/auth/auth.js";
import { useState } from "react";

export default function LoginBox() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loginMessage, setLoginMessage] = useState("");
  const [open, setOpen] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <div className="Email-input">
        <TextField
          id="outlined-start-adornment"
          error={email === ""}
          helperText="Please enter your email."
          sx={{ m: 1, width: "25ch" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">Email:</InputAdornment>
            ),
          }}
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </div>
      <div className="Password-input">
        <FormControl
          sx={{ m: 1, width: "25ch" }}
          error={password === ""}
          variant="outlined"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        >
          <InputLabel htmlFor="outlined-adornment-password">
            Enter your Password
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
          onClick={setLoginMessage(handleLogin({ email, password }))}
        >
          Login
        </Button>
        </div>
        <Collapse in={!open || loginMessage === "Success"}>
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
      <div className="Links">
        <div>
          <Link href="#">Don't have an account? Sign up!</Link>
        </div>
        <div>
          <Link href="#">Forgot password</Link>
        </div>
      </div>
    </>
  );
}
