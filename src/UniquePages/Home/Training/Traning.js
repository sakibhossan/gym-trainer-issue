import React from 'react';
import './traning.css';

const Traning = ({ trainer }) => {
    const { name, img, description, price } = trainer;
    return (
        <div className='trainer-container'>
            <img className='w-100' src={img} alt="" />

          <div className='ps-5'>
          <h2>{name}</h2>
            <p>Monthly Price:{price}</p>
            <p><small>{description}</small></p>
            <button className='btn btn-dark text-align-center '>Add To Cart</button>
          </div>
        </div>

    );
};

export default Traning;