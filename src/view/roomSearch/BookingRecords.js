import React, { useState, useEffect } from "react";
import { Button, Typography } from "@mui/material";

const BookingRecords = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetch booking history from the backend API
    // Replace <API_ENDPOINT> with the actual API endpoint to fetch bookings
    fetch("<API_ENDPOINT>")
      .then((response) => response.json())
      .then((data) => {
        setBookings(data);
      })
      .catch((error) => {
        console.error("Error fetching booking history:", error);
      });
  }, []);

  const handleNewBooking = () => {
    // Logic to handle the new booking
    // Redirect the user to the new booking page or show a modal, etc.
  };

  const handleCancellation = (bookingId) => {
    // Perform cancellation logic for the specified bookingId
    console.log(`Cancellation requested for booking ID: ${bookingId}`);
    // Update the 'bookings' state to reflect the cancellation
    // Example:
    // const updatedBookings = cancelBooking(bookingId);
    // setBookings(updatedBookings);
  };

  return (
    <div>
      <p
        style={{
          marginTop: 150,
          marginLeft: 20,
          marginBottom: -10,
          fontSize: "0.8rem",
          fontWeight: "lighter"
        }}
      >
        Click on new bookings to book a slot.
      </p>
      <p
        style={{
          marginLeft: 20,
          marginBottom: 50,
          fontSize: "0.8rem",
          fontWeight: "lighter"
        }}
      >
        Click on cancel if you wish to cancel an existing booking.
      </p>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <h3 style={{ marginLeft: 20, fontSize: 25, color: "indianred" }}>
          {" "}
          Booking Records
        </h3>
        <div style={{ marginLeft: "auto", marginRight: 50, marginTop: 26 }}>
          <Button variant="contained" size="small" color="primary">
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
          textAlign: "center"
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
                    color: "indianred",
                    fontStyle: "italic"
                  }}
                >
                  No bookings found.
                </p>
              </td>
            </tr>
          ) : (
            bookings.map((booking) => (
              <tr key={booking.id}>
                <td>{booking.transactionDate}</td>
                <td>{booking.bookedDate}</td>
                <td>{booking.time}</td>
                <td>{booking.location}</td>
                <td>{booking.status}</td>
                <td>
                  <button onClick={() => handleCancellation(booking.id)}>
                    Cancel
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
};

export default BookingRecords;
