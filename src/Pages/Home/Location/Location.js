import React from 'react';
import location from '../../../images/Location search-amico.png'
import './Location.css'


const Location = () => {
    return (
        <div>

            <h2 className='text-center text-3xl font-bold text-gray-500 my-12'>Visit Us Here</h2>
            <div id='location' className='location flex justify-center mt-10'>


                <div className='m-auto flex items-center justify-center'>
                    <img className='w-1/3 ' src={location} alt="" />
                    <div className='address text-center ml-5'>
                        <i className="fas fa-map-marker-alt mr-4 text-3xl text-yellow-400" />
                        <h1 className='text-3xl font-semibold text-green-400'>Swan Hill</h1>
                        <p>United States Of America</p>
                        <p className='text-xs'>Road No-187/23</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Location;