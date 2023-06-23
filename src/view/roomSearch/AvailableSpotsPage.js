import React from 'react';
import Spots from '../../components/Spots';
import '../../App.css';

// have to add in the up to date time and location(not yet done)
export default function AvailableSpotPage() {
    var days = [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday"
    ];
    var d = new Date();
    var dayName = days[d.getDay()];
  
    return (
        <Container
          maxWidth="xs"
          sx={{
            display: "flex",
            flexDirection: "column",
            height: "100vh",
            backgroundColor: "",
            justifyBackground: "center",
            justifyContent: "center"
          }}
        >
            <Typography
              //component="h1"
              sx={{
                marginTop: -30,
                marginLeft: -45,
                flexGrow: 0.4,
                fontFamily: "monospace",
                fontSize: 20,
                textAlign: "left"
              }}
            >
              {dayName}, {""}
              {new Date().toLocaleString("en-US", {
                day: "2-digit",
                month: "long",
                year: "numeric"
              })}
            </Typography>
            < Spots />
        </Container>
    );
  }