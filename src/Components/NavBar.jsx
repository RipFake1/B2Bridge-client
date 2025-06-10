import React from 'react';
import NavLinks from './NavLinks';
import RegistrationButtons from './RegistrationButtons';

const NavBar = () => {
    return (
        <div className='max-w-[1600px] mx-auto p-4'>
            <div className='flex flex-col gap-2 md:flex-row justify-between items-center sm:px-4 md:px-20 py-8'>
                <img className='h-[56px]' src="https://i.ibb.co/5gXYyPp8/white-logo-2.png" alt="" />
                <div>
                    <NavLinks></NavLinks>
                </div>

                <div className='flex justify-center items-center gap-4'>
                    {/* {
                        user ? <ProfilePicture></ProfilePicture> : <SignUpButtons></SignUpButtons>
                    } */}

                    <RegistrationButtons></RegistrationButtons>
                </div>
            </div>
             <div className="divider divider-success"></div>
        </div>
    );
};

export default NavBar;