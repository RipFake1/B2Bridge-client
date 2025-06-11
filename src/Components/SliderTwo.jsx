import React from 'react';

const SliderTwo = () => {
    return (
        <div className='flex flex-col md:flex-row justify-center items-center'>
            <div className='w-full lg:w-1/2'>
                <img src="https://i.ibb.co/Zpb4MZbP/b2bridge-slider-two.png" alt="" />
            </div>
            <div className='w-full lg:w-1/2 my-8'>
                <h3 className='text-4xl font-semibold text-center md:text-left'>Product Details</h3>
                <p className='text-2xl text-zinc-500 mt-8 text-center md:text-left'>Comprehensive product details allow users to quickly order the required quantity.</p>

            </div>
        </div>
    );
};

export default SliderTwo;