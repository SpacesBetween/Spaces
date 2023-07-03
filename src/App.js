import React, { useEffect, useState } from "react";
import Navbar from "./components/Navbar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./view/homepage/HomePage.js";
import RoomPage from "./view/roomSearch/RoomPage.js";
import homeVideo from "./assets/space-video.mp4";
import LoginScreen from "./view/authentication/LoginScreen.js";
import SignUp from "./view/authentication/SignUp.js";
import { supabase } from "./configuration/supabaseClient.js";

export default function App() {
  // useState and useEffect to check if a user is logged in
  const [session, setSession] = useState(null);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
    });

    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
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
          <Route path="/roomsearch" element={<RoomPage />} />
        </Routes>
      </BrowserRouter>
      <video className="videoTag" autoPlay loop muted>
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
        </Routes>
      </BrowserRouter>
    </>
  );
}
