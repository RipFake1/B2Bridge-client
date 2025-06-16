import React from 'react';
import HeroAllProductsEach from './HeroAllProductsEach';

const HeroAllProducts = ({ show }) => {
    return (
        <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 lg:gap-8'>
            {
                show.map(singleProduct => <HeroAllProductsEach key={singleProduct._id} singleProduct={singleProduct}></HeroAllProductsEach>)
            }
        </div>
    );
};

export default HeroAllProducts;