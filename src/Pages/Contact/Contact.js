import React from 'react';
import './Contact.css'
import contact from '../../images/Contact us-cuate.png'

const Contact = () => {
    return (
        <div className='contact'>

            <h1 className='text-3xl font-bold text-gray-500 text-center m-12'>Contact Us </h1>
            <img className='w-2/3 m-auto' src={contact} alt="" />

        </div>
    );
};

export default Contact;