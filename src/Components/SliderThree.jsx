import React from 'react';
import sliderThreeImage from '../../public/b2bridge_slider_three.png'

const SliderThree = () => {
    return (
        <div className='flex flex-col md:flex-row justify-center items-center'>
            <div className='w-full lg:w-1/2'>
                <img src={sliderThreeImage} alt="" />
            </div>
            <div className='w-full lg:w-1/2 my-8'>
                <h3 className='text-4xl font-semibold text-center md:text-left' >Cart Details</h3>
                <p className='text-2xl text-zinc-500 mt-8 text-center md:text-left'>Allow users to change quantities, delete cart items so they don't have to go back in the purchasing flow to adjust items to their preference.</p>
            </div>
        </div>
    );
};

export default SliderThree;