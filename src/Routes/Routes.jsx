import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import AllFoodItems from "../pages/AllFoodItems/AllFoodItems";
import Blog from "../pages/Blog/Blog";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import Details from "../pages/Details/Details";
import FoodPurchase from "../pages/FoodPurchase/FoodPurchase";
import PrivateRoute from "./PrivateRoute";
import AddFoodItems from "../pages/AddFoodItems/AddFoodItems";
import AddedFoodItems from "../pages/AddedFoodItems/AddedFoodItems";
import OrderedFoodItems from "../pages/OrderedFoodItems/OrderedFoodItems";
import UpdateAddedFoodItems from "../pages/UpdateAddedFoodItems/UpdateAddedFoodItems";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allFoodItems",
        element: <AllFoodItems></AllFoodItems>,
        loader: () =>
          fetch(
            "https://restaurant-management-system-server-kappa.vercel.app/allFoodItemsCount"
          ),
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/details/:id",
        element: <Details></Details>,
        loader: ({ params }) =>
          fetch(
            `https://restaurant-management-system-server-kappa.vercel.app/details/${params.id}`
          ),
      },
      {
        path: "/foodPurchase/:id",
        element: (
          <PrivateRoute>
            <FoodPurchase></FoodPurchase>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://restaurant-management-system-server-kappa.vercel.app/foodPurchase/${params.id}`
          ),
      },

      {
        path: "/addFoodItems",
        element: (
          <PrivateRoute>
            <AddFoodItems></AddFoodItems>
          </PrivateRoute>
        ),
      },

      {
        path: "/addedFoodItems",
        element: <AddedFoodItems></AddedFoodItems>,
      },

      {
        path: "/addedFoodItems/updateAddedFoodItems/:id",
        element: <UpdateAddedFoodItems></UpdateAddedFoodItems>,
        loader: ({ params }) =>
          fetch(
            `https://restaurant-management-system-server-kappa.vercel.app/addedFoodItems/updateAddedFoodItems/${params.id}`
          ),
      },

      {
        path: "/orders",
        element: (
          <PrivateRoute>
            <OrderedFoodItems></OrderedFoodItems>
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
