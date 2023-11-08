// import { useLoaderData } from "react-router-dom";
// import Navbar from "../Shared/Navbar";
// import useAuth from "../../hooks/useAuth";

// const FoodPurchase = () => {
//   const foodItem = useLoaderData();
//   const { _id, foodName, foodImage, foodCategory, price, quantity } = foodItem;
//   const {user} = useAuth();

//   const handleConfirmOrder = event => {
//     event.preventDefault();

//     const form = event.target;
//   }
//   return (
//     <div>
//       <Navbar></Navbar>
//       <div className="max-w-screen-xl mx-auto">
//       <h1>Order {foodName}</h1>
//         <img src={foodImage} alt="" />
        
//         <form onSubmit={handleConfirmOrder}>
//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Food Name</span>
//             </label>
//             <label className="input-group">
//               <input
//                 type="text"
//                 name="foodName"
//                 defaultValue={foodName}
//                 placeholder="Food Name"
//                 id=""
//               />
//             </label>
//           </div>

//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Price</span>
//             </label>
//             <label className="input-group">
//               <input
//                 type="text"
//                 name="price"
//                 defaultValue={price}
//                 placeholder="Price"
//                 id=""
//               />
//             </label>
//           </div>

//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Quantity</span>
//             </label>
//             <label className="input-group">
//               <input type="text" name="quantity" placeholder="Quantity" id="" />
//             </label>
//           </div>

//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Buyer Name</span>
//             </label>
//             <label className="input-group">
//               <input type="text" name="name" defaultValue={user?.displayName}  placeholder="Buyer Name" id="" />
//             </label>
//           </div>

//           <div className="form-control">
//             <label className="label">
//               <span className="label-text">Buyer Email</span>
//             </label>
//             <label className="input-group">
//               <input type="email" name="email" defaultValue={user?.email} placeholder="Buyer Email" id="" />
//             </label>
//           </div>

//           <div className="form-control">
//             <input className="btn" type="submit" value="Order Confirm" />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default FoodPurchase;


import { useLoaderData } from "react-router-dom";
import Navbar from "../Shared/Navbar";
import useAuth from "../../hooks/useAuth";

const FoodPurchase = () => {
  const foodItem = useLoaderData();
  const { foodName, foodImage, price, foodCategory, foodOrigin } = foodItem;
  const { user } = useAuth();

  const handleConfirmOrder = (event) => {
    event.preventDefault();

    const form = event.target;
    const name = form.name.value;
    const email = user?.email;
    const quantity = form.quantity.value;
    const purchaseDate = new Date();
    const order = {
        foodImage: foodImage,
        foodName: foodName,
        foodCategory: foodCategory,
        price: price,
        foodOrigin: foodOrigin,
        quantity,
        userName: name,
        email,
        purchaseDate: purchaseDate.toLocaleString(),
    }
    console.log(order);
    
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
                  <label className="text-gray-600 font-bold text-lg mr-2">Food Name:</label>
                  <input
                    type="text"
                    name="foodName"
                    defaultValue={foodName}
                    readOnly
                    className="input-field border px-4 py-2 rounded flex-grow text-lg"
                  />
                </div>

                <div className="flex items-center mb-4">
                  <label className="text-gray-600 font-bold text-lg mr-2">Price:</label>
                  <input
                    type="text"
                    name="price"
                    defaultValue={`$${price.toFixed(2)}`}
                    readOnly
                    className="input-field border px-4 py-2  rounded flex-grow text-lg"
                  />
                </div>

                <div className="flex items-center mb-4">
                  <label className="text-gray-600 font-bold text-lg mr-2">Quantity:</label>
                  <input
                    type="number"
                    name="quantity"
                    placeholder="Enter quantity"
                    className="input-field border px-4 py-2  rounded  text-lg flex-grow"
                    required
                  />
                </div>

                <div className="flex items-center mb-4">
                  <label className="text-gray-600 font-bold text-lg mr-2">Buyer Name:</label>
                  <input
                    type="text"
                    name="name"
                    defaultValue={user?.displayName}
                    readOnly
                    className="input-field border px-4 py-2  rounded text-lg flex-grow"
                  />
                </div>

                <div className="flex items-center mb-4">
                  <label className="text-gray-600 font-bold mr-2 text-lg">Buyer Email:</label>
                  <input
                    type="email"
                    name="email"
                    defaultValue={user?.email}
                    readOnly
                    className="input-field border px-4 py-2 rounded flex-grow text-lg"
                  />
                </div>

                <div className="flex justify-center">
                  <button className="btn bg-yellow-800 text-gray-200 text-lg normal-case transform transition-transform  hover:bg-yellow-950 hover:scale-105" type="submit">
                    Confirm Order
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodPurchase;



