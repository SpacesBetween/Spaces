import ProfileBar from "../../components/profile/ProfileBar.js";
import { Button, createTheme, ThemeProvider } from "@mui/material";
import { getUserDetails, tempGetPfp } from "../../model/auth/auth.js";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function ProfilePage({ user }) {
  // states
  const [loading, setLoading] = useState(true);
  const [userDetails, setUserDetails] = useState();

  const theme = createTheme({
    palette: {
      primary: {
        main: "#b1c3c3",
      },
    },
  });

  // navigation
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
  }, [user]);

  return (
    <ThemeProvider theme={theme}>
      {loading ? (
        <h1 style={{ color: "white", fontStyle: "italic" }}>Loading...</h1>
      ) : (
        <>
          <ProfileBar
            userEmail={data?.email ?? userDetails?.email}
            userName={data?.name ?? userDetails?.name}
            userType={data?.type ?? userDetails?.type}
            number={tempGetPfp(data?.email ?? userDetails?.email)}
          />
          <div
            className="buttons"
            style={{ position: "sticky", marginTop: "10px" }}
          >
            <Button
              onClick={() =>
                navigate("/profile/bookings", { state: { userDetails } })
              }
              variant="outlined"
            >
              BOOKINGS
            </Button>
            <Button variant="contained">JOINED EVENTS</Button>
          </div>
          <div
            className="joined-events"
            style={{
              backgroundColor: "black",
              borderRadius: "5px",
              marginTop: "10px",
            }}
          >
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
                  <th style={{ width: "15%" }}>EVENT NAME</th>
                  <th style={{ width: "10%" }}>DATE</th>
                  <th style={{ width: "10%" }}>HOST</th>
                  <th style={{ width: "10%" }}>TIME</th>
                  <th style={{ width: "10%" }}>ROLE</th>
                  <th style={{ width: "10%" }}>Cancel</th>
                </tr>
              </thead>
              <tbody>
                {userDetails.EventParticipants.length === 0 ? (
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
                        No events joined yet.
                      </p>
                    </td>
                  </tr>
                ) : (
                  userDetails.EventParticipants.map((eventDetails) => (
                    <tr key={eventDetails?.event_id}>
                      <td>{eventDetails.event?.Name}</td>
                      <td>
                        {new Date(
                          eventDetails?.event?.StartingDate
                        ).toDateString()}
                      </td>
                      <td>{eventDetails?.event?.Host}</td>
                      <td>{eventDetails.event?.StartTime}</td>
                      <td>{eventDetails.UserType}</td>

                      <td>
                        <button
                          onClick={() => {
                            navigate("/unjoiningevent", {
                              state: {
                                event_id: eventDetails?.event_id,
                                name: eventDetails.event?.Name,
                                startDate: eventDetails?.event?.StartingDate,
                                host: eventDetails?.event?.Host,
                                startTime: eventDetails.event?.StartTime,
                                userType: eventDetails.UserType,
                                user: user
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

export default ProfilePage;
