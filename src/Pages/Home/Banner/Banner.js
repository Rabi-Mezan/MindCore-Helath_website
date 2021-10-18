import React from 'react';
import './Banner.css'


const Banner = () => {
    return (
        <div className='banner '>
            <div className='w-3/4 banner-text'>
                <h1 className='text-4xl'>WE NEED TO TALK <br /> WE CARE
                    YOUR MENTAL HEALTH</h1>
                <p className='text-xs'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad reiciendis rerum recusandae minima debitis hic nulla tempora, saepe totam nihil.</p>
            </div>

            <div className='banner-menu'>
                <div className='banner-menu-item'>
                    <p className='flex items-center'><i className="fas fa-address-book mr-4"></i> Appointment</p>
                    <span> <i className="fas fa-angle-double-right"></i></span>
                </div>
                <div className='banner-menu-item'>
                    <p className='flex items-center'><i className="fas fa-user-md mr-4"></i>Find Doctors </p>
                    <span><i className="fas fa-angle-double-right"></i></span>
                </div>
                <div className='banner-menu-item'>
                    <p className='flex items-center'><i className="fas fa-map-marker-alt mr-4"></i>Find Location </p>
                    <span><i className="fas fa-angle-double-right"></i></span>
                </div>
            </div>
        </div>
    );
};

export default Banner;