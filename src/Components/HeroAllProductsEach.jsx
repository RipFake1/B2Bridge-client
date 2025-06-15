import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router';

const HeroAllProductsEach = ({ singleProduct }) => {

    const { _id, productName, brand, short, image, star } = singleProduct;

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
            <div className='flex flex-col justify-center items-center gap-10 px-8px p-4 border-2 border-green-500 m-4 rounded-sm'>

                <div>
                    <img className='w-[240px] h-[240px] object-cover p-4 rounded-2xl' src={image} alt="" />
                </div>

                <div className='flex-1'>
                    <h3 className='text-4xl font-bold mb-4 text-center'>{productName}</h3>
                    <h4 className='text-3xl font-medium mb-4 text-center'>{brand}</h4>
                    <h4 className='text-2xl text-zinc-500 font-medium mb-4 text-center capitalize'>{short}</h4>
                </div>

                <div className='flex justify-center items-center'>
                    <span className='text-2xl font-medium'>Rating : &nbsp;&nbsp;</span>
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
                    <Link to={`/allProducts/${_id}`}>
                        <button className="btn btn-block btn-outline hover:bg-green-500 hover:text-white btn-xl mb-8">View Product !</button>
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default HeroAllProductsEach;