import React, { use, useEffect, useRef, useState } from 'react';
import { Link, useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';

const ProductDetails = () => {

    const singleProduct = useLoaderData();
    const { user } = use(AuthContext);
    const navigate = useNavigate();


    // console.log(singleProduct)

    const { _id, productName, productPrice, brand, short, total, minimum, image, category, star, productContent } = singleProduct;

    const [orderQuantity, setOrderQuantity] = useState(parseInt(minimum));
    const [totalAvailable, setTotalAvailable] = useState(parseInt(total));

    const [quantityError, setQuantityError] = useState("");
    const [notEnoughProductError, setNotEnoughProductError] = useState("");

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
        e.preventDefault();

        const usersEmail = user.email;
        const productId = _id;
        const quantity = orderQuantity;
        const dateAndTime = new Date();

        // const readable = dateAndTime.toLocaleString();

        // console.log(usersEmail, productId, quantity, dateAndTime);

        //Quantity error
        if (orderQuantity < parseInt(minimum)) {
            setQuantityError(`Can't order less than ${parseInt(minimum)} items !`);
            return;
        }
        else {
            setQuantityError("");

        }

        const calculatedTotal = parseInt(total) - orderQuantity;

        if(calculatedTotal < 0)
        {
            setNotEnoughProductError(`${orderQuantity} items is not Available ! You have to buy less than ${total} products !`);
            return;
        }
         else {
            setNotEnoughProductError("");

        }

        setTotalAvailable(calculatedTotal);

        const countInfo = {
            total: calculatedTotal,
        }

        // update total Available
        fetch(`http://localhost:3000/allproducts/${_id}`, {
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

        //save to order
        const newOrder = {
            usersEmail,
            productId,
            quantity,
            dateAndTime,
        };

        //Order table POST api
        fetch('http://localhost:3000/orderProduct', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newOrder),
        })
            .then(res => res.json())
            .then(data => {

                if (data.insertedId) {

                    document.getElementById("my_buy_modal").close();

                    Swal.fire({
                        icon: "success",
                        title: "Successfully Purchased !",
                        showConfirmButton: true,
                    })
                        .then((result) => {
                            if (result.isConfirmed) {
                                navigate('/cart');
                            }
                        });
                }
            })
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
                        <h3 className='text-2xl font-medium mb-4'>Total Available:  {totalAvailable}</h3>
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

                                    {
                                        quantityError && <p className='text-red-600 text-xl'>{quantityError}</p>
                                    }

                                    <label className="input">
                                        <span className="label">Name</span>
                                        <input type="text" defaultValue={user.displayName} className="input cursor-not-allowed" disabled />
                                    </label>

                                    <label className="input">
                                        <span className="label">Email</span>
                                        <input type="text" defaultValue={user.email} className="input cursor-not-allowed" disabled />
                                    </label>

                                    {
                                        notEnoughProductError && <div className='flex flex-col justify-center items-center gap-2'><p className='text-red-600 text-xl'>{notEnoughProductError}</p>
                                        
                                        <p className='text-green-400 text-xl'> Please Visit All Products Page !</p>
                                        <Link to='/allProducts'>
                                            <button className='btn btn-success'>All product</button>
                                        </Link>

                                        </div>
                                    }

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