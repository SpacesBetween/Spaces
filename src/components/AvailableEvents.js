import React from 'react';
import { Link } from "react-router-dom";

function AvailableEvents(props) {
    return (
        <>
        <li className="available__events">
            <Link className="available__events__link" to={props.path} state={props.data}>
                <figure className="available__events__pic-wrap" data-category={props.label}>
                    <img 
                    src={props.src}
                    alt='Events Image'
                    className='available__events__img'
                    />
                </figure>
                <div className='available__events__info'>
                    <h5 className='available_events_text'>{props.text}</h5>
                </div>
            </Link>
        </li>
        </>
    )
}

export default AvailableEvents