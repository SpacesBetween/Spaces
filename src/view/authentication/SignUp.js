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
} from "@mui/material";
import { Close, Visibility, VisibilityOff } from "@mui/icons-material";
import { handleSignUp } from "../../model/auth/auth.js";

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

  // functions
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleClickSubmit = () =>
    handleSignUp({
      email: email,
      password: password,
      type: type,
      name: name,
      moduleIfTA: modules,
    }).then((msg) => {
      setsignUpMessage(msg);
      if (
        msg === "Success! Please check your email for confirmation."
      ) {
        setSuccess(true);
        setOpen(false);
      } else {
        setOpen(true);
      }
    });

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
          <Button onClick={handleClickStaff}>Staffs</Button>
          <Button onClick={handleClickStudent}>Students</Button>
        </div>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "{TA} ? calc(100vh - 50px) : 50%",
            width: "100%",
            bgcolor: "#eaeaea",
            padding: "16px",
          }}
        >
          <div className="Email-input">
            <TextField
              id="outlined-start-adornment"
              helperText="example@nus.edu.sg"
              sx={{
                m: 1,
                width: "80%",
                position: "relative",
                left: "8%",
                top: "20%",
              }}
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
          <div className="name-input">
            <TextField
              id="outlined-start-adornment"
              sx={{
                m: 1,
                width: "80%",
                position: "relative",
                left: "8%",
                top: "20%",
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">Name:</InputAdornment>
                ),
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
                top: "20%",
              }}
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

          {student && (
            <>
              <div className="TAButton">
                <Button
                  variant="contained"
                  onClick={handleClickTA}
                  sx={{ position: "relative", top: "30%" }}
                >
                  I am a TA
                </Button>
                <Typography
                  fontSize="10"
                  color="red"
                  sx={{ position: "relative", left: "30%", bottom: "20%" }}
                >
                  We may need to verify!
                </Typography>
              </div>

              <div>
                {TA && (
                  <div className="TA">
                    <Stack direction="row" spacing={2} justifyContent="center">
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
                          sx={{ position: "relative", left: "20%", top: "40%" }}
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
          <div className="Links">
            <Link
              sx={{ position: "relative", left: "17%", top: "50%" }}
              href="/login"
            >
              Wait! I have an account! Login
            </Link>
          </div>
        </Box>

        <div className="SubmitButton">
          <Button
            variant="contained"
            sx={{
              m: 1,
              position: "relative",
              left: "75%",
              top: "0%",
              backgroundColor: "purple",
            }}
            onClick={handleClickSubmit}
          >
            Submit!
          </Button>
        </div>
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
              {signUpMessage} You can close this tab now.
            </Alert>
          )}
        </div>
      </Container>
    </>
  );
}
