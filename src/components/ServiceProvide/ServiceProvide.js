import React from 'react';
import { useEffect, useState } from 'react';
import Services from '../Services/Services';

const ServiceProvide = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        fetch('services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])
    return (
        <div>
            <div className='info-container'>
                {
                    services.map(service => <Services
                        key={service.id}
                        service={service}
                    ></Services>)
                }
            </div>
        </div>
    );
};

export default ServiceProvide;