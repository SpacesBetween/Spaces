import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./NavButton.js";
import { signOut } from "../model/auth/auth.js";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);

  // functions
  const logOff = () => {
    signOut();
  };

  const handleClick = () => setClick(!click);

  const closeMobileMenu = () => setClick(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
          <Button>SPACES</Button>
        </div>
        <div className="navbar-container">
          <div className="menu-icon" onClick={handleClick}>
            <i className={click ? "fas fa-times" : "fas fa-bars"} />
          </div>
          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <Link to="home" className="nav-links" onClick={closeMobileMenu}>
                HOME
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="roomsearch"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                BOOKINGS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="eventsearch"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                EVENTS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="#"
                className="under-construction"
                onClick={closeMobileMenu}
              >
                ANNOUNCEMENTS
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to="/profile"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                PROFILE
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/">
                <button className="signoutButton" onClick={logOff} href="/">
                  SIGN OUT
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
