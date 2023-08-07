import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main/Main";
import Home from "../Pages/Home/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import AddFood from "../Pages/AddFood/AddFood";
import AllFoods from "../Pages/AllFoods/AllFoods";
import ManageUser from "../Pages/DashBoard/Admin/Manageuser/ManageUser";

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
            },
            {
                path: 'allFoods',
                element: <AllFoods></AllFoods>
            },
            {
                path: 'manageUsers',
                element: <ManageUser></ManageUser>
            }
        ]
    }
])
export default router;