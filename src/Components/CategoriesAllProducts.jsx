import React from 'react';
import CategoriesAllProductsEach from './CategoriesAllProductsEach';

const CategoriesAllProducts = ({ products }) => {
    return (
        <div className='max-w-[1600px] mx-auto px-4 lg:px-8 space-y-4 my-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto'>
                {
                    products.map(product => <CategoriesAllProductsEach key={product._id} product={product}></CategoriesAllProductsEach>)
                }
            </div>
        </div>
    );
};

export default CategoriesAllProducts;