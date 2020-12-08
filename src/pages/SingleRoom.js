import React, { Component } from 'react';
// import Hero from '../components/Hero';
import defaltImg from '../images/room-1.jpeg';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import { RoomContext } from '../Context';
import StyledHero from '../components/StyledHero';
class SingleRoom extends Component {
    constructor(props) {
        super(props);
        // console.log(this.props);
        this.state = {
            slug: this.props.match.params.slug,
            defaltImg,
        }
    }
    static contextType = RoomContext;
    render() {
        const { getRoom } = this.context;
        const room = getRoom(this.state.slug);
        console.log(room);
        if (!room) {
            return (
                <div className="error">
                    <h3>No such room could be found</h3>
                    <Link to="/rooms" className="btn-primary">Back to Rooms</Link>
                </div>
            );
        }
        const [mainImg,...defaultImg] = room.images;
        return (
            <>
                <StyledHero img={mainImg || this.state.defaltImg}>
                    <Banner title={`${room.name} room`}>
                        <Link to="/rooms" className="btn-primary">
                            Back to rooms
                        </Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {defaultImg.map((item,index) => {
                            return <img src={item} key={index} alt={room.name}/>
                        })}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>Details</h3>
                            <p>{room.description}</p>
                        </article>
                        <article className="info">
                            <h3>Info</h3>
                            <h6>Price: Rs.{room.price}</h6>
                            <h6>Size: {room.size} SQFT</h6>
                            <h6>Maximum Capacity: {" "} 
                            {room.capacity > 1 ? `${room.capacity} people` : 
                            `${room.capacity} person`
                            }
                            </h6>
                            <h6>
                                {room.pets ? "Pets are Allowed" : "No Pets are Allowed"}
                            </h6>
                            <h6>
                                {room.breakfast ? "Breakfast Available" : "No Breackfast Available"}
                            </h6>
                        </article>
                    </div>
                </section>
                <section className="room-extras">
                    <h6>Extras</h6>
                    <ul className="extras">
                        {room.extras.map((item,index) => {
                            return <li key={index}>- {item}</li>
                        })}
                    </ul>
                </section>
            </>
        );
    }
}

export default SingleRoom;