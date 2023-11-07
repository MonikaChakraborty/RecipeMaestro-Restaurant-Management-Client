import { Link } from "react-router-dom";
import banner from "../../assets/banner2.avif";

const Banner = () => {
  return (
    <div className="relative mb-16 lg:mb-24">
      {/* Background Image */}
      <img
        className="h-screen w-full object-cover"
        src={banner}
        alt="TechVerse Banner"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black opacity-80"></div>

      {/* Text */}
      <div className="absolute inset-0 text-center flex flex-col mt-48 ">
        <h1 className="text-3xl lg:text-5xl font-bold text-sky-100 mb-5">
          Flavor Meets Mastery at Recipe Maestro
        </h1>
        <p className="lg:text-lg lg:font-medium text-gray-200 px-3">
          Welcome to Recipe Maestro, where every meal is a masterpiece. Immerse
          yourself in a world of culinary excellence, where our chefs blend
          creativity and tradition to create dishes that delight the senses.
          Explore our menus and elevate your dining experience
        </p>

        <Link to="/allFoodItems">
          <button className="bg-transparent border hover:bg-yellow-950 mt-10 text-white font-bold py-2 px-8 rounded-full mx-auto block transition duration-300 ease-in-out transform hover:scale-105">
            All Menus
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
