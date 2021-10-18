import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/mental-health.png'
import './Header.css'

const Header = () => {
    return (
        <>
            <header className="text-white body-font navbar" >
                <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                    <Link to='/home' className="flex title-font font-medium items-center text-white mb-4 md:mb-0" >
                        <img src={logo} className='w-10 h-10' alt="" />
                        <span className="ml-3 text-xl">MindCore</span>
                    </Link>
                    <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center">
                        <Link to='/home' className="mr-5 hover:text-gray-900">Home</Link>
                        <Link to='/home' className="mr-5 hover:text-gray-900">Services</Link>
                        <Link to='/home' className="mr-5 hover:text-gray-900">Doctors</Link>
                        <Link to='/home' className="mr-5 hover:text-gray-900">Contact</Link>
                    </nav>
                    <button className="inline-flex items-center text-yellow-500 bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Login
                        <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
                            <path d="M5 12h14M12 5l7 7-7 7"></path>
                        </svg>
                    </button>
                </div>
            </header >
        </>
    );
};

export default Header;