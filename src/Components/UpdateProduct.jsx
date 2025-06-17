import React, { use, useEffect, useRef, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';


const UpdateProduct = () => {

    const singleProduct = useLoaderData();
    const navigate = useNavigate();
    const { user } = use(AuthContext);

    const { _id, productName, productPrice, brand, short, total, minimum, image, category, star, productContent } = singleProduct;

    const [rating, setRating] = useState(star);

    const handleChangeStar = (e) => {
        setRating(e.target.value);
    };

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


    const handleEditProduct = (e) => {
        e.preventDefault();

        const form = e.target;
        const productName = form.productName.value;
        const productPrice = form.productPrice.value;
        const brand = form.brand.value;
        const short = form.short.value;
        const total = form.total.value;
        const minimum = form.minimum.value;
        const image = form.image.value;
        const category = form.category.value;
        const star = rating;
        const productContent = form.productContent.value;

        const newUpdateProduct = {
            productName,
            productPrice,
            brand,
            short,
            total,
            minimum,
            image,
            category,
            star,
            productContent
        };

        //updated DB
        fetch(`http://localhost:3000/allproducts/${_id}`, {
            method: 'PUT',
            credentials: 'include',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newUpdateProduct),
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        icon: "success",
                        title: "Product Updated Successfully !",
                        showConfirmButton: true,
                    })
                        .then((result) => {
                            if (result.isConfirmed) {
                                navigate("/allProducts");
                            }
                        });
                }
            })
    }


    return (
        <div className='max-w-[1600px] mx-auto py-20 flex justify-center items-center'>
            <Helmet>
                <title>Update Product</title>
            </Helmet>
            <div className="card w-full max-w-sm shrink-0 shadow-2xl text-[#333333]">
                <div className="card-body">
                    <h1 className="text-4xl font-bold text-center">Update Product !</h1>

                    <form onSubmit={handleEditProduct} className="fieldset">

                        <label className="label text-[#333333]">Product Name</label>
                        <input type="text" defaultValue={productName} name='productName' className="input text-[#333333]" placeholder="Name" required />

                        <label className="label text-[#333333]"> Product Price</label>
                        <input type="text" defaultValue={productPrice} name='productPrice' className="input text-[#333333]" placeholder="$ Price $" required />

                        <label className="label text-[#333333]">Brand Name</label>
                        <input type="text" defaultValue={brand} name='brand' className="input text-[#333333]" placeholder="Brand Name" required />

                        <label className="label text-[#333333]">Short Description</label>
                        <input type="text" defaultValue={short} name='short' className="input text-[#333333]" placeholder="Short Description" required />

                        <label className="label text-[#333333]">Total Quantity</label>
                        <input type="text" defaultValue={total} name='total' className="input text-[#333333]" placeholder="Total Quantity" required />

                        <label className="label text-[#333333]">Minimum Selling Quantity </label>
                        <input type="text" defaultValue={minimum} name='minimum' className="input text-[#333333]" placeholder="Minimum Selling Quantity" required />

                        <label className="label text-[#333333]">Image</label>
                        <input type="text" defaultValue={image} name='image' className="input text-[#333333]" placeholder="Product Image URL" required />

                        <label className="label text-[#333333]">Category</label>

                        <select defaultValue={category} name='category' className="select select-neutral" required>
                            {/* <option value="" disabled>Category</option> */}
                            <option value="clothe">Clothe</option>
                            <option value="furniture">Furniture</option>
                            <option value="jewelry">Jewelry</option>
                            <option value="homeAppliances">Home Appliances</option>
                            <option value="accessories">Accessories</option>
                            <option value="consumerElectronics">Consumer Electronics</option>
                        </select>

                        <label className="label text-[#333333]">Rating</label>
                        <div className="rating">
                            {[1, 2, 3, 4, 5].map((val) => (
                                <input
                                    key={val}
                                    type="radio"
                                    name="rating"
                                    value={val}
                                    checked={rating === String(val)}
                                    onChange={handleChangeStar}
                                    required
                                    className="mask mask-star-2 bg-green-500 radioSelect"
                                />
                            ))}
                        </div>

                        <label className="label text-[#333333]">Product Content</label>
                        <textarea defaultValue={productContent} name='productContent' className="textarea h-36 text-[#333333]" placeholder="Product Content (100 word max)" required ></textarea>

                        <label className="label text-[#333333]">Email</label>
                        <input type="email" name='email' defaultValue={user.email} className="input cursor-not-allowed" disabled />

                        <label className="label text-[#333333]">Name</label>
                        <input type="text" name='name' defaultValue={user.displayName} className="input cursor-not-allowed" disabled />

                        <button type='submit' className="btn bg-green-500 text-[#333333] mt-4">Update Product !</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UpdateProduct;