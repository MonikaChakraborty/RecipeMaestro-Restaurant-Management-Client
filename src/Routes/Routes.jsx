import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import AllFoodItems from "../pages/AllFoodItems/AllFoodItems";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
            path: '/allFoodItems',
            element: <AllFoodItems></AllFoodItems>,
            loader: () => fetch('http://localhost:5000/allFoodItemsCount')
        },
        {
            path: '/blog',
            element: <Blog></Blog>
        },
        {
            path: '/login',
            element: <Login></Login>,
        },
        {
          path: '/register',
          element: <Register></Register>,
      }

      ]
    },
  ]);


  export default router;