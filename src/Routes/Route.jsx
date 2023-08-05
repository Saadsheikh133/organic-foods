import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AddFood from "../Pages/AddFood/AddFood";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: 'register',
                element: <Register></Register>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "addFood",
                element: <AddFood></AddFood>
            }
        ]
    }
])
export default router;