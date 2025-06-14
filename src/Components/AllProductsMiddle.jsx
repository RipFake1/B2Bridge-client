import React from 'react';
import AllProductEach from './AllProductEach';

const AllProductsMiddle = ({ products }) => {
    return (
        <div className="overflow-x-auto">
            <table className="table">
                <thead>
                    <tr className=''>
                        <th>About</th>
                        <th>Description</th>
                        <th>Order</th>
                        <th>Rating</th>
                    </tr>
                </thead>
                <tbody>

                    {
                        products.map(product => <AllProductEach key={product._id} product={product}></AllProductEach>)
                    }

                </tbody>
            </table>
        </div>
    );
};

export default AllProductsMiddle;