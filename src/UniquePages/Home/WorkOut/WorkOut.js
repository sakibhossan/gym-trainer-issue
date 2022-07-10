import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Traning from '../Training/Traning';
import './WorkOut.css';

const WorkOut = () => {

const [equipment, setEuipment] = useState([]);

useEffect(() =>{
    fetch('equipment.json')
    .then(res => res.json())
    .then(data => setEuipment(data));
},[])



    return (
        <div className='container'>
       <div className="row">
       <h2 className='workout-title mt-5'>Our Euipment:</h2>
         <div className='workout-container'>
         {
                equipment.map(trainer => <Traning 
                key={trainer.id}
                trainer={trainer}
                ></Traning>)
            }
         </div>
       </div>
        </div>
    );
};

export default WorkOut;