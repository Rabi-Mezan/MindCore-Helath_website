import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import './ServiceDetails.css'

const ServiceDetails = () => {
    const { serviceId } = useParams()
    const [service, setService] = useState([])
    const [serviceDetails, setServiceDetails] = useState({})

    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, [])

    useEffect(() => {
        const mathcedId = service.find((s) => s?.id == serviceId)
        setServiceDetails(mathcedId)
        console.log(mathcedId)
    }, [service])
    return (
        <div className='details m-12 p-4'>
            <div className='flex items-center '>
                <img className='w-96 p-10 rounded-md' src={serviceDetails?.img} alt="" />
                <div>
                    <h1 className='text-3xl font-bold text-gray-500 mb-3'>{serviceDetails?.name}</h1>
                    {/* in the description section after accessing the description dynamicaly some extra text is added for looking better */}
                    <p className='text-sm'>{serviceDetails?.description} <br />
                        While mental health has long been regarded as less important than physical health and has been stigmatized, this is changing. It is being recognized as a crucial part of overall well-being. Good mental health care is also increasingly recognized as important for prevention, treatment, and management of mental health conditions. However, finding good mental health care can still be challenging because of lack of awareness, stigma, and other reasons.
                    </p>
                    <h3 className='text-2xl mt-4'>Price : <span className='font-bold text-yellow-500'>${serviceDetails?.price}</span></h3>

                </div>
            </div>

        </div>
    );
};

export default ServiceDetails;