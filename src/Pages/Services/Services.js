import React from 'react';
import { useEffect, useState } from 'react/cjs/react.development';
import Service from '../Home/Service/Service';

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
            <div>
                <input type="text" />
            </div>
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