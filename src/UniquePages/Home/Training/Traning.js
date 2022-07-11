import React from 'react';
import './traning.css';
import {useNavigate} from 'react-router-dom';

const Traning = ({ trainer }) => {
    const {id, name, img, description, price } = trainer;
    const navigate = useNavigate();
    const navigateToServiceDetail = id =>{
      navigate(`/workout/${id}`);

    }
    return (
        <div className='trainer-container '>
            <img className='w-100' src={img} alt="" />

          <div className='ps-5'>
          <h2>{name}</h2>
            <p>Monthly Price:{price}</p>
            <p><small>{description}</small></p>
            <button onClick={ () => navigateToServiceDetail(id)} className='btn btn-dark text-align-center '>Add To Cart</button>
          </div>
        </div>

    );
};

export default Traning;