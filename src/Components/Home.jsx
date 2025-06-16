import React from 'react';
import App from '../App';
import Hero from './Hero';
import Slider from './Slider';
import Manage from './Manage';
import BestSeller from './BestSeller';
import Faq from './Faq';
import HeroProducts from './HeroProducts';
import { useLoaderData } from 'react-router';
import { Helmet } from 'react-helmet-async';

const Home = () => {

    const products = useLoaderData();

    return (
        <div className='max-w-[1600px] mx-auto px-4 py-2 lg:py-8'>

            <Helmet>
                <title>Home</title>
            </Helmet>

            {/* <App></App> */}

            <Hero></Hero>
            <BestSeller></BestSeller>
            <HeroProducts products={products}></HeroProducts>
            <Manage></Manage>
            <Slider></Slider>
            <Faq></Faq>


        </div>
    );
};

export default Home;