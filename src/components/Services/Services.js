import React from 'react';
import './Services.css'

const Services = (props) => {

    const { name, img, price, description } = props.service;

    return (
        <div className='info'>

            <img src={img} alt="" />
            <p>Name : {name}</p>
            <p>{description}</p>
            <p>Price : {price}</p>

            <button className='get-btn' type="">Get Now</button>


        </div>
    );
};

export default Services;