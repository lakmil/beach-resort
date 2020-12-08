import React , { Component } from 'react';
import {RoomContext} from '../Context';
import Title from '../components/Title';
import Room from '../components/Room';

class FeaturedRooms extends Component {
    static contextType = RoomContext;
    render(){
        let {loading,featuredRooms: rooms} = this.context;
        // console.log(rooms);
        rooms = rooms.map(room => {
            return <Room key={room.id} room={room}/>
        })
        return (
        <section className="featured-rooms">
            <Title title="Featured Rooms" />
            <div className="featured-rooms-center">
                {loading?"Loading":rooms}
            </div>
        </section>
        );
    }
}

export default FeaturedRooms;