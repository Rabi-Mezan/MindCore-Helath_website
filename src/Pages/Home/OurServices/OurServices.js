import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './OurService.css'

const OurServices = () => {
    const [services, setServices] = useState([])

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div className='our-service mt-20' id='services'>
            <div className='p-12'>
                <h2 className='text-3xl font-bold text-gray-500'>Our Services</h2>
                <p className='text-sm text-justify mt-2'>If you think that you or someone you know has a mental health problem, there are a number of ways that you can seek advice, information and referral for general and mental health issues in MindCore</p>
            </div>
            <div className='services'>
                {
                    services.map(service => <Service
                        key={service.id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>

    );
};

export default OurServices;