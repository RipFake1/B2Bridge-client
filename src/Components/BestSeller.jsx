import React from 'react';

const BestSeller = () => {
    return (
        <div>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 bg-green-50 p-8 border-2 border-green-50 shadow-2xl'>
                <div className='col-span-2 p-4'>
                    <h3 className='text-black text-4xl font-bold'>
                        Discover your next Bestseller
                    </h3>
                    <p className='text-2xl text-zinc-950 font-medium my-4'>
                        See what retailers from across the globe <br /> are loving on Faire !
                    </p>
                    <button className=' mt-8 border-2 text-zinc-950 border-zinc-950 bg-white px-8 py-4 rounded-md text-xl font-medium hover:underline hover:cursor-pointer shadow-2xl'>See all bestsellers &#8594;</button>
                </div>
                <div className='p-4'>
                    <img className='w-64' src="https://i.ibb.co/bMM3YXVq/clothe.png" alt="" />
                </div>
                <div className='p-4'>
                    <img className='w-64' src="https://i.ibb.co/hFwsPX6M/lamp.png" alt="" />
                </div>
                <div className='p-4'>
                    <img className='w-64' src="https://i.ibb.co/xtX2kftK/necklace.png" alt="" />
                </div>
                <div className='p-4'>
                    <img className='w-64' src="https://i.ibb.co/PGp9nJD8/washing-machine.png" alt="" />
                </div>
                <div className='p-4'>
                    <img className='w-64' src="https://i.ibb.co/FbZs2t68/sunglass.png" alt="" />
                </div>
                <div className='p-4'>
                    <img className='w-64' src="https://i.ibb.co/Kjgk0fRD/camera.png" alt="" />
                </div>
                
            </div>
        </div>
    );
};

export default BestSeller;