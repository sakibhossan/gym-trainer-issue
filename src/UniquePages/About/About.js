import React from 'react';
import sakib from '../../Images/Trainer/sakib.jpg';

const About = () => {
    return (
        <div>
            <img className='rounded mx-auto d-block' src={sakib} alt="" />
            <h2 className='text-center'>
                My target next 2 month i want to see me. <br />
                Anyone company job full stack developer.
            </h2>
        </div>
    );
};

export default About;