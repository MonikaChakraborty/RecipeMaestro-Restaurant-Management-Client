import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import useAuth from "../../hooks/useAuth";
import Swal from "sweetalert2";
import { useState } from "react";

const FoodPurchase = () => {
  const foodItem = useLoaderData();
  const { foodName, quantity, foodImage, price, foodCategory, foodOrigin } =
    foodItem;
  const { user } = useAuth();

  const [errorMessage, setErrorMessage] = useState("");

  const handleConfirmOrder = (event) => {
    event.preventDefault();
    setErrorMessage("");

    const form = event.target;
    const name = form.name.value;
    const email = user?.email;
    const orderQuantity = parseInt(form.quantity.value);

    // const quantity = form.quantity.value;
    const purchaseDate = new Date();

    // Check if the available quantity is zero
    if (quantity === 0) {
      setErrorMessage("This item is not available for purchase.");
      return;
    }

    // Check if the order quantity is greater than the available quantity
    if (orderQuantity > quantity) {
      setErrorMessage("Cannot order more than available quantity.");
      return;
    }

    const order = {
      foodImage: foodImage,
      foodName: foodName,
      foodCategory: foodCategory,
      price: price,
      foodOrigin: foodOrigin,
      quantity: orderQuantity,
      userName: name,
      email,
      purchaseDate: purchaseDate.toLocaleString(),
    };
    console.log(order);

    fetch("http://localhost:5000/orders", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(order),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Order Successful!",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-6xl mx-auto py-12">
        <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">
          <h1 className="text-4xl font-extrabold text-gray-800 mb-8">
            Place Your Order
          </h1>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <img
                className="w-full h-[400px] object-cover rounded-lg shadow-md mb-4"
                src={foodImage}
                alt={foodName}
              />
            </div>
            <div className="flex flex-col">
              <form onSubmit={handleConfirmOrder} className="space-y-6">
                <div className="flex items-center mb-4">
                  <label className="text-gray-600 font-bold text-lg mr-2">
                    Food Name:
                  </label>
                  <input
                    type="text"
                    name="foodName"
                    defaultValue={foodName}
                    readOnly
                    className="input-field border px-4 py-2 rounded flex-grow text-lg"
                  />
                </div>

                <div className="flex items-center mb-4">
                  <label className="text-gray-600 font-bold text-lg mr-2">
                    Price:
                  </label>
                  <input
                    type="text"
                    name="price"
                    defaultValue={`$${price.toFixed(2)}`}
                    readOnly
                    className="input-field border px-4 py-2  rounded flex-grow text-lg"
                  />
                </div>

                <div className="flex items-center mb-4">
                  <label className="text-gray-600 font-bold text-lg mr-2">
                    Quantity:
                  </label>
                  <input
                    type="number"
                    name="quantity"
                    placeholder="Enter quantity"
                    className="input-field border px-4 py-2  rounded  text-lg flex-grow"
                    required
                  />
                </div>

                <div className="flex items-center mb-4">
                  <label className="text-gray-600 font-bold text-lg mr-2">
                    Buyer Name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={user?.displayName}
                    readOnly
                    className="input-field border px-4 py-2  rounded text-lg flex-grow"
                  />
                </div>

                <div className="flex items-center mb-4">
                  <label className="text-gray-600 font-bold mr-2 text-lg">
                    Buyer Email:
                  </label>
                  <input
                    type="email"
                    name="email"
                    defaultValue={user?.email}
                    readOnly
                    className="input-field border px-4 py-2 rounded flex-grow text-lg"
                  />
                </div>

                <div className="flex justify-center">
                  <button
                    className="btn bg-yellow-800 text-gray-200 text-lg normal-case transform transition-transform  hover:bg-yellow-950 hover:scale-105"
                    type="submit"
                  >
                    Confirm Order
                  </button>
                </div>
                {/* Display error message */}
                {errorMessage && <p className="text-red-500">{errorMessage}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodPurchase;
