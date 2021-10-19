import React from 'react';
import './Contact.css'
import contact from '../../images/Contact us-cuate.png'

const Contact = () => {
    return (
        <div>

            <h2 className='text-center lg:text-3xl font-bold text-gray-500 my-12'>Contact With Us For Your Mental Peace</h2>
            <div id='location' className='location flex justify-center mt-10'>


                <div className='m-auto flex items-center justify-center'>
                    <img className='w-1/3 ' src={contact} alt="" />
                    <div className='address text-center ml-5'>
                        <h1 className='text-center text-3xl font-bold text-gray-500 '>Follow Us</h1>
                        <hr />
                        <div className='mt-5 text-2xl flex justify-center items-center'>
                            <i className="fab fa-facebook mr-3"></i>
                            <i className="fab fa-instagram mr-3"></i>
                            <i className="fab fa-youtube mr-3"></i>
                        </div>
                    </div>
                </div>

            </div>
        </div>

    );
};

export default Contact;

<div className='m-auto text-2xl flex items-center'>
    <i className="fab fa-facebook mr-3"></i>
    <i className="fab fa-instagram mr-3"></i>
    <i className="fab fa-youtube mr-3"></i>
</div>