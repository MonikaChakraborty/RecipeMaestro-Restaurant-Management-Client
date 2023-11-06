// const FoodItemCard = ({ foodItem }) => {
//   const {foodName, foodImage, foodCategory, price, quantity} = foodItem;
//   return (
//     <div className="card bg-base-100 shadow-xl">
//       <figure>
//         <img
//           src={foodImage}
//           alt=""
//         />
//       </figure>
//       <div className="card-body">
//         <h2 className="card-title">{foodName}</h2>
//         <h2 className="">Category: {foodCategory}</h2>
//         <p>Price: {price}$</p>
//         <p>Quantity: {quantity}</p>
//         <div className="card-actions justify-end">
//           <button className="btn btn-primary">Details</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default FoodItemCard;




const FoodItemCard = ({ foodItem }) => {
  const { foodName, foodImage, foodCategory, price, quantity } = foodItem;

  return (
    <div className="card bg-white shadow-md hover:shadow-lg transform hover:scale-105 transition duration-300 mb-24">
      <figure className="overflow-hidden">
        <img
          src={foodImage}
          alt={foodName}
          className="w-full h-64 object-cover"
        />
      </figure>
      <div className="card-body p-8">
        <h2 className="card-title text-xl font-semibold mb-2">{foodName}</h2>
        <p className="text-gray-700 font-bold text-lg">Category: {foodCategory}</p>
        <p className="text-gray-700 font-medium">Price: ${price}</p>
        <p className="text-gray-700">Quantity: {quantity}</p>
        <div className="card-actions mt-4 flex justify-end">
          <button className="btn bg-yellow-900 text-gray-200">Details</button>
        </div>
      </div>
    </div>
  );
};

export default FoodItemCard;

