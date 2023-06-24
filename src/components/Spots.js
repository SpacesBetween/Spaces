import React from 'react'
import AvailableSpots from './AvailableSpots';
import './Spots.css';

function Spots() {
  return (
    <div className='spots'>
        <h1> Availale Spots for Booking</h1>
        <div className='spots__container'>
            <div className='spots__wrapper'>
                <ul className='available__spots'>
                    <AvailableSpots 
                    src="images/central-library.jpg"
                    text="Central Library"
                    label='Libraries'
                    path='/'
                    />
                    <AvailableSpots 
                    src="images/science-library.jpg"
                    text="Science Library"
                    label='Libraries'
                    path='/'
                    />
                     <AvailableSpots 
                    src="images/img-2.jpg"
                    text="Medical Library"
                    label='Libraries'
                    path='/'
                    />
                </ul>
                <ul className='available__spots'>
                    <AvailableSpots 
                    src="images/img-9.jpg"
                    text="COM1"
                    label='Study Corner'
                    path='/'
                    />
                    <AvailableSpots 
                    src="images/img-2.jpg"
                    text="Music Library"
                    label='Libraries'
                    path='/'
                    />
                     <AvailableSpots 
                    src="images/area-outside-starbucks.jpg"
                    text="Area Outside Starbucks(UTown)"
                    label='Study Corner'
                    path='/'
                    />
                </ul>
            </div>
        </div>
    </div>
  );
}

export default Spots;