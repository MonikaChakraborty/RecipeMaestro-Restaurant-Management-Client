import { useEffect } from "react";
import { Link } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css'

const TopFoodCard = ({food}) => {
  useEffect(() => {
    AOS.init()
  }, [])
    const {_id, foodImage, foodName, foodCategory, price} = food;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure className="px-10 pt-10">
        <img
          src={foodImage}
          alt=""
          className="w-full h-64 object-cover rounded-xl" data-aos="zoom-in"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="1000"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title text-gray-700">{foodName}</h2>
        <p className="text-gray-700 font-bold text-lg">{foodCategory}</p>

        <p className="text-gray-700 font-medium">{price}</p>
        <div className="card-actions">
        <Link to={`/details/${_id}`}>
          <button className="btn bg-yellow-900 text-gray-200 hover:bg-yellow-950">Details</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TopFoodCard;
