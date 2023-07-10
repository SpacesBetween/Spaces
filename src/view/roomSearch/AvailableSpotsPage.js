import React from "react";
import Spots from "../../components/Spots.js";
import { Typography, Container } from "@mui/material";

// have to add in the up to date time and location(not yet done)
export default function AvailableSpotPage() {
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

  return (
    // <Container
    //   maxWidth="xs"
    //   sx={{
    //     display: "flex",
    //     flexDirection: "column",
    //     height: "100vh",
    //     backgroundColor: "",
    //     justifyBackground: "center",
    //     justifyContent: "center"
    //   }}
    // >
    <>
    <h1> Available Spots for Booking</h1>
      {/* <Typography
        //component="h1"
        sx={{
          marginTop: -30,
          marginLeft: -45,
          flexGrow: 0.4,
          fontFamily: "monospace",
          fontSize: 20,
          textAlign: "left",
          zIndex: "999"
        }}
      >
        {dayName}, {""}
        {new Date().toLocaleString("en-US", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })}
      </Typography> */}
      < Spots /> 
      {/* pass in a function, the searching params to this file; the function will notify <Spots> to return which venues*/}
    </>
  );
}
