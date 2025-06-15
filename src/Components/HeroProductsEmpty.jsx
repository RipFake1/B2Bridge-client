import React from 'react';
import Lottie from "lottie-react";
import emptyListings from "../assets/empty_box.json"

const HeroProductsEmpty = () => {
    return (
        <div className='mb-16'>
            <div className='max-w-[1600px] mx-auto p-4 lg:px-[10px]'>
                <div className='flex flex-col justify-between items-center'>

                    <div className='w-full lg:w-1/4'>
                        <Lottie animationData={emptyListings} />
                    </div>

                    <h3 className='font-bold text-5xl lg:text-5xl text-center'>There are no products listed in this Category !</h3>
                </div>
            </div>
        </div>
    );
};

export default HeroProductsEmpty;