import React from "react";
import AvailableSpots from "./AvailableSpots.js";
import FullyBooked from "../view/roomSearch/FullyBookedPage.js";
import "./Spots.css";

function Spots({ roomArray, time, duration, date, type }) {
  // will return an arr of jsx syntax
  const spotsArr = [];

  function foundSpots() {
    if (roomArray.length === 0) {
      return;
    }
    for (let i = 0; i < roomArray.length; i += 3) {
      if (i + 3 > roomArray.length) {
        if (i + 3 - roomArray.length === 1) {
          spotsArr.push(
            <ul className="available__spots">
              <AvailableSpots
                src={`images/${roomArray[i][1]}.jpg`}
                text={roomArray[i][0]}
                label={roomArray[i][1]}
                data={{
                  venueName: roomArray[i][0],
                  time: time,
                  duration: duration,
                  date: date,
                  type: type,
                }}
                path="/receipt"
              />
              <AvailableSpots
                src={`images/${roomArray[i + 1][1]}.jpg`}
                text={roomArray[i + 1][0]}
                label={roomArray[i + 1][1]}
                data={{
                  venueName: roomArray[i + 1][0],
                  time: time,
                  duration: duration,
                  date: date,
                  type: type,
                }}
                path="/receipt"
              />
            </ul>
          );
          break;
        }
        spotsArr.push(
          <ul className="available__spots">
            <AvailableSpots
              src={`images/${roomArray[i][1]}.jpg`}
              text={roomArray[i][0]}
              label={roomArray[i][1]}
              data={{
                venueName: roomArray[i][0],
                time: time,
                duration: duration,
                date: date,
                type: type,
              }}
              path="/receipt"
            />
          </ul>
        );
        break;
      }

      spotsArr.push(
        <ul className="available__spots">
          <AvailableSpots
            src={`images/${roomArray[i][1]}.jpg`}
            text={roomArray[i][0]}
            label={roomArray[i][1]}
            data={{
              venueName: roomArray[i][0],
              time: time,
              duration: duration,
              date: date,
              type: type,
            }}
            path="/receipt"
          />
          <AvailableSpots
            src={`images/${roomArray[i + 1][1]}.jpg`}
            text={roomArray[i + 1][0]}
            label={roomArray[i + 1][1]}
            data={{
              venueName: roomArray[i + 1][0],
              time: time,
              duration: duration,
              date: date,
              type: type,
            }}
            path="/receipt"
          />
          <AvailableSpots
            src={`images/${roomArray[i + 2][1]}.jpg`}
            text={roomArray[i + 2][0]}
            label={roomArray[i + 2][1]}
            data={{
              venueName: roomArray[i + 2][0],
              time: time,
              duration: duration,
              date: date,
              type: type,
            }}
            path="/receipt"
          />
        </ul>
      );
    }
  }

  foundSpots();

  return roomArray.length === 0 ? (
    <FullyBooked />
  ) : (
    <div className="spots">
      <div className="spots__container">
        <div className="spots__wrapper">{spotsArr.map((jsx) => jsx)}</div>
      </div>
    </div>
  );
}

export default Spots;
