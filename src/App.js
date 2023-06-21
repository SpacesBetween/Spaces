import React from "react";
import Navbar from "./components/Navbar.js";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomePage from "./view/homepage/HomePage.js";
import RoomSearchPage from "./view/roomSearch/RoomSearchPage.js";
import homeVideo from "./assets/space-video.mp4";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route index path="/home" element={<HomePage />} />
          <Route path="/roomsearch" element={<RoomSearchPage />} />
        </Routes>
      </BrowserRouter>
      <video className="videoTag" autoPlay loop muted>
        <source src={homeVideo} type="video/mp4" />
      </video>
    </>
  );
}
