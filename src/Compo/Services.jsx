import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import ServicesDisplay from './ServicesDisplay';

const Services = () => {
    const [Services, setServices] = useState([])
    
    useEffect(()=>{
        fetch('https://y-indol-eta.vercel.app/services')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
    return (
        <div>

            <div className='grid grid-cols-2 gap-5'>
            {
                Services.map(d => <ServicesDisplay key={d._id} data={d}></ServicesDisplay>)
            }
            </div>
        </div>
    );
};

export default Services;