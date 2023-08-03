import ProfileBar from "../../components/profile/ProfileBar.js";
import { Button, createTheme, ThemeProvider } from "@mui/material";
import { getUserDetails, tempGetPfp } from "../../model/auth/auth.js";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { fetchBookingHistory } from "../../model/room/roomFunc.js";

function ProfilePageBooking({ user }) {
  // states
  const [loading, setLoading] = useState(true);
  const [userDetails, setUserDetails] = useState();
  const [bookings, setBookings] = useState();

  // set theme
  const theme = createTheme({
    palette: {
      primary: {
        main: "#b1c3c3",
      },
    },
  });

  // get random number
  const number = tempGetPfp(user?.email);

  //navigation
  const navigate = useNavigate();

  const location = useLocation();
  const data = location.state;

  useEffect(() => {
    getUserDetails(user)
      .then((data) => {
        setUserDetails(data);
      })
      .catch((error) => {
        alert(error);
        setUserDetails(`Error: ${error}. Please try again!`);
      })
      .finally(() => setLoading(false));
    // fetch bookings from database and set array
    fetchBookingHistory(user)
      .then((bookings) => {
        setBookings(bookings);
      })
      .catch((error) => alert(error))
      .finally(() => setLoading(false));
  }, [user]);

  return (
    <ThemeProvider theme={theme}>
      {loading ? (
        <h1 style={{ color: "white", fontStyle: "italic" }}>Loading...</h1>
      ) : (
        <>
          <ProfileBar
            userEmail={user?.email ?? userDetails?.email}
            userName={data?.name ?? userDetails?.name}
            userType={data?.type ?? userDetails?.type}
            number={number}
          />
          <div
            className="buttons"
            style={{ position: "sticky", marginTop: "10px" }}
          >
            <Button variant="contained">BOOKINGS</Button>
            <Button
              onClick={() => navigate("/profile", { state: userDetails })}
              variant="outlined"
            >
              JOINED EVENTS
            </Button>
          </div>
          <div className="records" style={{ marginTop: "10px" }}>
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
                  <th style={{ width: "15%" }}>Date Of Transcation</th>
                  <th style={{ width: "10%" }}>Booked Date</th>
                  <th style={{ width: "10%" }}>Time</th>
                  <th style={{ width: "10%" }}>Duration/hr</th>
                  <th style={{ width: "10%" }}>Location</th>
                  <th style={{ width: "10%" }}>Cancel</th>
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
                      <td>
                        {new Date(booking.transactionDate).toDateString()}
                      </td>
                      <td>
                        {new Date(booking.bookingTimeRange[0]).toDateString()}
                      </td>
                      <td>{booking.time}</td>
                      <td>{booking.duration}</td>
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
          </div>
        </>
      )}
    </ThemeProvider>
  );
}

export default ProfilePageBooking;
