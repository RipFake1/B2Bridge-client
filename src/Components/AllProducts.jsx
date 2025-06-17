import React, { use } from 'react';
import { useLoaderData } from 'react-router';
import AllProductsMiddle from './AllProductsMiddle';
import AllProductsCards from './AllProductsCards';
import { AuthContext } from '../provider/AuthProvider';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';


const AllProducts = () => {

    const allProducts = useLoaderData();
    const { list, setList } = use(AuthContext);
    const [products, setProducts] = useState(allProducts);

    const handleMinSaleProduct = () => {
        const filteredProducts = allProducts.filter(allProduct => parseInt(allProduct.minimum) > 100);
        setProducts(filteredProducts);
    }

    return (
        <div className='max-w-[1600px] mx-auto px-4 lg:px-8 space-y-4 my-8'>

            <Helmet>
                <title>All Products</title>
            </Helmet>
            
            <div className='flex justify-between items-center my-12'>

                <button onClick={() => handleMinSaleProduct()} className="btn btn-info">Show Available Products</button>

                <div className="dropdown dropdown-left dropdown-center">
                    <div tabIndex={0} role="button" className="btn btn-info m-1">View Type</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a onClick={() => setList(true)}>Table View</a></li>
                        <li><a onClick={() => setList(false)}>Card View</a></li>
                    </ul>
                </div>
            </div>

            {/* thumbnail or list code down with image */}

            {/* 
            <div className='flex justify-end items-center'>
                <p className='text-green-500 font-bold text-2xl'>Change View Type To : </p>
                <label className="swap">
                    <input onClick={() => setList(!list)} type="checkbox" />

                    <div className="swap-on">
                        <img className='w-8 m-2' src={` ${list ? "https://i.ibb.co/6p1zWX3/thumbnail.png" : "https://i.ibb.co/84z47d4H/list.png"}`} alt="" />
                    </div>
                    <div className="swap-off">
                        <img className='w-8 m-2' src={` ${list ? "https://i.ibb.co/6p1zWX3/thumbnail.png" : "https://i.ibb.co/84z47d4H/list.png"}`} alt="" />
                    </div>
                </label>
            </div> */}

            {
                list ? <AllProductsMiddle products={products}></AllProductsMiddle> : <AllProductsCards products={products}></AllProductsCards>
            }

        </div>
    );
};

export default AllProducts;