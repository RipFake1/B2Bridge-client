import {
    createBrowserRouter,
} from "react-router";
import Root from "../Layouts/Root";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Components/Home";
import Login from "../Components/Login";
import Register from "../Components/Register";


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