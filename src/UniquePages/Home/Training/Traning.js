import React from 'react';
import  './traning.css';

const Traning = ({trainer}) => {
    const {name, img, description, price} = trainer
    return (
        <div className='trainer-container'>
             <img src={img} alt="" />
            <h2>{name}</h2>
            <p>Price:{price}</p>
            <p><small>{description}</small></p>
            <button>Book:{name}</button>
        </div>
    );
};

export default Traning;