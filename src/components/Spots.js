import React from "react";
import AvailableSpots from "./AvailableSpots.js";
import "./Spots.css";
import { Typography } from "@mui/material";

function Spots() {
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
    <div className="spots">
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
      <div className="spots__container">
        <div className="spots__wrapper">
          <ul className="available__spots">
            {/* handle an array of venue and only present venues which are available */}
            <AvailableSpots
              src="images/central-library.jpeg"
              text="Central Library"
              label="Libraries"
              path="/receipt"
            />
            <AvailableSpots
              src="images/science-library.jpeg"
              text="Medicine-Science Library"
              label="Libraries"
              path="/receipt"
            />
          </ul>
          <ul className="available__spots">
            <AvailableSpots
              src="images/soc.jpg"
              text="COM1"
              label="Study Corner"
              path="/receipt"
            />
            <AvailableSpots
              src="images/musicLib.jpg"
              text="Music Library"
              label="Libraries"
              path="/receipt"
            />
            <AvailableSpots
              src="images/area-outside-starbucks.jpeg"
              text="Area Outside Starbucks(UTown)"
              label="Study Corner"
              path="/receipt"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Spots;
