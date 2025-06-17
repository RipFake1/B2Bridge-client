import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Loading from './Loading';
import Swal from 'sweetalert2';
import { useNavigate } from 'react-router';

const CartPageEach = ({ myCartDataEach, handleRemainingCart }) => {

    const { _id, usersEmail, productId, quantity, dateAndTime } = myCartDataEach;

    const formattedDate = new Date(dateAndTime).toLocaleString();
    const navigate = useNavigate();

    const [dataLoading, setDataLoading] = useState(true);
    const [eachProducts, setEachProducts] = useState({});

    const fetchEachProduct = async (productId) => {
        setDataLoading(true);
        try {
            const response = await fetch(`http://localhost:3000/allproducts/${productId}`, {
                method: 'GET',
                credentials: 'include',
            });
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
        return <Loading></Loading>;
    }

    const { productName, productPrice, brand, short, total, minimum, image, category } = eachProducts;

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
                    credentials: 'include',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(countInfo)
                })
                    .then(res => res.json())
                    .then(data => {
                        // console.log('after update patch', data)
                        // console.log(' ');
                    })

                fetch(`http://localhost:3000/orderProduct/${_id}`, {
                    method: 'DELETE',
                    credentials: 'include',
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
                <p className='text-xl'>Total Available: {total}</p>
                <p className='text-xl'>Minimum Sell: {minimum}</p>
                <p className='text-xl'>Price: $ {productPrice} / item</p>
                <p className='text-xl font-semibold'>Buyer Email : {usersEmail}</p>
                <p className='text-xl font-semibold'>Buying Quantity: {quantity}</p>
                <p className='text-xl font-semibold'>Time : {formattedDate}</p>
                <br />
                <button onClick={() => handleDelete(_id)} className="btn btn-outline btn-error my-4">Delete Product</button>
            </div>
        </div>
    );
};

export default CartPageEach;