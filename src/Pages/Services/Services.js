import React from 'react';
import { useEffect, useState } from 'react';
import Service from '../Home/Service/Service';
import './Service.css'

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <h1 className='lg:text-3xl text-center font-bold text-gray-500 mt-12'>Find All Our Services Here</h1>
            <div className='search m-4'>
                <input className='border-2 border-gray-200 rounded mr-2 w-1/2' type="text" />
                <button className='text-yellow-500 bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base'>Search</button>
            </div>

            {/* data pass to service components */}
            <div className='services lg:m-10 md:p-10'>
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

export default Services;