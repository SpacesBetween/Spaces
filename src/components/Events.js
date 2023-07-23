import React from "react";
import AvailableEvents from "./AvailableEvents.js";
import "./Events.css";

// have to change the src of image as well as the text, so that its kinda similar to the room page
// not sure why it isnt showing like three in one line??

function Events({ eventArr }) {
  // will return an arr of jsx syntax
  const eventArrJXS = [];

  function displayEvents() {
    if (eventArr.length === 0) {
      return;
    }
    for (let i = 0; i < eventArr.length; i += 3) {
      if (i + 3 > eventArr.length) {
        if (i + 3 - eventArr.length === 1) {
          eventArrJXS.push(
            <ul className="available__spots">
              <AvailableEvents
                src="images/event image.jpeg"
                text={eventArr[i].StartingDate}
                label={eventArr[i].Name}
                data={{
                  venue: eventArr[i].Venue,
                  time: eventArr[i].StartTime,
                  duration: eventArr[i].Duration,
                  date: new Date(eventArr[i].StartingDate).toLocaleDateString(),
                  description: eventArr[i].Description,
                  name: eventArr[i].Name,
                  host: eventArr[i].Host,
                  id: eventArr[i].id,
                }}
                path="/description"
              />
              <AvailableEvents
                src="images/event image.jpeg"
                text={eventArr[i + 1].StartingDate}
                label={eventArr[i + 1].Name}
                data={{
                  venue: eventArr[i + 1].Venue,
                  time: eventArr[i + 1].StartTime,
                  duration: eventArr[i + 1].Duration,
                  date: new Date(
                    eventArr[i + 1].StartingDate
                  ).toLocaleDateString(),
                  description: eventArr[i + 1].Description,
                  name: eventArr[i + 1].Name,
                  host: eventArr[i + 1].Host,
                  id: eventArr[i + 1].id,
                }}
                path="/description"
              />
            </ul>
          );
          break;
        }
        eventArrJXS.push(
          <ul className="available__spots">
            <AvailableEvents
              src="images/event image.jpeg"
              text={eventArr[i].StartingDate}
              label={eventArr[i].Name}
              data={{
                venue: eventArr[i].Venue,
                time: eventArr[i].StartTime,
                duration: eventArr[i].Duration,
                date: new Date(eventArr[i].StartingDate).toLocaleDateString(),
                description: eventArr[i].Description,
                name: eventArr[i].Name,
                host: eventArr[i].Host,
                id: eventArr[i].id,
              }}
              path="/description"
            />
          </ul>
        );
        break;
      }

      eventArrJXS.push(
        <ul className="available__spots">
          <AvailableEvents
            src="images/event image.jpeg"
            text={eventArr[i].StartingDate}
            label={eventArr[i].Name}
            data={{
              venue: eventArr[i].Venue,
              time: eventArr[i].StartTime,
              duration: eventArr[i].Duration,
              date: new Date(eventArr[i].StartingDate).toLocaleDateString(),
              description: eventArr[i].Description,
              name: eventArr[i].Name,
              host: eventArr[i].Host,
              id: eventArr[i].id,
            }}
            path="/description"
          />
          <AvailableEvents
            src="images/event image.jpeg"
            text={eventArr[i + 1].StartingDate}
            label={eventArr[i + 1].Name}
            data={{
              venue: eventArr[i + 1].Venue,
              time: eventArr[i + 1].StartTime,
              duration: eventArr[i + 1].Duration,
              date: new Date(eventArr[i + 1].StartingDate).toLocaleDateString(),
              description: eventArr[i + 1].Description,
              name: eventArr[i + 1].Name,
              host: eventArr[i + 1].Host,
              id: eventArr[i + 1].id,
            }}
            path="/description"
          />
          <AvailableEvents
            src="images/event image.jpeg"
            text={eventArr[i + 2].StartingDate}
            label={eventArr[i + 2].Name}
            data={{
              venue: eventArr[i + 2].Venue,
              time: eventArr[i + 2].StartTime,
              duration: eventArr[i + 2].Duration,
              date: new Date(eventArr[i + 2].StartingDate).toLocaleDateString(),
              description: eventArr[i + 2].Description,
              name: eventArr[i + 2].Name,
              host: eventArr[i + 2].Host,
              id: eventArr[i + 2].id,
            }}
            path="/description"
          />
        </ul>
      );
    }
  }

  displayEvents();

  return eventArr?.length > 0 ? (
    <div className="events">
      <div className="events__container">
        <div className="events__wrapper">{eventArrJXS.map((jsx) => jsx)}</div>
      </div>
    </div>
  ) : (
    <h1>No more events :(</h1>
  );
}

export default Events;
