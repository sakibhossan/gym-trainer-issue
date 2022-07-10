import React from 'react';
import {useParams} from 'react-router-dom';
const WorkOutDetail = () => {
    const {workoutId} = useParams();
    return (
        <div>
            <h2>this is workout detail: {workoutId}</h2>
        </div>
    );
};

export default WorkOutDetail;