import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Loading from './Loading';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

const CartPageEach = ({ myCartDataEach, handleRemainingCart }) => {

    const { _id, usersEmail, productId, quantity, dateAndTime } = myCartDataEach;

    // const readable = dateAndTime.toLocaleString();
    const formattedDate = new Date(dateAndTime).toLocaleString();
    const navigate = useNavigate();

    // console.log(_id, usersEmail, productId, quantity, dateAndTime);

    const [dataLoading, setDataLoading] = useState(true);
    const [eachProducts, setEachProducts] = useState({});

    const fetchEachProduct = async (productId) => {
        setDataLoading(true);
        try {
            const response = await fetch(`http://localhost:3000/allproducts/${productId}`);
            const data = await response.json();
            setEachProducts(data);
        } catch (error) {
            console.error("Error fetching products:", error);
        }
        finally {
            setDataLoading(false);
        }
    };

    useEffect(() => {
        fetchEachProduct(productId);
    }, [productId]);

    if (dataLoading) {
        return <tr><td><Loading></Loading></td></tr>;
    }

    const { productName, productPrice, brand, short, total, minimum, image, category, productContent } = eachProducts;

    const increasedTotal = parseInt(quantity) + parseInt(total);
    
    const countInfo = {
        total: increasedTotal,
    }

    const handleDelete = (_id) => {

        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                // update total Available
                fetch(`http://localhost:3000/allproducts/${productId}`, {
                    method: 'PATCH',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(countInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log('after update patch', data)
                        console.log(' ');
                    })

                fetch(`http://localhost:3000/orderProduct/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            handleRemainingCart(_id);
                            Swal.fire({
                                icon: "success",
                                title: "Deleted!",
                                text: "Your Product has been deleted !",
                                showConfirmButton: true,
                            })
                                .then((result) => {
                                    if (result.isConfirmed) {
                                        navigate('/');
                                    }
                                });
                        }
                    })
            }
        });
    }


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
                {productContent}

            </td>
            <td>
                Total Available: {total}
                <br />
                Minimum Selling Quantity: {minimum}
                <br />
                <span className="badge badge-ghost badge-sm">Price: $ {productPrice}/ item</span>
            </td>

            <td>Buyer Email : {usersEmail}
                <br />
                Buying Quantity: {quantity}
                <br />
                <span className="badge badge-ghost badge-sm">{formattedDate}</span>
            </td>

            <th>
                <button onClick={() => handleDelete(_id)} className="btn btn-outline btn-error my-4">Delete Product</button>
            </th>
        </tr>
    );
};

export default CartPageEach;