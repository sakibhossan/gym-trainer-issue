import React from 'react';
import {Link, useParams} from 'react-router-dom';
const WorkOutDetail = () => {
    const {workoutId} = useParams();
    return (
        <div>
            <h2 className='text-center'>Please CheckOut Your Add To Cart</h2>
           <div className='text-center'>
           <Link to='/checkout'>
                <button className='btn btn-dark'>Proceed CheckOut</button>
            </Link>
           </div>
        </div>
    );
};

export default WorkOutDetail;