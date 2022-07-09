import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Traning from '../Training/Traning';

const WorkOut = () => {

const [equipment, setEuipment] = useState([]);

useEffect(() =>{
    fetch('equipment.json')
    .then(res => res.json())
    .then(data => setEuipment(data));
},[])



    return (
        <div>
            <h2>Our Euipment:</h2>
            {
                equipment.map(trainer => <Traning 
                key={trainer.id}
                trainer={trainer}
                ></Traning>)
            }
        </div>
    );
};

export default WorkOut;