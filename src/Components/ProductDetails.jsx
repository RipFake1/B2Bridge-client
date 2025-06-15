import React, { use, useEffect, useRef, useState } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';

const ProductDetails = () => {

    const singleProduct = useLoaderData();
    const { user } = use(AuthContext);


    // console.log(singleProduct)

    const { _id, productName, productPrice, brand, short, total, minimum, image, category, star, productContent } = singleProduct;

    const [orderQuantity, setOrderQuantity] = useState(parseInt(minimum));

    const starRefs = useRef([]);

    useEffect(() => {

        starRefs.current.forEach((el) => {
            if (el) el.removeAttribute('aria-current');
        });

        const selectedStar = starRefs.current[star - 1];
        if (selectedStar) {
            selectedStar.setAttribute('aria-current', 'true');
        }
    }, [star]);

    const handleBuyButton = (e) => {
        e.preventdefault();

    }

    return (
        <div>
            <div className='max-w-[1600px] mx-auto px-4 lg:px-8 space-y-4 my-8' >
                <div className='flex flex-col gap-10 px-8px'>


                    <div className='flex flex-col lg:flex-row justify-center items-center gap-8 mx-auto'>
                        <div className='border-2 rounded-2xl border-green-300'>
                            <img className='w-[360px] h-[360px] object-cover p-4 rounded-2xl' src={image} alt="" />
                        </div>

                        <div className='flex-1'>
                            <h3 className='text-5xl font-semibold mb-4 text-center lg:text-left'>{productName}</h3>
                            <h4 className='text-3xl font-medium mb-4 text-center lg:text-left'>Brand: {brand}</h4>
                            <h4 className='text-3xl font-medium mb-4 text-center capitalize lg:text-left'>Category: {category}</h4>
                            <h4 className='text-2xl text-zinc-400 font-medium mb-4 text-center capitalize lg:text-left'>{short}</h4>
                        </div>
                    </div>

                    <div className='flex flex-col lg:flex-row justify-between w-11/12 lg:w-10/12 mx-auto items-center '>
                        <h3 className='text-2xl font-medium mb-4'>Total Available:  {total}</h3>
                        <h3 className='text-2xl font-medium mb-4'>Minimum Order: {minimum}</h3>
                        <h3 className='text-2xl font-medium mb-4'>Price: $ {productPrice} / item</h3>
                    </div>

                    <div>
                        <h3 className='text-2xl font-medium mb-4 w-11/12 lg:w-10/12 mx-auto text-justify'> {productContent}  </h3>
                    </div>

                    <div className='flex justify-center items-center'>
                        <span className='text-2xl'>Rating : &nbsp;&nbsp;</span>
                        <div className="rating">
                            {[1, 2, 3, 4, 5].map((val, index) => (
                                <div
                                    key={val}
                                    id={`star${val}`}
                                    className="mask mask-star-2 bg-green-500"
                                    aria-label={`${val} star`}
                                    ref={(el) => (starRefs.current[index] = el)}
                                ></div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <button className="btn btn-block btn-outline hover:btn-success btn-xl" onClick={() => document.getElementById('my_buy_modal').showModal()}>Buy !</button>
                    </div>

                </div>
            </div>

            <dialog id="my_buy_modal" className="modal">
                <div className="modal-box">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <div className='flex justify-center items-center'>
                        <div className="card w-full max-w-sm shrink-0 shadow-2xl text-[#333333]">
                            <div className="card-body">
                                <h1 className="text-3xl font-bold text-center">Buy Product !</h1>

                                <div className='flex justify-center items-center p-4'>
                                    <img className='w-[140px] h-[140px] object-cover p-4' src={image} alt="" />
                                </div>

                                <form onSubmit={handleBuyButton} className="fieldset mx-auto">

                                    <label className="label text-[#333333]">Product Name</label>
                                    <input type="text" defaultValue={productName} name='productName' className="input text-[#333333] cursor-not-allowed" placeholder="Name" disabled />

                                    <label className="input">
                                        <span className="label">Price</span>
                                        <input type="text" defaultValue={`$ ${productPrice} / item`} className="input cursor-not-allowed" disabled />
                                    </label>

                                    <label className="input">
                                        <span className="label">Available</span>
                                        <input type="text" defaultValue={total} className="input cursor-not-allowed" disabled />
                                    </label>

                                    <label className="label text-[#333333]">Order Quantity </label>
                                    <div className='flex gap-2 items-center w-[320px]'>
                                        <button type="button" onClick={() => setOrderQuantity(orderQuantity - 1)} className="btn btn-square">
                                            -
                                        </button>

                                        <p className={`btn btn-square btn-outline cursor-not-allowed ${parseInt(minimum) > orderQuantity ? "btn-error" : "btn-success"} `}>
                                            {orderQuantity}
                                        </p>

                                        <button type="button" onClick={() => setOrderQuantity(orderQuantity + 1)} className="btn btn-square">
                                            +
                                        </button>
                                    </div>

                                    <p className='text-red-500'>
                                        {
                                            parseInt(minimum) > orderQuantity ? `Can't order less than ${minimum} items` : " "
                                        }
                                    </p>

                                    <label className="input">
                                        <span className="label">Name</span>
                                        <input type="text" defaultValue={user.displayName} className="input cursor-not-allowed" disabled />
                                    </label>

                                    <label className="input">
                                        <span className="label">Email</span>
                                        <input type="text" defaultValue={user.email} className="input cursor-not-allowed" disabled />
                                    </label>

                                    <button type='submit' className="btn bg-green-500 text-[#333333] mt-4">Buy Product !</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default ProductDetails;