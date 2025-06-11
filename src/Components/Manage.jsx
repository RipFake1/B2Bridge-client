import React from 'react';

const Manage = () => {
    return (
        <div className='my-24'>
            <h2 className='text-6xl text-center font-medium leading-20'>Effectively manage every stage of your <br />B2B wholesale platform</h2>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 my-8'>
                <div className='flex flex-col justify-center items-center border-2 border-green-300 rounded-md p-4 bg-green-50 shadow-xl'>
                    <img className='w-64' src="https://i.ibb.co/XxDPxTVT/order-box.png" alt="" />
                    <h3 className='text-4xl my-4'>Orders</h3>
                    <p className='text-xl text-zinc-700 text-center'>Collect, Track and Manage your orders across multiple channels</p>
                </div>

                <div className='flex flex-col justify-center items-center border-2 border-green-300 rounded-md p-4 bg-green-50 shadow-xl'>
                    <img className='w-64' src="https://i.ibb.co/LTPPYgb/shipment-box.png" alt="" />
                    <h3 className='text-4xl my-4'>Shipments</h3>
                    <p className='text-xl text-zinc-700 text-center'>Simplify and track your shipments in real-time</p>
                </div>

                <div className='flex flex-col justify-center items-center border-2 border-green-300 rounded-md p-4 bg-green-50 shadow-xl'>
                    <img className='w-64' src="https://i.ibb.co/HTBBrKxh/credit-cards.png" alt="" />
                    <h3 className='text-4xl my-4'>Payments</h3>
                    <p className='text-xl text-zinc-700 text-center'>Securely collect payments in multiple currencies through major gateways</p>
                </div>

                <div className='flex flex-col justify-center items-center border-2 border-green-300 rounded-md p-4 bg-green-50 shadow-xl'>
                    <img className='w-64' src="https://i.ibb.co/4wrFjtnc/portals-online.png" alt="" />
                    <h3 className='text-4xl my-4'>Portals</h3>
                    <p className='text-xl text-zinc-700 text-center'>Centralized platform for your B2B wholesale needs</p>
                </div>



            </div>
            
        </div>
    );
};

export default Manage;