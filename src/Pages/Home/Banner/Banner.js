import React from 'react';
import './Banner.css'
import { HashLink } from 'react-router-hash-link';


const Banner = () => {
    return (
        <div className='banner '>
            <div className='w-3/4 banner-text'>
                <h1 className='lg:text-5xl text-3xl mb-2 text-white font-black'>WE NEED TO TALK BECAUSE<br /> WE CARE
                    YOUR MENTAL HEALTH</h1>
                <p className='text-xs'>Together, we can realize our shared vision of a nation where anyone affected by mental illness can get the appropriate support and quality of care to live healthy, fulfilling lives — a nation where no one feels alone in their struggle..</p>
            </div>

            <div className='banner-menu '>
                <HashLink smooth to='#services'>
                    <div className='banner-menu-item'>
                        <p className='flex items-center'><i className="fas fa-address-book mr-4"></i>Our Services</p>
                        <span> <i className="fas fa-angle-double-right"></i></span>
                    </div>
                </HashLink>
                <HashLink smooth to='#clients'>
                    <div className='banner-menu-item'>
                        <p className='flex items-center'><i className="fas fa-user mr-4"></i>Happy Clients</p>
                        <span><i className="fas fa-angle-double-right"></i></span>
                    </div>
                </HashLink>
                <HashLink smooth to='#location'>
                    <div className='banner-menu-item'>
                        <p className='flex items-center'><i className="fas fa-map-marker-alt mr-4 "></i>Find Location </p>
                        <span><i className="fas fa-angle-double-right"></i></span>
                    </div>
                </HashLink>
            </div >
        </div >
    );
};

export default Banner;