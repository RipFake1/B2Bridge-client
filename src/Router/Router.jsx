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