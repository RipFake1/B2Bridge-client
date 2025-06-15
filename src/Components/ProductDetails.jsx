import React, { useEffect, useRef } from 'react';
import { useLoaderData } from 'react-router';

const ProductDetails = () => {

    const singleProduct = useLoaderData();

    console.log(singleProduct)

    const { _id, productName, productPrice, brand, short, total, minimum, image, category, star, productContent } = singleProduct;

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
        <div>
            <div className='max-w-[1600px] mx-auto px-4 lg:px-8 space-y-4 my-8' >
                <div className='flex flex-col gap-10 px-8px'>


                    <div className='flex flex-col lg:flex-row justify-center items-center gap-8 mx-auto'>
                        <div className='border-2 rounded-2xl border-[#00697720]'>
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



                    {/* <div className='flex flex-col lg:flex-row justify-between w-11/12 lg:w-10/12 mx-auto items-center '> */}
                    {/* <h3 className='text-2xl font-medium mb-4'>Contact: {contact}  </h3> */}
                    {/* <h3 className='text-2xl font-medium mb-4'>Email: {email}  </h3>
                        <h3 className='text-2xl font-medium mb-4'>Name: {name}  </h3>
                    </div> */}


                </div>
            </div>
        </div>
    );
};

export default ProductDetails;