import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router';

const AllProductEach = ({ product }) => {

    const { _id, productName, productPrice, brand, short, total, minimum, image, category, star, productContent} = product;

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

    return (
        <div className='border-2 p-4 rounded-2xl'>
            <div className='flex flex-col lg:flex-row items-center gap-10 px-20px'>
                <div className="w-[230px] border-3 rounded-2xl">
                    <img className='w-[230px] h-[230px] object-cover rounded-2xl p-2' src={image} alt="" />
                </div>

                <div className='flex-1 '>

                    <h3 className='text-4xl font-semibold mb-4'>{productName}</h3>

                    <div className='flex flex-col lg:flex-row justify-around items-start lg:items-center gap-2'>
                        <h4 className='text-2xl font-medium mb-4'> Brand: {brand}</h4>
                        <p className='text-xl font-medium mb-4'>Description:  {short}</p>
                    </div>

                    <div className='flex flex-col lg:flex-row justify-around items-start lg:items-center gap-2'>

                        <p className='text-xl font-medium mb-4'>Total Available: {total}  </p>
                        <p className='text-xl font-medium mb-4'>Minimum Selling Quantity: {minimum} </p>
                        <p className='text-xl font-medium mb-4'>Price: $ {productPrice} / item</p>

                    </div>

                    <div className='flex flex-col lg:flex-row justify-around items-start lg:items-center gap-2'>

                        <p className='text-xl font-medium mb-4 capitalize'>Category: {category}  </p>
                        
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

                    <p className='text-xl font-medium mb-4 capitalize my-4'>{productContent}  </p>

                    {/* <Link to={`/roomDetails/${_id}`}> */}
                        {/* <button
                            className="my-8 w-full py-4 text-lg font-semibold rounded-full border-2 cursor-pointer hover:underline hover:cursor-pointer bg-white border-green-500 text-green-500">
                            Update Product
                        </button> */}
                        <button className="btn btn-outline btn-success w-full my-4">Update Product</button>
                    {/* </Link> */}
                </div>
            </div>
        </div>
    );
};

export default AllProductEach;