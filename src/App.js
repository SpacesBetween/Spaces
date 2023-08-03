import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./view/homepage/HomePage.js";
import BookingRecords from "./view/roomSearch/BookingRecords.js";
import homeVideo from "./assets/space-video.mp4";
import LoginScreen from "./view/authentication/LoginScreen.js";
import SignUp from "./view/authentication/SignUp.js";
import BookingPage from "./view/roomSearch/BookingPage.js";
import StudySpotPage from "./view/roomSearch/StudySpotPage.js";
import RoomPage from "./view/roomSearch/RoomPage.js";
import CancelSuccess from "./view/roomSearch/CancellationSuccessfulPage.js";
import Spots from "./view/roomSearch/AvailableSpotsPage.js";
import Receipt from "./view/roomSearch/ReceiptPage.js";
import BookingSuccessfulPage from "./view/roomSearch/BookingSuccessfulPage.js";
import PasswordReset from "./view/authentication/PasswordReset.js";
import CancellationPage from "./view/roomSearch/CancellationPage.js";
import PasswordResetForm from "./view/authentication/PasswordResetForm.js";
import { supabase } from "./configuration/supabaseClient.js";
import AvailableEventPage from "./view/eventSearch/AvailableEventPage.js";
import DescriptionPage from "./view/eventSearch/DescriptionPage.js";
import BookingSuccess from "./view/eventSearch/BookingSuccess.js";
import ProfilePage from "./view/profile/ProfilePage.js";
import ProfilePageBooking from "./view/profile/ProfilePageBooking.js";
import UnjoinEventPage from "./view/eventSearch/UnjoinEventPage.js";

export default function App() {
  // useState and useEffect to check if a user is logged in
  const [session, setSession] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });
    setUser(supabase.auth.getUser());

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      // if (event === "PASSWORD_RECOVERY") {
      //   navigate("/passwordform")
      // } (test what does the link do first)

      console.log(`Supbase auth event: ${event}`);
      setSession(session);
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, []);

  return session ? (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route index path="/home" element={<HomePage />} />
          <Route path="/roomsearch" element={<BookingRecords user={user} />} />
          <Route path="/newbooking" element={<BookingPage />} />
          <Route path="/roombooking" element={<RoomPage />} />
          <Route path="/studyspotbooking" element={<StudySpotPage />} />
          <Route path="/cancelsuccess" element={<CancelSuccess />} />
          <Route path="/spotssearchpage" element={<Spots />} />
          <Route path="/receipt" element={<Receipt user={user}/>} />
          <Route path="/booksuccess" element={<BookingSuccessfulPage />} />
          <Route path="/cancelpage" element={<CancellationPage />} />
          <Route path="/eventsearch" element={<AvailableEventPage />} />
          <Route path="/description" element={<DescriptionPage user={user}/>} />
          <Route path="/eventbook" element={<BookingSuccess />} />
          <Route path="/profile" element={<ProfilePage user={user}/>}/>
          <Route path="/profile/bookings" element={<ProfilePageBooking user={user}/>}/>
          <Route path="/unjoiningevent" element={<UnjoinEventPage/>}/>
        </Routes>
      </BrowserRouter>
      <video className="videoTag" autoPlay muted>
        <source src={homeVideo} type="video/mp4" />
      </video>
    </>
  ) : (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginScreen />} />
          <Route index path="/login" element={<LoginScreen />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/passwordreset" element={<PasswordReset />} />
          <Route path="/passwordform" element={<PasswordResetForm />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
