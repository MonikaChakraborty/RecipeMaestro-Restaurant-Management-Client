import { useEffect, useState } from "react";
import Navbar from "../Shared/Navbar";
import FoodItemCard from "./FoodItemCard";

const AllFoodItems = () => {
  const [foodItems, setFoodItems] = useState([]);

  useEffect(() => {
    fetch("allFood.json")
      .then((res) => res.json())
      .then((data) => setFoodItems(data));
  }, []);

  return (
    <div>
      <Navbar></Navbar>
      <h1 className="text-3xl lg:text-5xl font-extrabold text-yellow-800 mb-10 text-center bg-gradient-to-r from-transparent to-yellow-700 mt-10">
        🌮 Discover Culinary Delights 🍜
        <span className="block text-sm lg:text-base text-gray-600 mt-2">
          Explore a world of flavors in our diverse menu
        </span>
      </h1>

      <div className="max-w-6xl mx-auto">
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
