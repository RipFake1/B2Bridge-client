import React from 'react';
import App from '../App';
import Loading from './Loading';
import Hero from './Hero';
import Slider from './Slider';


const Home = () => {
    return (
        <div className='max-w-[1600px] mx-auto px-4 py-2 lg:py-8'>

            {/* <App></App> */}
            {/* <Loading></Loading> */}
            <Hero></Hero>
            <Slider></Slider>
        </div>
    );
};

export default Home;