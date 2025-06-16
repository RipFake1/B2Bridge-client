import React from 'react';
import CartPageEach from './CartPageEach';

const CartPageMiddle = ({ availableCartItems, handleRemainingCart}) => {
    return (
        <div className='max-w-[1600px] mx-auto px-4 lg:px-8 space-y-4 my-8'>
            <h1 className='text-center text-7xl text-emerald-500 font-semibold mb-12'>Your Cart !</h1>
            <div className='grid grid-cols-1 gap-8'>
                <div className="overflow-x-auto">
                    <table className="table">
                        <thead>
                            <tr className=''>
                                <th>About</th>
                                <th>Description</th>
                                <th>Order</th>
                                <th>Buying Info</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                availableCartItems.map(myCartDataEach => <CartPageEach key={myCartDataEach._id} myCartDataEach={myCartDataEach}handleRemainingCart={handleRemainingCart}></CartPageEach>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CartPageMiddle;