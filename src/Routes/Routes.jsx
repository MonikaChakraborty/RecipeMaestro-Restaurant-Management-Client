import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import AllFoodItems from "../pages/AllFoodItems/AllFoodItems";
import Blog from "../pages/Blog/Blog";

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
            element: <AllFoodItems></AllFoodItems>
        },
        {
            path: '/blog',
            element: <Blog></Blog>
        }

      ]
    },
  ]);


  export default router;