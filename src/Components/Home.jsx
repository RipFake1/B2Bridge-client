import React from 'react';
import App from '../App';
import Hero from './Hero';
import Slider from './Slider';
import Manage from './Manage';
import BestSeller from './BestSeller';
import Faq from './Faq';


const Home = () => {
    return (
        <div className='max-w-[1600px] mx-auto px-4 py-2 lg:py-8'>

            {/* <App></App> */}
            <Hero></Hero>
            <BestSeller></BestSeller>
            <Manage></Manage>
            <Slider></Slider>
            <Faq></Faq>
            
            
        </div>
    );
};

export default Home;