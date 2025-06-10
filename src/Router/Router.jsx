import {
    createBrowserRouter,
} from "react-router";
import Root from "../Layouts/Root";
import ErrorPage from "../Components/ErrorPage";
import Home from "../Components/Home";


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
                element: <h2>login</h2>
            },
            {
                path: "/register",
                element: <h2>sign up</h2>
            }
        ]
    },
    // {
    //     path:"/*",
    //     element: <Error></Error>,
    // },
]);

export default router;