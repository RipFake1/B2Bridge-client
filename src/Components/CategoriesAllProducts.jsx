import React from 'react';
import CategoriesAllProductsEach from './CategoriesAllProductsEach';

const CategoriesAllProducts = ({ products }) => {
    return (
        <div className='max-w-[1600px] mx-auto px-4 lg:px-8 space-y-4 my-8'>
            <div className='grid grid-cols-1 gap-8'>
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
                                products.map(product => <CategoriesAllProductsEach key={product._id} product={product}></CategoriesAllProductsEach>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default CategoriesAllProducts;