import React from 'react';
import Lottie from "lottie-react";
import { Typewriter } from 'react-simple-typewriter'

import loading_Truck from "../assets/loading_truck.json"

const Loading = () => {
    return (
        <div className='flex flex-col justify-center items-center'>

            <div className='w-full md:w-1/4'>
                <Lottie animationData={loading_Truck} />
            </div>

            <p className='text-5xl'>
                Products are being {' '}
                <span className='block lg:hidden'><br /></span>
                <span className='font-bold text-green-500'>
                    {/* Style will be inherited from the parent element */}
                    <Typewriter
                        words={['Fetched !', 'Pulled from the server !', 'Loaded !', 'Processed !', 'Arranged !','Filtered !']}
                        loop={0}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                    />
                </span>
            </p>

            <p className='text-5xl text-[#005C99] my-20 mx-2 text-center'>Please wait for a moment !</p>

        </div>
    );
};

export default Loading;