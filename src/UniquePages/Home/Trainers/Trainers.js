import React from 'react';
import trainer1 from '../../../Images/Trainer/Trainer1.jpg';
import trainer2 from '../../../Images/Trainer/Trainer2.jpg';
import trainer3 from '../../../Images/Trainer/Trainer3.jpg';
import trainer4 from '../../../Images/Trainer/Trainer4.png';
import trainer5 from '../../../Images/Trainer/Trainer5.png';
import Trainer from '../Trainer/Trainer';

const trainers = [
    {id: 1, name: 'Sakib', img: trainer1},
    {id: 2, name: 'Hasib', img: trainer2},
    {id: 3, name: 'Nahid', img: trainer3},
    {id: 4, name: 'Tipu', img: trainer4},
    {id: 5, name: 'Hassan', img: trainer5},
]

const Trainers = () => {
    return (
        <div className=' container'>
            <h2 className='text-primary text-center'>Our Trainers</h2>
            {
                trainers.map(trainer => <Trainer
                key={trainer.id}
                trainer = {trainer}
                
                
                ></Trainer>)
            }

        </div>
    );
};

export default Trainers;