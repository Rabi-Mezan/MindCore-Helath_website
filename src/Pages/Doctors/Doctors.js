import React from 'react';
import doc1 from '../../images/humberto-chavez-FVh_yqLR9eA-unsplash.jpg'
import doc2 from '../../images/sammy-williams-38Un6Oi5beE-unsplash.jpg'
import doc3 from '../../images/usman-yousaf-pTrhfmj2jDA-unsplash.jpg'
import './Doctors.css'

const Doctors = () => {
    return (
        <div className='doctor-page'>
            <h1 className='lg:text-3xl text-center font-bold text-gray-500 mt-12 mb-10'>Our Specialist Doctors</h1>

            <div className='doctors'>
                <div className='mb-10'>
                    <img src={doc1} alt="" />
                    <h1 className='text-lg mt-2 font-bold'>Doct William</h1>
                    <p>Meditation Specialist</p>
                </div>
                <div className='mb-10'>
                    <img src={doc2} alt="" />
                    <h1 className='text-lg mt-2 font-bold'>Sammy Williams</h1>
                    <p>Mental Health Specialist</p>
                </div>
                <div className='mb-10'>
                    <img src={doc3} alt="" />
                    <h1 className='text-lg mt-2 font-bold'>Usman Yousaf</h1>
                    <p>Neuorology Specialist</p>
                </div>
            </div>
        </div>
    );
};

export default Doctors;