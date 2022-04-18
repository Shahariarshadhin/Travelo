import React, { useState } from 'react';
import SocialLogin from '../SocialLogin/SocialLogin';
import './Checkout.css'

const CheckOut = () => {

    const [email, setEmail] = useState('');




    const handleEmailBlur = event => {
        setEmail(event.target.value);
    }




    return (
        <div>
            <div className='form-container'>
                <div>
                    <h2 className='form-title'>Checkout Form</h2>
                    <form >
                        <div className="input-group">

                            <input onBlur={handleEmailBlur} placeholder="Enter name" type="email" name="email" required />
                        </div>
                        <div className="input-group">

                            <input onBlur={handleEmailBlur} placeholder="Enter email" type="email" name="email" required />
                        </div>
                        <div className="input-group">

                            <input onBlur={handleEmailBlur} placeholder="Address" type="email" name="email" required />
                        </div>
                        <div className="input-group">

                            <input onBlur={handleEmailBlur} placeholder="Phone Number" type="email" name="email" required />
                        </div>

                        <button className='submit-btn' type="">Submit</button>


                    </form>



                    <SocialLogin></SocialLogin>



                </div>
            </div>
        </div>
    );
};

export default CheckOut;