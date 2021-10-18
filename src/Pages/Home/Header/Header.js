import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../../images/mental-health.png'
import { HashLink } from 'react-router-hash-link';
import './Header.css'
import useFirebase from '../../../hooks/useFirebase';

const Header = () => {
    const { user, logOut } = useFirebase()

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
                        <Link to='/services' className="mr-5 hover:text-gray-900">Services</Link>
                        <Link to='/home' className="mr-5 hover:text-gray-900">Doctors</Link>
                        <Link to='/home' className="mr-5 hover:text-gray-900">Contact</Link>
                    </nav>
                    {
                        user.email ?
                            <div className='flex items-center'>
                                <p>{user.displayName}</p>
                                <button onClick={logOut} className="inline-flex items-center text-yellow-500 bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base ml-2 mt-4 md:mt-0">
                                    Logout
                                </button>
                            </div>
                            :
                            <Link to='/login'>
                                <div className='sm:flex flex-row '>
                                    <button className="inline-flex items-center text-yellow-500 bg-gray-100 border-0 py-1 mr-2 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Sign up
                                    </button>
                                    <button className="inline-flex items-center text-yellow-500 bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">Login
                                    </button>
                                </div>
                            </Link>
                    }
                </div>
            </header >
        </>
    );
};

export default Header;