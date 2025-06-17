import React, { useEffect, useState } from 'react';
import HeroProductsEmpty from './HeroProductsEmpty';
import HeroAllProducts from './HeroAllProducts';
import { motion } from "motion/react"

const HeroProducts = ({ products }) => {

    const [show, setShow] = useState([]);

    useEffect(() => {
        handleProducts('clothe');
    }, [])

    const handleProducts = (type) => {
        // setShow(products.filter(singleProducts => singleProducts.category === type));
        // if (show.length > 3) {
        //     setShow(show.slice(0, 3))
        // }
        // return;

        const filtered = products.filter(product => product.category === type);
        const limited = filtered.length > 3 ? filtered.slice(0, 3) : filtered;
        setShow(limited);
    }

    return (
        <div className='p-2 lg:p-12 my-24 bg-emerald-50 shadow-2xl rounded-2xl'>

            <h3 className='text-5xl font-bold text-center py-12'>
                Find the right products for <br />  your store — &nbsp;

                <motion.span
                    animate={
                        {
                            color: ['#00a6f4', '#00b8db', '#00bba7', '#00bc7d', '#00c950', '#00bc7d', '#00bba7', '#00b8db'],
                            transition: { duration: 15, repeat: Infinity },
                        }}>
                    easily !
                </motion.span>
            </h3>

            <div className='flex justify-center items-center mb-24'>
                <div className="join join-vertical lg:join-horizontal">

                    <button onClick={() => handleProducts("clothe")} className="btn join-item focus:btn-success">Clothe</button>

                    <button onClick={() => handleProducts("furniture")} className="btn join-item focus:btn-success">Furniture</button>

                    <button onClick={() => handleProducts("homeAppliances")} className="btn join-item focus:btn-success">Home Appliances</button>

                    <button onClick={() => handleProducts("accessories")} className="btn join-item focus:btn-success">Accessories</button>

                    <button onClick={() => handleProducts("jewelry")} className="btn join-item focus:btn-success">Jewelry</button>

                    <button onClick={() => handleProducts("consumerElectronics")} className="btn join-item focus:btn-success">Consumer Electronics</button>
                </div>
            </div>

            {
                show.length === 0 ? <HeroProductsEmpty></HeroProductsEmpty> :
                    <HeroAllProducts show={show}></HeroAllProducts>
            }
        </div>
    );
};

export default HeroProducts;