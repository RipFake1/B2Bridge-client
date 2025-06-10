import React from 'react';
import { Link } from 'react-router';

const RegistrationButtons = () => {
    return (
        <div className='flex justify-center items-center gap-6'>
            <Link to="/signUp">
                <button className='mr-6 border-2 border-green-500 hover:border-[#333333] hover:underline hover:cursor-pointer font-bold text-xl px-6 py-3 rounded-sm bg-green-500'>Sign Up</button>
            </Link>

            <Link to="/login">
                <button className='hover:underline text-white hover:cursor-pointer bg-[#333333] font-bold text-xl px-6 py-3 rounded-sm border-2 border-[#333333] hover:border-green-500 '>Login</button>
            </Link>
        </div>
    );
};

export default RegistrationButtons;