import { useState } from "react";
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
  Container,
  Typography,
  Stack,
  createTheme,
  ThemeProvider,
  CircularProgress,
} from "@mui/material";
import { Close, Visibility, VisibilityOff } from "@mui/icons-material";
import { handleSignUp } from "../../model/auth/auth.js";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#8BB0D6",
    },
  },
});

// can skip the sign-up part
// the box is not align to the center, with the container
export default function LoginScreen() {
  // use states
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [type, setType] = useState("");
  const [name, setName] = useState("");
  const [modules, setModules] = useState([]);
  const [moduleName, setModuleName] = useState("");
  const [signUpMessage, setsignUpMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [student, setStudent] = useState(false); // default is staff
  const [TA, setTA] = useState(false);
  const [loading, setLoading] = useState(false);

  // navigate
  const navigate = useNavigate();

  // functions
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickSubmit = () => {
    setLoading(true);
    handleSignUp({
      email: email,
      password: password,
      type: type,
      name: name,
      moduleIfTA: modules,
    }).then((msg) => {
      setsignUpMessage(msg);
      setLoading(false);
      if (msg === "Success! Please check your email for confirmation.") {
        setSuccess(true);
        setOpen(false);
      } else {
        setOpen(true);
      }
    });
  };

  const handleClickStudent = () => {
    setStudent(true);
    setType("Student");
  };

  const handleClickStaff = () => {
    setStudent(false);
    setType("Staff");
  };

  const handleClickTA = () => {
    setType("TA");
    setTA(!TA);
    if (TA === false) {
      setModules([]);
      setType("Student");
    }
  };

  const handleClickAddModuleName = (event) => {
    setModuleName(event.target.value);
  };

  const handleUpdateModulesAdd = () => {
    setModules([...modules, { id: i++, name: moduleName }]);
  };

  // variables
  let i = 0;

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
          <div className="stu-staff">
            <Button
              variant="elevated"
              sx={{ fontSize: 20 }}
              onClick={handleClickStaff}
            >
              Staffs
            </Button>
            <Button
              variant="elevated"
              sx={{ fontSize: 20 }}
              onClick={handleClickStudent}
            >
              Students
            </Button>
          </div>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              height: "{TA} ? calc(100vh - 50px) : 120%",
              width: "100%",
              bgcolor: "#eaeaea",
              padding: "32px",
            }}
          >
            <div className="Email-input">
              <TextField
                id="outlined-input-email"
                label="Email"
                variant="outlined"
                helperText="UserID@u.nus.edu"
                sx={{
                  m: 1,
                  width: "80%",
                  position: "relative",
                  left: "8%",
                  top: "5%",
                }}
                onChange={(event) => {
                  setEmail(event.target.value);
                }}
              />
            </div>
            <div className="name-input">
              <TextField
                id="outlined-input-name"
                label="Name"
                variant="outlined"
                sx={{
                  m: 1,
                  width: "80%",
                  position: "relative",
                  left: "8%",
                  top: "-5%",
                }}
                onChange={(event) => {
                  setName(event.target.value);
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
                  top: "-5%",
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
            </div>

            {student && (
              <>
                <div className="TAButton">
                  <Button
                    variant="contained"
                    onClick={handleClickTA}
                    sx={{ position: "relative", top: 5, left: "57.5%" }}
                  >
                    I am a TA
                  </Button>
                  <Typography
                    fontSize="10"
                    color="red"
                    sx={{
                      position: "relative",
                      left: "45%",
                      top: 5,
                      fontSize: 13,
                    }}
                  >
                    Warning: Verification required.
                  </Typography>
                </div>

                <div>
                  {TA && (
                    <div className="TA">
                      <Stack
                        direction="row"
                        spacing={2}
                        justifyContent="center"
                      >
                        <div className="module-input">
                          <TextField
                            id="outlined-start-adornment"
                            sx={{
                              m: 1,
                              width: "50%",
                              position: "relative",
                              left: "8%",
                              top: "20%",
                            }}
                            InputProps={{
                              startAdornment: (
                                <InputAdornment position="start">
                                  Module {i + 1}:
                                </InputAdornment>
                              ),
                            }}
                            onChange={handleClickAddModuleName}
                          />
                          <Button
                            onClick={handleUpdateModulesAdd}
                            variant="contained"
                            size="medium"
                            sx={{
                              position: "relative",
                              left: "10%",
                              top: "40%",
                            }}
                          >
                            Add
                          </Button>
                        </div>
                      </Stack>
                      <div className="moduleListView">
                        <ul>
                          {modules.map((module) => (
                            <li key={module.id}>
                              {module.name}{" "}
                              <button
                                onClick={() => {
                                  setModules(
                                    modules.filter((m) => m.id !== module.id)
                                  );
                                }}
                              >
                                Delete
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  )}
                </div>
              </>
            )}
            <div className="SubmitButton">
              {loading ? (
                <CircularProgress
                  sx={{ position: "relative", left: "49%", right: "49%" }}
                />
              ) : (
                <Button
                  variant="contained"
                  sx={{
                    m: 1,
                    position: "relative",
                    left: 120,
                    top: 10,
                    backgroundColor: "primary",
                  }}
                  onClick={handleClickSubmit}
                >
                  Sign Up
                </Button>
              )}
            </div>
            <div className="Links">
              <Link
                sx={{
                  position: "relative",
                  left: "23%",
                  top: 10,
                  fontSize: 20,
                  cursor: "pointer",
                }}
                onClick={() => navigate("/login")}
              >
                Have an account? Log In
              </Link>
            </div>
          </Box>
          <Collapse in={open === true}>
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
              {signUpMessage}
            </Alert>
          </Collapse>
          <div>
            {success && (
              <Alert severity="success">
                <AlertTitle>Success!</AlertTitle>
                You can proceed to login now.
              </Alert>
            )}
          </div>
        </Container>
      </ThemeProvider>
    </>
  );
}
