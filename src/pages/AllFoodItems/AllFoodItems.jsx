import { useEffect, useState } from "react";
import Navbar from "../Shared/Navbar";
import FoodItemCard from "./FoodItemCard";
import Footer from "../Shared/Footer";
import { useLoaderData } from "react-router-dom";

const AllFoodItems = () => {
  const [foodItems, setFoodItems] = useState([]);
  const [itemsPerPage, setItemsPerPage] = useState(9);

  const { count } = useLoaderData();

  // const itemsPerPage = 9;
  const numberOfPages = Math.ceil(count / itemsPerPage);

  console.log(count);
  console.log(itemsPerPage);
  console.log(numberOfPages);

  // const pages = []
  // for(let i=0; i<numberOfPages; i++){
  //   pages.push(i)
  // }

  const pages = [...Array(numberOfPages).keys()];
  console.log(pages);

  useEffect(() => {
    fetch("http://localhost:5000/allFoodItems")
      .then((res) => res.json())
      .then((data) => setFoodItems(data));
  }, []);
  
const handleItemsPerPage = e => {
  const val = parseInt(e.target.value);
  console.log(val);
  setItemsPerPage(val)
}
  return (
    <div>
      <Navbar></Navbar>
      <h1 className="text-3xl lg:text-5xl font-extrabold text-yellow-800 mb-10 text-center bg-gradient-to-r from-transparent to-yellow-700 mt-10">
        🌮 Discover Culinary Delights 🍜
        <span className="block text-sm lg:text-base text-gray-600 mt-2">
          Explore a world of flavors in our diverse menu
        </span>
      </h1>

      <div className="max-w-6xl mx-auto mb-24">
        {/* pagination */}
        <div className="pagination">
          {pages.map((page) => (
            <button key={page}>{page}</button>
          ))}
          <select value={itemsPerPage} onChange={handleItemsPerPage} name="" id="">
            <option value="5">5</option>
            <option value="9">9</option>
            <option value="10">10</option>
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
