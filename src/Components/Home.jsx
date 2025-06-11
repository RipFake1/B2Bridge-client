import React from 'react';
import App from '../App';
import Loading from './Loading';
import Hero from './Hero';

const Home = () => {
    return (
        <div className='max-w-[1600px] mx-auto px-4 py-2 lg:py-8'>
            
            <App></App>
            {/* <Loading></Loading> */}
            {/* <Hero></Hero> */}
        </div>
    );
};

export default Home;