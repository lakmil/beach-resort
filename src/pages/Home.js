import React from 'react';
import Hero from '../components/Hero';
import Banner from '../components/Banner';
import { Link } from 'react-router-dom';
import Services from '../components/Services';
import FeaturedRooms from '../components/FeaturedRooms';
// import Button from '../components/StyledHero';

const Home = () => {
    return(
        <>
        <Hero>
            <Banner title="Luxurious Homes" subtitle="Duluxe Rooms From Rs.3000/-">
                <Link to="/Rooms" className="btn-primary">Our Rooms</Link>
            </Banner>
        </Hero>
        <Services />
        <FeaturedRooms />
        </>
    );
}

export default Home;