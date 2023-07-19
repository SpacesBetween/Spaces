import React from "react";
import AvailableEvents from "./AvailableEvents.js";
import "./Events.css";

// have to change the src of image as well as the text, so that its kinda similar to the room page
// not sure why it isnt showing like three in one line??

function Events() {
  return (
    <div className='events'>
      <div className='events__container'>
        <div className='events__wrapper'>
          <ul className='events__items'>
            <AvailableEvents
              src='images/event image.jpeg'
              text=''
              label=''
              path='/description'
            />
            <AvailableEvents
              src='images/event image.jpeg'
              text=''
              label=''
              path='/description'
            />
            <AvailableEvents
              src='images/event image.jpeg'
              text=''
              label=''
              path='/description'
            />
          </ul>
          <ul className='events__items'>
            <AvailableEvents
              src='images/event image.jpeg'
              text=''
              label=''
              path='/description'
            />
            <AvailableEvents
              src='images/event image.jpeg'
              text=''
              label=''
              path='/description'
            />
            <AvailableEvents
              src='images/event image.jpeg'
              text=''
              label=''
              path='/description'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Events;