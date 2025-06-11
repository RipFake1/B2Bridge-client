import React from 'react';
import sliderOneImage from '../../public/b2bridge_slider_one.png'

const SliderOne = () => {
    return (
        <div className='flex flex-col md:flex-row justify-center items-center'>
            <div className='w-full lg:w-1/2'>
                <img src={sliderOneImage} alt="" />
            </div>
            <div className='w-full lg:w-1/2 my-8'>
                <h3 className='text-4xl font-semibold text-center md:text-left'>Easy & Convenient Ordering !</h3>
                <p className='text-2xl text-zinc-500 mt-8 text-center md:text-left'>A simple visual interface that provides a logical and easy way to find and add products.</p>

            </div>
        </div>
    );
};

export default SliderOne;