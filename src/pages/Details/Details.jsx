import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import { useState } from "react";
import Modal from "react-modal";
import { FaTimes } from "react-icons/fa";

const Details = ({ foodItem }) => {
  const details = useLoaderData();
  // const { _id, foodName, foodImage, foodCategory, price, quantity } = foodItem;

  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div>
      <Navbar />
      <div className="bg-gray-100 min-h-screen">
        <div className="max-w-7xl mx-auto py-12">
          <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
            <h1 className="text-4xl font-extrabold text-gray-800 mb-8">
              Details of {details.foodName}
            </h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="cursor-pointer">
                <img
                  className="w-full h-[500px] object-cover rounded-lg shadow-md"
                  src={details.foodImage}
                  alt=""
                  onClick={openModal}
                />
                {/* Modal for image preview */}
                <Modal
                  isOpen={modalIsOpen}
                  onRequestClose={closeModal}
                  contentLabel="Image Preview"
                >
                  <img
                    className="w-full h-auto"
                    src={details.foodImage}
                    alt=""
                  />
                  <button
                    className="absolute top-3 right-3 rounded p-2 text-red-500 bg-gray-300 hover:bg-gray-400 cursor-pointer"
                    onClick={closeModal}
                  >
                    <FaTimes size={24} />
                  </button>
                </Modal>
              </div>
              <div className="flex flex-col mt-20">
                <h1 className="text-3xl font-bold mb-4 text-yellow-800">
                  {details.foodName}
                </h1>
                <p className="text-gray-600 mb-2">
                  Category: {details.foodCategory}
                </p>
                <p className="text-xl font-bold mb-2 text-yellow-800">
                  ${details.price}
                </p>
                <p className="mb-4 text-gray-700">Made by: {details.madeBy}</p>
                <p className="text-gray-600 mb-6">
                  Origin: {details.foodOrigin}
                </p>
                <p className="mb-10 text-gray-700">{details.description}</p>

                <Link to={`/foodPurchase/${details._id}`}>
                <button className="btn bg-yellow-800 text-gray-200 text-lg normal-case transform transition-transform  hover:bg-yellow-950 hover:scale-105">
                  Order Now
                </button>
                </Link>
              </div>
            </div>
            <div className="mt-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">
                Customer Reviews
              </h2>

              {/* Customer reviews section */}
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <p className="text-gray-800 font-bold">John Doe</p>
                  <p className="text-gray-600">
                    Excellent dish! Highly recommended.
                  </p>
                </div>
              </div>
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gray-300 rounded-full mr-4"></div>
                <div>
                  <p className="text-gray-800 font-bold">Jane Smith</p>
                  <p className="text-gray-600">Delicious! Will order again.</p>
                </div>
              </div>
              {/* Review form */}
              <form className="mt-4">
                <label htmlFor="review" className="block text-gray-800 mb-2">
                  Your Review:
                </label>
                <textarea
                  id="review"
                  name="review"
                  rows="4"
                  className="w-full border p-2 rounded-md"
                  placeholder="Share your thoughts about this dish..."
                ></textarea>
                <button className="btn bg-yellow-800 text-white hover:bg-yellow-950 mt-4">
                  Submit Review
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
