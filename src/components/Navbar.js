import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "./NavButton.js";
import "./Navbar.css";

function Navbar() {
  const [click, setClick] = useState(false);
  // const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  // const showButton = () => {
  //   if(window.innerWidth <= 960) {
  //     setButton(false);
  //   } else {
  //     setButton(true);
  //   }
  // }

  // window.addEventListener('resize', showButton);

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
              <Link to="roomsearch" className="nav-links" onClick={closeMobileMenu}>
                ROOM
              </Link>
            </li>
            <li className="nav-item">
              <Link to="eventsearch" className="nav-links" onClick={closeMobileMenu}>
                EVENT
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="under-construction" onClick={closeMobileMenu}>
                CAPACITY
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="under-construction" onClick={closeMobileMenu}>
                ANNOUNCEMENTS
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="under-construction" onClick={closeMobileMenu}>
                FAVOURITE
              </Link>
            </li>
          </ul>

        </div>
      </nav>
    </>
  );
}

export default Navbar;
