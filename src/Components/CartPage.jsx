import React from 'react';
import { use } from 'react';
import { useLoaderData } from 'react-router';
import { AuthContext } from '../provider/AuthProvider';
import CartPageEmpty from './CartPageEmpty';
import CartPageMiddle from './CartPageMiddle';
import { useState } from 'react';
import { useEffect } from 'react';

const CartPage = () => {

    const { user } = use(AuthContext);
    const cartData = useLoaderData();
    const [availableCartItems, setAvailableCartItems] = useState([]);

    useEffect(() => {
        const myCartData = cartData.filter(cart => user.email === cart.usersEmail);
        setAvailableCartItems(myCartData);
    }, [])

    const handleRemainingCart = (id) => {
        const remainingRooms = availableCartItems.filter(availableCartItem => availableCartItem._id !== id);
        setAvailableCartItems(remainingRooms);
    }

    return (
        <div className='max-w-[1600px] mx-auto px-4 py-2 lg:py-8'>
            {
                availableCartItems.length === 0 ? <CartPageEmpty></CartPageEmpty> : <CartPageMiddle availableCartItems={availableCartItems} handleRemainingCart={handleRemainingCart}></CartPageMiddle>
            }
        </div>
    );
};

export default CartPage;