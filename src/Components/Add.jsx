import React, { use, useState } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';


const Add = () => {

    const { user } = use(AuthContext);
    const navigate = useNavigate();
    const myDetails = { name: user.displayName, email: user.email };

    const [rating, setRating] = useState('');

    const handleChangeStar = (e) => {
        setRating(e.target.value);
    };


    const handleAddProduct = (e) => {
        e.preventDefault();

        const form = e.target;
        // console.log(form);

        const productName = form.productName.value;
        const productPrice = form.productPrice.value;
        const brand = form.brand.value;
        const short = form.short.value;
        const total = form.total.value;
        const minimum = form.minimum.value;
        const image = form.image.value;
        const category = form.category.value;
        // change later;
        const star = rating;
        const productContent = form.productContent.value;

        // console.log(productName, productPrice, brand, short, total, minimum, image, category, star, productContent);

        const newProduct = {
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

        Object.assign(newProduct, myDetails);
        console.log(newProduct);

        //send to DB
        fetch('http://localhost:3000/products', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newProduct),
        })
            .then(res => res.json())
            .then(data => {

                if (data.insertedId) {
                    Swal.fire({
                        icon: "success",
                        title: "Your Product has been added !",
                        text: "Do you want to add more products ?",
                        showCancelButton: true,
                        showConfirmButton: true,
                        confirmButtonColor: "#3085d6",
                        cancelButtonColor: "#d33",
                        confirmButtonText: "YES, Add More rooms!"
                    }).then((result) => {
                        if (result.isConfirmed) {

                            // setIsAvailable(true);
                            // clearLifestyleSelection();
                            // form.title.value = "";
                            // form.location.value = "";
                            // form.rent.value = "";
                            // form.type.value = "";
                            // form.description.value = "";
                            // form.contact.value = "";
                            // form.picture.value = "";

                            navigate("/add");
                        }
                        else {
                            // navigate("/myListings");
                            navigate("/add");
                        }
                    });


                }
            })

    }

    return (
        <div className='max-w-[1600px] mx-auto py-20 flex justify-center items-center'>
            <div className="card w-full max-w-sm shrink-0 shadow-2xl text-[#333333]">
                <div className="card-body">
                    <h1 className="text-4xl font-bold text-center">Add Product !</h1>

                    <form onSubmit={handleAddProduct} className="fieldset">

                        <label className="label text-[#333333]">Product Name</label>
                        <input type="text" name='productName' className="input text-[#333333]" placeholder="Name" required />

                        <label className="label text-[#333333]"> Product Price</label>
                        <input type="text" name='productPrice' className="input text-[#333333]" placeholder="$ Price $" required />

                        <label className="label text-[#333333]">Brand Name</label>
                        <input type="text" name='brand' className="input text-[#333333]" placeholder="Brand Name" required />

                        <label className="label text-[#333333]">Short Description</label>
                        <input type="text" name='short' className="input text-[#333333]" placeholder="Short Description" required />

                        <label className="label text-[#333333]">Total Quantity</label>
                        <input type="text" name='total' className="input text-[#333333]" placeholder="Total Quantity" required />

                        <label className="label text-[#333333]">Minimum Selling Quantity </label>
                        <input type="text" name='minimum' className="input text-[#333333]" placeholder="Minimum Selling Quantity" required />

                        <label className="label text-[#333333]">Image</label>
                        <input type="text" name='image' className="input text-[#333333]" placeholder="Product Image URL" required />

                        <label className="label text-[#333333]">Category</label>

                        <select defaultValue="" name='category' className="select select-neutral" required>
                            <option value="" disabled>Category</option>
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
                                    className="mask mask-star-2 bg-green-500"
                                />
                            ))}
                        </div>


                        {/* start preference */}

                        {/* <label className="label text-[#333333]">
                            <input id="myInputOne" type="checkbox"
                                className="checkbox checkbox-neutral"
                                value="No pets"
                            // onChange={handleCheckboxChange}
                            />
                            No pets
                        </label>

                        <label className="label text-[#333333]">
                            <input id="myInputTwo" type="checkbox"
                                className="checkbox checkbox-neutral"
                                value="Non Smokers"
                            // onChange={handleCheckboxChange}
                            />
                            Non Smokers
                        </label>

                        <label className="label text-[#333333]">
                            <input id="myInputThree" type="checkbox"
                                className="checkbox checkbox-neutral"
                                value="Night Owl"
                            // onChange={handleCheckboxChange}
                            />
                            Night Owl
                        </label> */}

                        {/* end preference */}

                        <label className="label text-[#333333]">Product Content</label>
                        <textarea name='productContent' className="textarea h-36 text-[#333333]" placeholder="Product Content (100 word max)" required ></textarea>

                        <label className="label text-[#333333]">Email</label>
                        <input type="email" name='email' defaultValue={user.email} className="input cursor-not-allowed" disabled />

                        <label className="label text-[#333333]">Name</label>
                        <input type="text" name='name' defaultValue={user.displayName} className="input cursor-not-allowed" disabled />

                        <button type='submit' className="btn bg-green-500 text-[#333333] mt-4">Add New Product</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Add;