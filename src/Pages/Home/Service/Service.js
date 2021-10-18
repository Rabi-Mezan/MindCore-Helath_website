import React from 'react';
import './Service.css'

const Service = (props) => {
    const { id, name, img, description } = props.service
    return (
        <div className='service text-center'>
            <div className='px-5'>
                <img src={img} alt="" />
                <h1 className='text-xl text-bold text-yellow-500 mt-5'> {name}</h1>
                <p className='text-sm' >{description}</p>
            </div>
            <button className='bg-black w-2/3 text-white mt-5'>Details</button>
        </div>
    );
};

export default Service;