import React from 'react';
import { NavLink } from 'react-router';

const NavLinks = () => {
    return (
        <>

            <NavLink className={`mr-8 text-2xl hover:underline decoration-2`} to="/">Home</NavLink>
            <NavLink className={`mr-8 text-2xl hover:underline decoration-2`} to="/add">Add</NavLink>
            <NavLink className={`mr-8 text-2xl hover:underline decoration-2`} to="/allProducts">All Products</NavLink>
            <NavLink className={`mr-8 text-2xl hover:underline decoration-2`} to="/listing">My Listings</NavLink>
        </>
    );
};

export default NavLinks;