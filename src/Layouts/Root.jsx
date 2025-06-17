import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import NavBar from '../Components/NavBar';
import Footer from '../Components/Footer';
import Loading from '../components/Loading';

const Root = () => {

    const { state } = useNavigation();

    return (
        <div>
            <header>
                <NavBar></NavBar>
            </header>

            <main>
                {state == "loading" ? <Loading></Loading> : <Outlet></Outlet>}
            </main>

            <footer>
                <Footer></Footer>
            </footer>
        </div>
    );
};

export default Root;