import React from 'react';
import { useLoaderData } from 'react-router';
import AllProductEach from './AllProductEach';

const AllProducts = () => {

    const products = useLoaderData();

    return (
        <div className='max-w-[1600px] mx-auto px-4 lg:px-8 space-y-4 my-8'>
            <div className='grid grid-cols-1 gap-8'>
                {
                    products.map(product => <AllProductEach key={product._id} product={product}></AllProductEach>)
                }
            </div>

        </div>
    );
};

export default AllProducts;