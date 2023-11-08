import { useEffect, useState } from "react";
import Navbar from "../Shared/Navbar";
import FoodItemCard from "./FoodItemCard";
import Footer from "../Shared/Footer";
import { useLoaderData } from "react-router-dom";
// import { data } from "autoprefixer";

const AllFoodItems = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(9);
  const [searchTerm, setSearchTerm] = useState("");

  const { count } = useLoaderData();

  const numberOfPages = Math.ceil(count / itemsPerPage);
  const pages = [...Array(numberOfPages).keys()];

  useEffect(() => {
    const apiUrl = `http://localhost:5000/allFoodItems?page=${currentPage}&size=${itemsPerPage}&searchTerm=${searchTerm}`;
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

  // const handleSearch = () => {
  //   setCurrentPage(0);
  //   fetch(`http://localhost:5000/allFoodItems?page=0&size=${itemsPerPage}&searchTerm=${searchTerm}`)
  //     .then((res) => res.json())
  //     .then((data) => setFoodItems(data));
  // };

  return (
    <div>
      <Navbar></Navbar>
      <h1 className="text-3xl lg:text-5xl font-extrabold text-yellow-800 mb-10 text-center bg-gradient-to-r from-transparent to-yellow-700 mt-10">
        🌮 Discover Culinary Delights 🍜
        <span className="block text-sm lg:text-base text-gray-600 mt-2">
          Explore a world of flavors in our diverse menu
        </span>
      </h1>

      {/* Search input and button */}
      <div className="mb-4 flex justify-end">
        <input
          type="text"
          placeholder="Search by food name..."
          className="p-2 border border-gray-300 rounded"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <div className="max-w-screen-xl mx-auto mb-24">
        {/* pagination */}
        <div className="text-center pagination mb-10 text-lg">
          <p className="text-gray-600 font-bold ">
            Current page: {currentPage}
          </p>
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
              } mr-3  py-1 px-3 font-bold rounded mt-3`}
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
      <Footer></Footer>
    </div>
  );
};

export default AllFoodItems;
