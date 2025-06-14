import React from 'react';
import AllProductsCardsEach from './AllProductsCardsEach';

const AllProductsCards = ({ products }) => {
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-auto'>
            {
                products.map(product => <AllProductsCardsEach key={product._id} product={product}></AllProductsCardsEach>)
            }
        </div>
    );
};

export default AllProductsCards;