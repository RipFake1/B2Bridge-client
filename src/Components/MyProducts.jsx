import React, { use } from 'react';
import { useLoaderData } from 'react-router';
import MyProductEach from './MyProductEach';
import { AuthContext } from '../provider/AuthProvider';

const MyProducts = () => {

    const { user } = use(AuthContext);

    const products = useLoaderData();
    const myProducts = products.filter(product => user.email === product.email);
    console.log(myProducts);

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
                                myProducts.map(myProduct => <MyProductEach key={myProduct._id} myProduct={myProduct}></MyProductEach>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyProducts;