import { useEffect, useState } from "react";
// import Navbar from "../Shared/Navbar";
import FoodItemCard from "./FoodItemCard";
import { Link, useLoaderData } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const AllFoodItems = () => {
  const { user, logOut } = useAuth();
  const [foodItems, setFoodItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [searchTerm, setSearchTerm] = useState("");

  const { count } = useLoaderData();

  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];

  useEffect(() => {
    const apiUrl = `https://restaurant-management-system-server-kappa.vercel.app/allFoodItems?page=${currentPage}&size=${itemsPerPage}&searchTerm=${searchTerm}`;
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setFoodItems(data));
  }, [currentPage, itemsPerPage, searchTerm]);

  const handleItemsPerPage = (e) => {
    const val = parseInt(e.target.value);
    setItemsPerPage(val);
    setCurrentPage(0);
  };

  const handlePrevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  return (
    <div className="">
      <div className="flex flex-row justify-center items-center bg-gradient-to-r from-transparent to-yellow-700 p-8 mb-10">
        <Link to="/">
          {" "}
          <button className="rounded absolute left-10 p-3 top-16  bg-yellow-900 text-gray-200 hover:bg-yellow-950 font-bold text-lg">
            Go Back
          </button>
        </Link>
        <div className="text-center">
          <h1 className="text-3xl lg:text-5xl font-extrabold  text-yellow-800  text-center ">
            🌮 Discover Culinary Delights 🍜
            <span className="block text-sm lg:text-base text-gray-600 mt-2">
              Explore a world of flavors in our diverse menu
            </span>
          </h1>
        </div>
        <div className="right-16 absolute ">
          {user?.email ? (
            <div className="dropdown dropdown-end">
              <label
                tabIndex={0}
                className="btn-circle w-16 h-16 rounded-lg cursor-pointer
               avatar mr-3 "
              >
                <div className="w-48 rounded-full">
                  <img src={user.photoURL} alt={user.displayName}  />
                </div>
              </label>

              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content z-[1] shadow bg-base-200 rounded-box w-30 lg:w-56 mt-3"
              >
                <div className="mb-2">
                  <p className="text-sm rounded-lg text-center p-2 font-bold lg:text-base bg-slate-200 normal-case">
                    {user.displayName}
                  </p>
                </div>

                <div>
                  <Link to="/addFoodItems">
                    <button className="btn btn-block btn-ghost text-sm lg:text-base  text-right bg-slate-200 normal-case mb-2">
                      Add Food Item
                    </button>
                  </Link>
                </div>

                <div>
                  <Link to="/addedFoodItems">
                    <button className="btn btn-block btn-ghost text-sm lg:text-base bg-slate-200 normal-case mb-2">
                      My Added Food Items
                    </button>
                  </Link>
                </div>

                <div>
                  <Link to="/orders">
                    <button className="btn btn-block btn-ghost text-sm lg:text-base  bg-slate-200 normal-case mb-2">
                      My ordered Food Items
                    </button>
                  </Link>
                </div>

                <div>
                  <button
                    onClick={logOut}
                    className="btn btn-block btn-ghost text-sm lg:text-base  bg-slate-200 normal-case"
                  >
                    Logout
                  </button>
                </div>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              <button className="btn mr-3">Login</button>
            </Link>
          )}
        </div>
      </div>

      {/* Search input and button */}
      <div className="mb-4 flex justify-end max-w-screen-xl mx-auto">
        <input
          type="text"
          placeholder="Search by food name..."
          className="p-2 border border-gray-300 rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="max-w-screen-xl mx-auto mb-24">
        {/* Pagination */}
        <div className="text-center pagination mb-10 text-lg">
          <p className="text-gray-600 font-bold">Current page: {currentPage}</p>
          <button
            onClick={handlePrevPage}
            className="p-2 rounded font-medium bg-gray-600 text-white mr-2"
          >
            Prev
          </button>
          {pages.map((page) => (
            <button
              className={`${
                currentPage === page
                  ? "bg-yellow-900 text-gray-200"
                  : "bg-gray-300 text-gray-800"
              } mr-3 py-1 px-3 font-bold rounded mt-3`}
              onClick={() => setCurrentPage(page)}
              key={page}
            >
              {page}
            </button>
          ))}
          <button
            onClick={handleNextPage}
            className="p-2 rounded font-medium  bg-gray-600  text-white mr-3"
          >
            Next
          </button>
          <select
            className="bg-gray-300 py-1 px-3 font-bold rounded"
            value={itemsPerPage}
            onChange={handleItemsPerPage}
            name=""
            id=""
          >
            <option value="6">6</option>
            <option value="9">9</option>
            <option value="12">12</option>
            <option value="18">18</option>
          </select>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {foodItems.map((foodItem) => (
            <FoodItemCard
              key={foodItem.foodName}
              foodItem={foodItem}
            ></FoodItemCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllFoodItems;
