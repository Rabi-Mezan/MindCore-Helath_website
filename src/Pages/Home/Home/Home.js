import React from 'react';
import Banner from '../Banner/Banner';
import Location from '../Location/Location';
import OurClients from '../OurClients/OurClients';
import OurServices from '../OurServices/OurServices';


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurServices></OurServices>
            <OurClients></OurClients>
            <Location></Location>
        </div>
    );
};

export default Home;