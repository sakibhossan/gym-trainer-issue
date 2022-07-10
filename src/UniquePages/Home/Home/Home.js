import React from 'react';
import Trainers from '../Trainers/Trainers';
import WorkOut from '../WorkOut/WorkOut';
import Banner from './Banner/Banner';

const Home = () => {
    return (
        <>
            <Banner></Banner>
           <WorkOut></WorkOut>
           <Trainers></Trainers>
        </>
    );
};

export default Home;