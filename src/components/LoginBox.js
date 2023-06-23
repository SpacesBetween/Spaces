import {
  TextField,
  InputAdornment,
  FormControl,
  InputLabel,
  OutlinedInput,
  IconButton,
  Visibility,
  VisibilityOff,
  Link,
  Button,
} from "@mui/icons-material";
import React from "react";
import { handleLogin } from "../model/auth/auth";

export default function LoginBox() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <div className="Email-input">
        <TextField
          id="outlined-start-adornment"
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
        <FormControl sx={{ m: 1, width: "25ch" }} variant="outlined"onChange={(event) => {
            setPassword(event.target.value);
          }}>
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
        <Button variant="contained" onClick={handleLogin}>Login</Button>
      </div>
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
