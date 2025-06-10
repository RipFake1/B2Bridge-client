import React from 'react';
import { Outlet } from 'react-router';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';

const Root = () => {
    return (
        <div>
            <header>
                <NavBar></NavBar>
            </header>

            <main>
                {/* {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>} */}
                <Outlet></Outlet>

            </main>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Root;