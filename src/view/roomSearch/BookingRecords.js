import React, { useState } from "react";
import { Button, Typography } from "@mui/material";
import { supabase } from "../../configuration/supabaseClient.js";
import "./BookingRecords.css";
import {
  handleCancellation,
  fetchBookingHistory,
} from "../../model/room/roomFunc.js";
import { redirect } from "react-router-dom";

// can get the user session here
const {
  data: { user },
} = await supabase.auth.getUser();

// handle cancellation redirection
const handleCancellationDirection = (booking_id, user) => {
   redirect("/")
}

const BookingRecords = () => {
  const [bookings, setBookings] = useState([]);

  // fetch bookings from database and set array
  fetchBookingHistory(user)
    .catch((error) => alert(error.mesaage))
    .then((bookings) => setBookings(bookings));

  return (
    <div className="maindiv">
      <p
        style={{
          // changed margin top to see what happens
          position: "relative",
          marginTop: 30,
          marginLeft: 20,
          marginBottom: 10,
          fontSize: "0.8rem",
          fontWeight: "lighter",
          color: "white",
          // added a background colour to see how it looks
          backgroundColor: "black",
          // added in a width
          width: "15%",
        }}
      >
        Click on new bookings to book a slot. <br />
        Click on cancel if you wish to cancel an existing booking.
      </p>
      {/* <p
        style={{
          // changed margin top to see what happens
          position:"relative",
          top: 0,
          marginLeft: 20,
          marginBottom: 50,
          fontSize: "0.8rem",
          fontWeight: "lighter",
          color:"white",
          // added a background colour to see how it looks
          backgroundColor:"black",
          // added in a width
          width: "15%",
        }}
      >
        Click on cancel if you wish to cancel an existing booking.
      </p> */}
      {/* try to wrap the rest in a div container */}
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
              href="/newbooking"
            >
              <Typography sx={{ fontSize: 16 }}>New Booking</Typography>
            </Button>
          </div>
        </div>

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
                  <td>{booking.transactionDate}</td>
                  <td>
                    {new Date(booking.bookingTimeRange[0]).toDateString()}
                  </td>
                  <td>{booking.time}</td>
                  <td>{booking.venue_id}</td>
                  <td>{booking.status}</td>
                  <td>
                    <button
                      onClick={() => handleCancellation(booking.id, user)}
                    >
                      Cancel
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default BookingRecords;
