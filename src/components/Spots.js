import React from "react";
import AvailableSpots from "./AvailableSpots.js";
import "./Spots.css";

function Spots() {
  return (
    <div className="spots">
      <h1> Availale Spots for Booking</h1>
      <div className="spots__container">
        <div className="spots__wrapper">
          <ul className="available__spots">
            <AvailableSpots
              src="https://cdn.ifla.org/wp-content/uploads/files/assets/asia-and-oceania/news/nulcl1.jpg"
              text="Central Library"
              label="Libraries"
              path="/receipt"
            />
            <AvailableSpots
              src="images/img-2.jpg"
              text="Medicine+Science Library"
              label="Libraries"
              path="https://nus.edu.sg/nuslibraries/images/default-source/library-details/nus-libraries/medicine-science-library/mslv1.jpg?sfvrsn=c37aca84_3"
            />
          </ul>
          <ul className="available__spots">
            <AvailableSpots
              src="images/img-9.jpg"
              text="COM1"
              label="Study Corner"
              path="https://static.wixstatic.com/media/20f267_0b327422f1864037be9d747e766bc2ab~mv2.jpg/v1/fill/w_640,h_360,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/computing_places-1-505521.jpg"
            />
            <AvailableSpots
              src="images/img-2.jpg"
              text="Music Library"
              label="Libraries"
              path="https://nus.edu.sg/nuslibraries/images/default-source/library-details/music-library/img_4438.jpg?sfvrsn=b6fea632_3"
            />
            <AvailableSpots
              src="images/area-outside-starbucks.jpg"
              text="Area Outside Starbucks(UTown)"
              label="Study Corner"
              path="https://static.wixstatic.com/media/36a8ec_8f482f9be1eb4fd9a0280711c1b8ec74~mv2.jpg/v1/fill/w_640,h_480,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/36a8ec_8f482f9be1eb4fd9a0280711c1b8ec74~mv2.jpg"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Spots;
