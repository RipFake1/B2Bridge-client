import React from 'react';
import MyProductEach from './MyProductEach';

const MyProductsMiddle = ({ myProducts }) => {
    return (
        <div className='max-w-[1600px] mx-auto px-4 lg:px-8 space-y-4 my-8'>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto'>
                {
                    myProducts.map(myProduct => <MyProductEach key={myProduct._id} myProduct={myProduct}></MyProductEach>)
                }
            </div>
        </div>
    );
};

export default MyProductsMiddle;