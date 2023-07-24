import React, { useState } from "react";
import { Button, Typography, CircularProgress, createTheme, ThemeProvider } from "@mui/material";
import "./BookingRecords.css";
import { fetchBookingHistory } from "../../model/room/roomFunc.js";
import { mdiNull } from "@mdi/js";
import { useNavigate } from "react-router-dom";

const theme = createTheme({
  palette: {
    primary: {
      main: "#b1c3c3",
    },
  },
});

const BookingRecords = ({ user }) => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const navigate = useNavigate();

  // fetch bookings from database and set array
  fetchBookingHistory(user)
    .then((bookings) => {
      setBookings(bookings);
    })
    .catch((error) => alert(error))
    .finally(() => setLoading(false));

  return (
    <ThemeProvider theme={theme}>
    <div className="maindiv">
      <p
        style={{
          // changed margin top to see what happens
          position: "relative",
          marginTop: 30,
          marginLeft: 10,
          marginBottom: 10,
          fontSize: "0.7rem",
          fontWeight: "lighter",
          color: "white",
          // added a background colour to see how it looks
          backgroundColor: "black",
          // added in a width
          width: "100%",
          maxWidth: "300px",
          borderRadius: "10px",
        }}
      >
        Click on NEW BOOKING to book a slot. <br />
        Click on CANCEL if you wish to cancel an existing booking.
      </p>
      <div className="records">
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h3 style={{ marginLeft: 20, fontSize: 25, color: "red" }}>
            {" "}
            Booking Records
          </h3>
          <div style={{ marginLeft: "auto", marginRight: 50, marginTop: 26 }}>
            <Button
              variant="contained"
              size="small"
              color="primary"
              onClick={() => {
                /*if (data[0].type === "Student") {
                  navigate("/studyspotbooking");
                  return;
                }*/
                navigate("/newbooking");
              }}
            >
              <Typography sx={{ fontSize: 16 }}>New Booking</Typography>
            </Button>
          </div>
        </div>
        {loading ? (
          <CircularProgress
            size={70}
            color="secondary"
            sx={{
              justifyContent: "center",
              position: "relative",
              left: "49%",
              right: "49%",
              marginTop: "20px",
            }}
          />
        ) : (
          <table
            style={{
              margin: "0 auto",
              tableLayout: "auto",
              font: "small-caption",
              fontSize: 19,
              fontWeight: "lighter",
              textAlign: "center",
              color: "azure",
            }}
          >
            <thead>
              <tr>
                <th style={{ width: "15%" }}>Transaction Date</th>
                <th style={{ width: "10%" }}>Booked Date</th>
                <th style={{ width: "10%" }}>Time</th>
                <th style={{ width: "10%" }}>Location</th>
                <th style={{ width: "10%" }}>Status</th>
              </tr>
            </thead>
            <tbody>
              {bookings.length === 0 ? (
                <tr>
                  <td colSpan="9" style={{ textAlign: "center" }}>
                    <p
                      style={{
                        fontSize: "0.75rem",
                        margin: "2rem 0",
                        fontWeight: "lighter",
                        color: "red",
                        fontStyle: "italic",
                      }}
                    >
                      No bookings found.
                    </p>
                  </td>
                </tr>
              ) : (
                bookings.map((booking) => (
                  <tr key={booking.booking_id}>
                    <td>{new Date(booking.transactionDate).toDateString()}</td>
                    <td>
                      {new Date(booking.bookingTimeRange[0]).toDateString()}
                    </td>
                    <td>{booking.time}</td>
                    <td>{booking.venue_id}</td>
                    <td>
                      <button
                        onClick={() => {
                          navigate("/cancelpage", {
                            state: {
                              id: booking.booking_id,
                              user: user,
                              venue: booking.venue_id,
                              day: booking.day,
                              duration: booking.duration,
                              time: booking.time,
                              type: booking.type,
                            },
                          });
                        }}
                      >
                        CANCEL
                      </button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        )}
      </div>
    </div>
    </ThemeProvider>
  );
};

export default BookingRecords;
