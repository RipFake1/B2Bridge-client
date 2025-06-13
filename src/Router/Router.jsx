import {
    createBrowserRouter,
} from "react-router";
import Root from "../Layouts/Root";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";
import ErrorPage from "../Components/ErrorPage";
import Add from "../Components/Add";
import PrivateRoute from "../provider/PrivateRoute";
import AllProducts from "../Components/AllProducts";
import Loading from "../components/Loading";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Root></Root>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                index: true,
                path: '/',
                element: <Home></Home>,
                // loader: () => fetch('https://roomies-server-seven.vercel.app/roommates'),
                // hydrateFallbackElement: <Loading></Loading>,
            },
            {
                path: "/add",
                element: <PrivateRoute><Add></Add></PrivateRoute>,
            },
            {
                path: "/allProducts",
                element: <PrivateRoute><AllProducts></AllProducts></PrivateRoute>,
                loader: () => fetch('http://localhost:3000/allproducts'),
                hydrateFallbackElement: <Loading></Loading>,
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            }
        ]
    },
    // {
    //     path:"/*",
    //     element: <Error></Error>,
    // },
]);

export default router;