import React from 'react';
import defaultImg from '../images/room-1.jpeg';
import {Link} from 'react-router-dom';
import propTypes from 'prop-types';
const Room = ({room}) => {
    const {name,slug,images,price}=room;
    return (
        <article className="room">
            <div className="img-container">
            <img src={images[0] || defaultImg} alt="Single Room" />
            <div className="price-top">
                <h6>Rs.{price}</h6>
                <p>Per night</p>
            </div>
            <Link to={`/Rooms/${slug}`} className="btn-primary room-link">Features</Link>
            <p className="room-info">{name}</p>
            </div>
        </article>
    );
} 

export default Room;

Room.propTypes = {
    room:propTypes.shape({
        name:propTypes.string.isRequired,
        slug:propTypes.string.isRequired,
        images:propTypes.arrayOf(propTypes.string).isRequired,
        price:propTypes.number.isRequired,
    })
}