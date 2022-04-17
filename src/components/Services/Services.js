import React from 'react';
import { Link } from 'react-router-dom';
import './Services.css'

const Services = (props) => {

    const { name, img, price, description } = props.service;

    return (
        <div className='info'>

            <img src={img} alt="" />
            <p>Name : {name}</p>
            <p>{description}</p>
            <p>Price : {price}</p>

            {/* <button  className='get-btn' type="">Get Now</button> */}
            <Link className='get-btn' to="/checkout">Get Now</Link>


        </div>
    );
};

export default Services;