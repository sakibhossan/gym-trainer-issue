import React from 'react';
import notfound from'../../../Images/Trainer/notfound.png';

const NotFound = () => {
    return (
        <div>
            <h1 className=' text-primary text-center '>Not Found!!</h1>
            <h2 className='text-primary text-center'>404</h2>
            <img className='rounded mx-auto d-block' src= {notfound} alt="" />
        </div>
    );
};

export default NotFound;