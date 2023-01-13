import { createBrowserRouter } from "react-router-dom";
import PrivateRoutes from "../components/PrivateRoutes/PrivateRoutes";
import Main from "../layout/Main";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import Signin from "../pages/Signin/Signin";
import Signup from "../pages/Signup/Signup";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {path: "/", element: <Home />},
            {path: "/shop", element: <Shop />},
            {path: "/signin", element: <Signin />},
            {path: "/signup", element: <Signup />},
            {path: "/private", element: <PrivateRoutes />},
        ]
    },
]);