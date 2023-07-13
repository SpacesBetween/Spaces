import React from "react";
import AvailableSpots from "./AvailableSpots.js";
import FullyBooked from "../view/roomSearch/FullyBookedPage.js";
import "./Spots.css";
import { roomSearchStudy } from "../model/room/roomFunc.js";

function Spots({ date, time, duration, location, type }) {
  // array of free rooms
  let roomArray = [["COM3-01-20", "Room"]];
  // find free room
  async function resolving() {
    await roomSearchStudy({
      location: location,
      date: date,
      time: time,
      durationRaw: duration,
    })
      .catch((err) => alert(err))
      .then((arr) => {
        roomArray = arr;
      });
  }
  resolving().then();

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
                src="images/central-library.jpeg"
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
                src="images/science-library.jpeg"
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
              src="images/Classroom.jpeg"
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
            src="images/Classroom.jpeg"
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
            src="images/musicLib.jpg"
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
            src="images/area-outside-starbucks.jpeg"
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
