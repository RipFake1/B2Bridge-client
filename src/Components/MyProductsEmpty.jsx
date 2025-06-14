import React from 'react';
import { Link } from 'react-router';
import Lottie from "lottie-react";
import emptyListings from "../assets/empty_box.json"

const MyProductsEmpty = () => {
    return (
        <div className='mb-16'>
            <div className='max-w-[1600px] mx-auto p-4 lg:px-[10px]'>
                <div className='flex flex-col-reverse lg:flex-row justify-between items-center'>
                    <div className='flex flex-col justify-center items-center gap-20 mt-20 w-full lg:w-1/2'>

                        <h3 className='font-bold text-5xl lg:text-5xl text-center'>You haven't added any Products for sale.</h3>

                        <p className='font-semibold text-3xl text-center'>Let's add some products for sale !</p>

                        <Link to="/add">
                            <button className="btn hover:btn-success btn-neutral btn-outline">Add New Product !</button>
                        </Link>
                    </div>

                    <div className='w-full lg:w-1/2'>
                        <Lottie animationData={emptyListings} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProductsEmpty;