import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router';

const AllProductsCardsEach = ({ product }) => {

    const { _id, productName, productPrice, brand, short, total, minimum, image, category, star } = product;

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
        <div className="card bg-base-100 shadow-sm">
            <figure className="px-10 pt-10">
                <img
                    src={image}
                    alt=""
                    className="rounded-xl m-2 w-32" />
            </figure>
            <div className="card-body items-center text-center">
                <h2 className="card-title text-3xl">{productName}</h2>

                <p className='text-2xl'>Brand: {brand}</p>
                <p className='capitalize text-2xl'>Category: {category}</p>

                <p className='text-xl'>{short}</p>
                <p className='text-xl'>Total: {total}</p>
                <p className='text-xl'>Minimum Sell: {minimum}</p>
                <p className='text-xl'>Price: $ {productPrice} / item</p>

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
                <Link to={`/updateProduct/${_id}`}>
                    <button className="btn btn-outline btn-success my-4">Update Product</button>
                </Link>
            </div>
        </div>
    );
};

export default AllProductsCardsEach;