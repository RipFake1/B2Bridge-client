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
import MyProducts from "../Components/MyProducts";
import Categories from "../Components/Categories";
import ProductDetails from "../Components/ProductDetails";
import UpdateProduct from "../Components/UpdateProduct";
import CartPage from "../Components/CartPage";


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
                loader: () => fetch('https://btobridge-server.vercel.app/publicAllProducts'),
                hydrateFallbackElement: <Loading></Loading>,
            },
            {
                path: "/categories/:categoryName",
                element: <Categories></Categories>,
            },
            {
                path: "/allProducts/:id",
                element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
                loader: ({ params }) => fetch(`https://btobridge-server.vercel.app/allproducts/${params.id}`, {
                    method: 'GET',
                    credentials: 'include',
                }),
                hydrateFallbackElement: <Loading></Loading>,
            },
            {
                path: "/add",
                element: <PrivateRoute><Add></Add></PrivateRoute>,
            },
            {
                path: "/allProducts",
                element: <PrivateRoute><AllProducts></AllProducts></PrivateRoute>,
                loader: () => fetch('https://btobridge-server.vercel.app/allproducts', {
                    method: 'GET',
                    credentials: 'include',
                }),
                hydrateFallbackElement: <Loading></Loading>,
            },
            {
                path: "/updateProduct/:id",
                element: <PrivateRoute><UpdateProduct></UpdateProduct></PrivateRoute>,
                loader: ({ params }) => fetch(`https://btobridge-server.vercel.app/allproducts/${params.id}`, {
                    method: 'GET',
                    credentials: 'include',
                }),
                hydrateFallbackElement: <Loading></Loading>,
            },
            {
                path: "/myProducts",
                element: <PrivateRoute><MyProducts></MyProducts></PrivateRoute>,
                loader: () => fetch('https://btobridge-server.vercel.app/allproducts', {
                    method: 'GET',
                    credentials: 'include',
                }),
                hydrateFallbackElement: <Loading></Loading>,
            },
            {
                path: "/cart",
                element: <PrivateRoute><CartPage></CartPage></PrivateRoute>,
                loader: () => fetch('https://btobridge-server.vercel.app/orderProduct', {
                    method: 'GET',
                    credentials: 'include',
                }),
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