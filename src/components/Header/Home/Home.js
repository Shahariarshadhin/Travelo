// import React, { useEffect, useState } from 'react';
import './Home.css'
import banner from '../../../images/banner.jpg'
// import Services from '../../Services/Services';
import ServiceProvide from '../../ServiceProvide/ServiceProvide';




const Home = () => {

    /*   const [services, setServices] = useState([]);
      useEffect(() => {
          fetch('services.json')
              .then(res => res.json())
              .then(data => setServices(data))
      }, []) */


    return (
        <div className='home'>

            <img src={banner} alt="" />

            <h1 className='service-title'>Our Services</h1>
            <ServiceProvide></ServiceProvide>


            {/*  <div className='info-container'>
                {
                    services.map(service => <Services
                        key={service.id}
                        service={service}
                    ></Services>)
                }
            </div> */}




        </div>
    );
};

export default Home;