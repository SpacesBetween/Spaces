import React, { useState } from "react";
import Spots from "../../components/Spots.js";
import {
  Typography,
  FormControl,
  InputLabel,
  NativeSelect,
  Button,
  Icon,
  createTheme,
  ThemeProvider
} from "@mui/material";
import { mdiArrowLeft, mdiArrowRightBoldHexagonOutline } from "@mdi/js";
import "./AvailableSpotsPage.css";

// have to add in the up to date time and location(not yet done)
export default function AvailableSpotPage() {
  // states
  const [time, setTime] = useState();
  const [duration, setDuration] = useState();
  const [location, setLocation] = useState();

  // functions
  const onSelectTime = (e) => {
    setTime(e.target.value);
  };

  const onSelectDuration = (e) => {
    setDuration(e.target.value);
  };

  const onSelectLocation = (e) => {
    setLocation(e.target.value);
  };

  // variables
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var d = new Date();
  var dayName = days[d.getDay()];

  // date
  // booking type

  const theme = createTheme({
    palette: {
      primary: {
        main: "#b1c3c3",
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <h1> Available Spots for Booking</h1>
      <Typography
        //component="h1"
        sx={{
          flexGrow: 0.4,
          fontFamily: "monospace",
          fontSize: 20,
          textAlign: "center",
          zIndex: "999",
          color: "white",
        }}
      >
        {dayName}, {""}
        {new Date().toLocaleString("en-US", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })}
      </Typography>

      <div className="Input-Container">
        <div className="SearchInput">
          <FormControl
            margin="normal"
            required
            sx={{
              justifyContent: "center",
              alignContent: "center",
              position: "relative",
              left: "5%",
              height: "40px",
            }}
          >
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Time
            </InputLabel>
            <NativeSelect
              defaultValue={8}
              inputProps={{
                name: "Time",
                id: "uncontrolled-native",
              }}
              onChange={(e) => onSelectTime(e)}
            >
              <option value={8}>0800</option>
              <option value={9}>0900</option>
              <option value={10}>1000</option>
              <option value={11}>1100</option>
              <option value={12}>1200</option>
              <option value={13}>1300</option>
              <option value={14}>1400</option>
              <option value={15}>1500</option>
              <option value={16}>1600</option>
              <option value={17}>1700</option>
              <option value={18}>1800</option>
            </NativeSelect>
          </FormControl>
        </div>
        <div className="SearchInput">
          <FormControl
            margin="normal"
            required
            sx={{
              justifyContent: "center",
              alignContent: "center",
              position: "relative",
              left: "5%",
              height: "40px",
            }}
          >
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Duration
            </InputLabel>
            <NativeSelect
              defaultValue={0.5}
              inputProps={{
                name: "Duration",
                id: "uncontrolled-native",
              }}
              onChange={(e) => onSelectLocation(e)}
            >
              <option value={0.5}>0.5 hr</option>
              <option value={1}>1 hr</option>
              <option value={1.5}>1.5 hr</option>
              <option value={2}>2 hr</option>
            </NativeSelect>
          </FormControl>
        </div>
        <div className="SearchInput">
          <FormControl
            margin="normal"
            required
            sx={{
              justifyContent: "center",
              alignContent: "center",
              position: "relative",
              left: "5%",
              height: "40px",
            }}
          >
            <InputLabel variant="standard" htmlFor="uncontrolled-native">
              Location
            </InputLabel>
            <NativeSelect
              defaultValue={"COM"}
              inputProps={{
                name: "Duration",
                id: "uncontrolled-native",
              }}
              onChange={(e) => onSelectDuration(e)}
            >
              <option value={"AS"}>AS</option>
              <option value={"BIZ"}>BIZ</option>
              <option value={"CAPT"}>CAPT</option>
              <option value={"CELC"}>CELC</option>
              <option value={"COM"}>COM</option>
              <option value={"E1"}>E1</option>
              <option value={"E2"}>E2</option>
              <option value={"E3"}>E3</option>
              <option value={"E4"}>E4</option>
              <option value={"E5"}>E5</option>
              <option value={"E8"}>E8</option>
              <option value={"EA"}>EA</option>
              <option value={"Ew"}>EW (Engineering)</option>
              <option value={"ENG-AUD"}>Engineering Auditoriam</option>
              <option value={"ERC"}>Education Resource Centre</option>
              <option value={"Frontier"}>Frontier</option>
              <option value={"I3"}>I3</option>
              <option value={"RMI"}>I3 RMI</option>
              <option value={"KEVII"}>KEVII</option>
              <option value={"LAW"}>LAW</option>
              <option value={"LKY"}>
                LEE KUAN YEW SCHOOL OF PUBLIC POLICY
              </option>
              <option value={"LT"}>LECTURE THEATRE</option>
              <option value={"MD"}>MEDICINE</option>
              <option value={"NAK-AUD"}>NGEE ANN KONG SI AUDITORIAM</option>
              <option value={"PGP"}>PGP</option>
              <option value={"RC4"}>RC4</option>
              <option value={"RH"}>RAFFLES HALL</option>
              <option value={"RVR"}>RIDGE VIEW</option>
              <option value={"S1"}>S1</option>
              <option value={"S2"}>S2</option>
              <option value={"S4"}>S4</option>
              <option value={"S5"}>S5</option>
              <option value={"S8"}>S8</option>
              <option value={"S11"}>S11</option>
              <option value={"S12"}>S12</option>
              <option value={"S13"}>S13</option>
              <option value={"S14"}>S14</option>
              <option value={"S16"}>S16</option>
              <option value={"S17"}>S17</option>
              <option value={"SDE"}>DESIGN & ENGINEERING</option>
              <option value={"SH"}>SHEARES HALL</option>
              <option value={"TC"}>TEMBUSU</option>
              <option value={"TH"}>TEMASEK HALL</option>
              <option value={"TP"}>TOWN PLAZA</option>
              <option value={"USP"}>USP (CINNAMON COLLEGE)</option>
              <option value={"UT"}>UTOWN</option>
              <option value={"Y-"}>YALE-NUS</option>
              <option value={"YSTCM"}>YST CONSERVATORY OF MUSIC</option>
            </NativeSelect>
          </FormControl>
        </div>
        <Button
          variant="contained"
          size="small"
          endIcon={<Icon path={mdiArrowRightBoldHexagonOutline} size={0.7} />}
          sx={{margin: "30px"}}
        >
          <Typography sx={{ fontSize: 14 }}>Go</Typography>
        </Button>
        <Button
          variant="contained"
          size="small"
          endIcon={<Icon path={mdiArrowLeft} size={0.7} />}
        >
          <Typography sx={{ fontSize: 14 }}>Back</Typography>
        </Button>
      </div>
      <Spots />
      {/* pass in a function, the searching params to this file; the function will notify <Spots> to return which venues*/}
    </ThemeProvider>
  );
}
