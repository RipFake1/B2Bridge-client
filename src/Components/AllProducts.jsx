import React, { useState } from 'react';
import { useLoaderData } from 'react-router';
import AllProductsMiddle from './AllProductsMiddle';
import AllProductsCards from './AllProductsCards';

const AllProducts = () => {

    const products = useLoaderData();
    const [list, setList] = useState(true);

    return (
        <div className='max-w-[1600px] mx-auto px-4 lg:px-8 space-y-4 my-8'>

            <div className='flex justify-end items-center'>
                <p className='text-green-500 font-bold text-2xl'>View Type : </p>
                <label className="swap">
                    <input onClick={() => setList(!list)} type="checkbox" />

                    <div className="swap-on">
                        <img className='w-8 m-2' src="https://i.ibb.co/84z47d4H/list.png" alt="" />
                    </div>
                    <div className="swap-off">
                        <img className='w-8 m-2' src="https://i.ibb.co/6p1zWX3/thumbnail.png" alt="" />
                    </div>
                </label>
            </div>

            {
                list ? <AllProductsMiddle products={products}></AllProductsMiddle> : <AllProductsCards products={products}></AllProductsCards>
            }

        </div>
    );
};

export default AllProducts;