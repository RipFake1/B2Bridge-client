import React from 'react';
import { motion } from "motion/react"
import { Link } from 'react-router';

const BestSeller = () => {
    return (
        <div>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-12 bg-emerald-50 p-4 lg:p-16 border-2 border-green-50 shadow-2xl'>
                <div className='col-span-2 p-4'>

                    <h3 className='text-zinc-950 text-6xl font-bold'>
                        <motion.span
                            animate={
                                {
                                    color: ['#00a6f4', '#00b8db', '#00bba7', '#00bc7d', '#00c950', '#00bc7d', '#00bba7', '#00b8db'],
                                    transition: { duration: 15, repeat: Infinity },
                                }}
                        >
                            Select Categories
                        </motion.span>
                    </h3>

                    <p className='text-2xl text-zinc-950 font-medium my-4'>
                        Check all the products in each category !
                    </p>
                    <Link to="/categories/all">
                        <button className='mt-8 border-2 text-white bg-green-500 border-green-500  px-16 py-4 rounded-md text-xl font-medium hover:underline hover:cursor-pointer shadow-2xl'>All Categories &#8594;</button>
                    </Link>
                </div>

                <div className='p-4 tooltip tooltip-top border-2 rounded-md border-green-300 flex justify-center items-center hover:shadow-2xl' data-tip="Clothe">
                    <Link to="/categories/clothe">
                        <img className='w-64 p-4' src="https://i.ibb.co/bMM3YXVq/clothe.png" alt="" />
                    </Link>
                </div>

                <div className='p-4 tooltip tooltip-top border-2 rounded-md border-green-300 flex justify-center items-center hover:shadow-2xl' data-tip="Furniture">
                    <Link to="/categories/furniture">
                        <img className='w-64 p-4' src="https://i.ibb.co/hFwsPX6M/lamp.png" alt="" />
                    </Link>
                </div>

                <div className='p-4 tooltip tooltip-top border-2 rounded-md border-green-300 flex justify-center items-center hover:shadow-2xl' data-tip="Jewelry">
                    <Link to="/categories/jewelry">
                        <img className='w-64 p-4' src="https://i.ibb.co/xtX2kftK/necklace.png" alt="" />
                    </Link>
                </div>

                <div className='p-4 tooltip tooltip-top border-2 rounded-md border-green-300 flex justify-center items-center hover:shadow-2xl' data-tip="Home Appliances">
                    <Link to="/categories/homeAppliances">
                        <img className='w-64 p-4' src="https://i.ibb.co/PGp9nJD8/washing-machine.png" alt="" />
                    </Link>
                </div>

                <div className='p-4 tooltip tooltip-top border-2 rounded-md border-green-300 flex justify-center items-center hover:shadow-2xl' data-tip="Accessories">
                    <Link to="/categories/accessories">
                        <img className='w-64 p-4' src="https://i.ibb.co/FbZs2t68/sunglass.png" alt="" />
                    </Link>
                </div>

                <div className='p-4 tooltip tooltip-top border-2 rounded-md border-green-300 flex justify-center items-center hover:shadow-2xl' data-tip="Consumer Electronics">
                    <Link to="/categories/consumerElectronics">
                        <img className='w-64 p-4' src="https://i.ibb.co/Kjgk0fRD/camera.png" alt="" />
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default BestSeller;