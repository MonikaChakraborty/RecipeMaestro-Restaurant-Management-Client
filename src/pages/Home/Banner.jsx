import { Link } from "react-router-dom";
import banner from "../../assets/banner2.avif";
import { motion } from "framer-motion";


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
      <div className="absolute inset-0 text-center flex flex-col justify-center mt-24 lg:mt-48 ">
      <motion.h1
          initial= { {y: -900} }
          animate= {{y: 0}}
          transition = {{duration:"1", delay: "0.5"}}
          className="text-lg md:text-2xl lg:text-5xl font-bold text-sky-100 mb-2 md:mb-4"
        >
         Flavor Meets Mastery at Recipe Maestro
        </motion.h1>
        <p data-aos="fade-up"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000" className="lg:text-lg lg:font-medium text-sm text-gray-200 lg:px-3">
          Welcome to Recipe Maestro, where every meal is a masterpiece. Immerse
          yourself in a world of culinary excellence, where our chefs blend
          creativity and tradition to create dishes that delight the senses.
          Explore our menus and elevate your dining experience
        </p>

        <Link to="/allFoodItems">
          <button data-aos="zoom-in"
     data-aos-easing="ease-out-cubic"
     data-aos-duration="1000"  className="bg-transparent border hover:bg-yellow-950 mt-3 lg:mt-10 text-white font-bold py-2 px-8 rounded-full mx-auto block transition duration-300 ease-in-out transform hover:scale-105">
            All Menus
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Banner;
