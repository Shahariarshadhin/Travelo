// import React, { useEffect, useState } from 'react';
import './Home.css'
import banner from '../../../images/banner.jpg'
// import Services from '../../Services/Services';
import ServiceProvide from '../../ServiceProvide/ServiceProvide';
import Footer from '../../Footer/Footer';




const Home = () => {




    return (
        <div className='home'>

            <img src={banner} alt="" />

            <h1 className='service-title'>My Services</h1>
            <ServiceProvide></ServiceProvide>

            <div className='extra-sec'>
                <h2>Why Choose Me?</h2>
                <div className='extra-info'>
                    <div style={{ marginRight: '35px' }}>
                        <h3>Efficient and Friendly Service</h3>
                        <p>I am trying to take thoughtful approach to planning your holiday. I try to find out what you think might make it extra special, then sprinkle in my own special little touches ( even a surprise to enjoy while you’re away) to help create your dream holiday.</p>
                    </div>
                    <div style={{ marginRight: '35px' }}>
                        <h3>My Prices Great Value for Money</h3>
                        <p>I am often to asked why my tours offer such great value for money compared to my competitors. The answer is simple. My prices take into account full itineraries, high quality accommodation and transport, plus logistical support from my offices worldwide.</p>
                    </div>
                    <div style={{ marginRight: '35px' }}>
                        <h3>Passionate, honest experts</h3>
                        <p>After a decade in business and a lifetime of living and travelling,I have developed a deep knowledge and formed relationships with the most impressive experts in fields. I am pride myself on being able to ask the right questions so that you can trust me get exactly what you’re after.</p>
                    </div>

                </div>
                {/* <div>
                    <iframe width="700" height="315" src="https://www.youtube.com/embed/1heeXKUAFyA" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" ></iframe>
                </div> */}
            </div>
            <Footer></Footer>







        </div>
    );
};

export default Home;