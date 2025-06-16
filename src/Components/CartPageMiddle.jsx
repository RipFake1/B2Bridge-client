import React from 'react';
import CartPageEach from './CartPageEach';

const CartPageMiddle = ({ availableCartItems, handleRemainingCart }) => {
    return (
        <div className='max-w-[1600px] mx-auto px-4 lg:px-8 space-y-4 my-8'>
            <h1 className='text-center text-7xl text-emerald-500 font-semibold mb-12'>Your Cart !</h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mx-auto'>
                {
                    availableCartItems.map(myCartDataEach => <CartPageEach key={myCartDataEach._id} myCartDataEach={myCartDataEach} handleRemainingCart={handleRemainingCart}></CartPageEach>)
                }
            </div>
        </div>
    );
};

export default CartPageMiddle;