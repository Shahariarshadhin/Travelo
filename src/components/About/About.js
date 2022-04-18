import React from 'react';
import './About.css'
import aboutPic from '../../images/about-me.jpg'

const About = () => {
    return (
        <div className='about'>
            <div className='about-info'>
                <div>
                    <img src={aboutPic} alt="" />
                </div>
                <div>
                    <h2>Shahariar Hasan Shadhin</h2>
                </div>
                <div>
                    <h4>Assalamualaikum Everyone</h4>
                </div>
                <div>
                    <p>Recently I completed my Bsc study at Daffodil International University.I am a fresher now.Now I am trying to develop my skills in javascript, react, and node js and I also have knowledge and skills in python. In a few years, I want to see myself as a well-made web developer and try to follow my dreams. As a fresher, I want to work as a junior web developer in a few months if I am able to do so with my skills and hard work.</p>
                </div>
            </div>
        </div>
    );
};

export default About;