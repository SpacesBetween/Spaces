import React from "react";
import ReactDOM from "react-dom/client";
import homeVideo from "./assets/space-video.mp4";
import "./index.css";
import App from "./App.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    <video className="videoTag" autoPlay loop muted>
      <source src={homeVideo} type="video/mp4" />
    </video>
  </React.StrictMode>
);
