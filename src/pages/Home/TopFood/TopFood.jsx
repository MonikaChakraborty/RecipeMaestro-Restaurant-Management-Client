import { useEffect, useState } from "react";
import TopFoodCard from "./TopFoodCard";

const TopFood = () => {
  const [topFood, setTopFood] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/topFood")
      .then((res) => res.json())
      .then((data) => setTopFood(data));
  }, []);
  return (
    <div className="lg:mb-24 mb-12">
      <h1 className=" text-3xl lg:text-4xl text-center font-bold text-yellow-900">
        Top Food Items
      </h1>
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topFood.map((food) => (
            <TopFoodCard key={topFood._id} food={food}></TopFoodCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopFood;
