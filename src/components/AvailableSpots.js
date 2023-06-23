import React from 'react';
import { Link } from "react-router-dom";

function AvailableSpots(props) {
    return (
        <>
        <li className="available__spots">
            <Link className="available__spots__link" to={props.path}>
                <figure className="available__spots__pic-wrap" data-category={props.label}>
                    <img 
                    src={props.src}
                    alt='Study Spots Image'
                    className='available__spots__img'
                    />
                </figure>
                <div className='available__spots__info'>
                    <h5 className='available_spots_text'>{props.text}</h5>
                </div>
            </Link>
        </li>
        </>
    )
}

export default AvailableSpots