import React from 'react';
import './Footer.css'
import logo from '../../../images/mental-health.png'

const Footer = () => {
    return (
        <div className='bg-gray-600 mt-20 footer'>
            <div className='p-11 flex flex-row'>
                <img className='w-12 pt-5 block' src={logo} alt="" />
                <h1 className=' text-xl text-bold text-green-100'>  MindCore</h1>
            </div>
            <div>
                <li>About</li>
                <li>Services</li>
                <li>Contact</li>
                <li>Licence</li>
                <li>Terms & policy</li>
            </div>
            <div className='follow-us'>
                <h1>Follow Us</h1>
                <hr />
                <div className='social-icon mt-2 flex items-center justify-between '>
                    <p className='flex text-xs items-center'>  <i className="fab fa-facebook mr-2"></i>Facebook</p>
                    <p className='flex text-xs items-center'> <i className="fab fa-instagram mr-2"></i>Instagram</p>
                    <p className='flex text-xs items-center'> <i className="fab fa-youtube mr-2"></i>Youtube</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;