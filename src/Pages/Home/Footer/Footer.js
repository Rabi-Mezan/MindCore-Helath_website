import React from 'react';
import './Footer.css'
import logo from '../../../images/mental-health.png'

const Footer = () => {
    return (
        <div className='bg-gray-600 mt-20'>
            <img className='w-20 m-auto pt-5' src={logo} alt="" />
            <h1 className='text-center text-2xl text-bold text-green-100'>MindCore</h1>
        </div>
    );
};

export default Footer;