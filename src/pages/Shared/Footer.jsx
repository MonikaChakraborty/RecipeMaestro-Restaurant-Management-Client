import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import { BsFacebook, BsTwitter, BsInstagram } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <div className="bg-yellow-950 py-12">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-16 text-gray-200">
          <div>
            <p className="text-lg">
              Elevate your dining experience with Recipe Maestro, where flavor meets mastery. Explore a world of culinary excellence!
            </p>

            <div className="flex space-x-4 mt-6">
              <Link to="#" className="text-blue-800 bg-white rounded-full border">
                <BsFacebook size={26}></BsFacebook>
              </Link>

              <Link to="#" className="text-sky-400">
                <BsTwitter size={26}></BsTwitter>
              </Link>

              <Link to="#" className="text-pink-400">
                <BsInstagram size={26}></BsInstagram>
              </Link>
            </div>
          </div>

          <div className="flex flex-col items-center">
            <img className="w-28 mb-4" src={logo} alt="logo" />

            <a className="text-xl font-bold">RecipeMaestro</a>
          </div>

          <div>
            <div className="mb-6">
              <h1 className="text-2xl font-bold mb-4">Contact Information</h1>
              <p className="mb-2">
                <span className="font-bold">Address:</span> 123 Culinary Street, Foodville
              </p>

              <p className="mb-2">
                <span className="font-bold">Call:</span> +1 (123) 456-7890
              </p>

              <p className="mb-2">
                <span className="font-bold">Email:</span> info@recipemaestro.com
              </p>
            </div>

            <div>
              <h1 className="text-2xl font-bold mb-4">Opening Times</h1>
              <p>Monday - Friday: 10:00 AM - 10:00 PM</p>
              <p>Saturday - Sunday: 12:00 PM - 11:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-800 text-center text-gray-300 py-4">
        <p>&copy; 2023 RecipeMaestro. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
