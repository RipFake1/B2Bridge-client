import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router';

const AllProductEach = ({ product }) => {

    const { _id, productName, productPrice, brand, short, total, minimum, image, category, star, productContent } = product;

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
        <tr>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={image}
                                alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{productName}</div>
                        <div className="text-sm">{brand}</div>
                        <div className="text-sm opacity-50 capitalize">{category}</div>
                    </div>
                </div>
            </td>
            <td>
                <span className='font-medium'>{short}</span>
                <br />
                {/* {productContent} */}

            </td>
            <td>
                Total Available: {total}
                <br />
                Minimum Selling Quantity: {minimum}
                <br />
                <span className="badge badge-ghost badge-sm">Price: $ {productPrice}/ item</span>
            </td>

            <th>
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
                <br />
                <Link to={`/updateProduct/${_id}`}>
                    <button className="btn btn-outline btn-success my-4">Update Product</button>
                </Link>
            </th>
        </tr>
    );
};

export default AllProductEach;