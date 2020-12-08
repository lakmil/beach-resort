import React from 'react';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import {withRoomConsumer} from '../Context';

const RoomContainer = ({ context }) => {
    const {loading, sortedRooms, rooms} = context;
    if(loading) {
        return <p>Loading...</p>;
    }
    return (
        <div>
            <RoomFilter rooms = {rooms} />
            <RoomList rooms = {sortedRooms} />
        </div>
    );
}

export default withRoomConsumer(RoomContainer);
// import React from 'react';
// import RoomFilter from './RoomFilter';
// import RoomList from './RoomList';
// import {RoomConsumer} from '../Context';

// const RoomContainer = () => {
//     return (
//         <RoomConsumer>
//             {
//                 value => {
//                     console.log(value);
//                     const { loading, sortedRooms, rooms } = value;
//                     if(loading){
//                         return <p>Loading</p>;
//                     }
//                     return (
//                         <div>
//                             <h1 className="empty-search">Search</h1>
//                             <RoomFilter />
//                             <RoomList />
//                         </div>
//                     );
//                 }
//             }
           
//         </RoomConsumer>
//     );
// }

// export default RoomContainer;