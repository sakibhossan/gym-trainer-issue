import React from 'react';
import './traning.css';

const Traning = ({ trainer }) => {
    const { name, img, description, price } = trainer;
    return (
        <div className='trainer-container'>
            <img className='w-100' src={img} alt="" />

          <div className='ps-5'>
          <h2>{name}</h2>
            <p>Price:{price}</p>
            <p><small>{description}</small></p>
            <button className='btn btn-dark text-align-center '>Book:{name}</button>
          </div>
        </div>

    );
};

export default Traning;