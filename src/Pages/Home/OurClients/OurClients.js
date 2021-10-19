import React from 'react';
import doc1 from '../../../images/humberto-chavez-FVh_yqLR9eA-unsplash.jpg'
import doc2 from '../../../images/sammy-williams-38Un6Oi5beE-unsplash.jpg'
import doc3 from '../../../images/usman-yousaf-pTrhfmj2jDA-unsplash.jpg'
import './OurClinets.css'

const OurClients = () => {
    return (
        <div id='clients' className='doctor-page'>
            <h1 className='lg:text-3xl text-center font-bold text-gray-500 mt-12 mb-10'>Our Happy Clients</h1>

            <div className='doctors'>
                <div className='mb-10'>
                    <img className='' src='https://th.bing.com/th/id/R.ba7d392610c13635308b6662d8e9e2fb?rik=1o6FcY%2b1%2bbimiw&riu=http%3a%2f%2fofad.org%2ffiles%2fdaily-photo%2frecent-and-random-portraits_8.jpg&ehk=pKCqkBnDMOxgOR0A5m5xerXH5cO0U8kkkMa%2btwUL9Dk%3d&risl=&pid=ImgRaw&r=0' alt="" />
                    <h1 className='text-lg mt-2 font-bold'>Mr Mash</h1>
                    <p>Juornalist <span className='text-xs'>
                        <i className="fas fa-home m-2"></i>Briseban</span></p>

                </div>
                <div className='mb-10'>
                    <img src='https://th.bing.com/th/id/OIP.DvLdQ_xVM1x0uvOkeTnWqQHaFS?pid=ImgDet&w=960&h=686&rs=1' alt="" />
                    <h1 className='text-lg mt-2 font-bold'>Usman Yousaf</h1>
                    <p>Sportsman<span className='text-xs'>
                        <i className="fas fa-home m-2"></i>Sydney</span></p>
                </div>
                <div className='mb-10'>
                    <img src='https://th.bing.com/th/id/OIP.ZPYAVl-kmuk1MOhaV-Z91AHaE8?pid=ImgDet&w=1600&h=1068&rs=1' alt="" />
                    <h1 className='text-lg mt-2 font-bold'>Mrs Williams</h1>
                    <p>Businessman<span className='text-xs'> <i className="fas fa-home m-2"></i>London</span></p>
                </div>
            </div>
        </div>
    )
};

export default OurClients;