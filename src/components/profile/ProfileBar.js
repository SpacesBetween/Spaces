import { Avatar } from "@mui/material";
import "./ProfileBar.css";

function ProfileBar({ userName, userEmail, userType, number }) {
  // list of images
  const pfp = [
    "images/angryCatpfp.jpg",
    "images/cuteCatpfp.jpg",
    "images/doneCatpfp.jpg",
    "images/pikachu.jpg",
    "images/pokemon.jpg",
    "images/sky.jpg",
    "images/sky2.jpg",
    "images/sky3.jpg",
    "images/food.jpg",
    "images/street.jpg",
    "images/highway.jpg",
  ];

  return (
    <>
      <div className="bar">
        <Avatar alt="pfp" src={pfp[number]} sx={{ width: "100px", height: "100px" }} />
        <ul className="particulars">
          <li className="details">{userName}</li>
          <li className="details">{userEmail}</li>
          <li className="details">{userType}</li>
        </ul>
      </div>
    </>
  );
}

export default ProfileBar;
