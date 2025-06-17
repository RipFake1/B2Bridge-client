import React, { use } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import MyProductsEmpty from './MyProductsEmpty';
import MyProductsMiddle from './MyProductsMiddle';
import { Helmet } from 'react-helmet-async';

const MyProducts = () => {

    const { user } = use(AuthContext);
    const products = useLoaderData();
    const myProducts = products.filter(product => user.email === product.email);

    return (
        <div className='max-w-[1600px] mx-auto px-4 py-2 lg:py-8'>
            
            <Helmet>
                <title>My Products</title>
            </Helmet>

            {
                myProducts.length === 0 ? <MyProductsEmpty></MyProductsEmpty> : <MyProductsMiddle myProducts={myProducts}></MyProductsMiddle>
            }
        </div>
    );
};

export default MyProducts;