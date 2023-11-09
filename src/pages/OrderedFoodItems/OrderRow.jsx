
// const OrderRow = ({order}) => {
//     const{foodImage, foodName, foodCategory, price, quantity, madeBy, purchaseDate} = order;
//      return (
//         <tr>
//         <div>
//         <th><img className="rounded-xl" src={foodImage}alt="" /></th>
//         </div>
//         <td>{foodName}</td>
//         <td>{foodCategory}</td>
//         <td>{price}</td>
//         <td>{quantity}</td>
//         <td>{madeBy}</td>
//         <td>{purchaseDate}</td>
//       </tr>
//     );
// };

// export default OrderRow;



const OrderRow = ({ order }) => {
  const { foodImage, foodName, foodCategory, price, quantity, madeBy, purchaseDate } = order;
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-100">
      <td className="py-4"><img className="rounded-lg h-16 w-16 object-cover" src={foodImage} alt={foodName} /></td>
      <td className="py-4">{foodName}</td>
      <td className="py-4">{foodCategory}</td>
      <td className="py-4">${price}</td>
      <td className="py-4">{quantity}</td>
      <td className="py-4">{madeBy}</td>
      <td className="py-4">{purchaseDate}</td>
      <td><button className="btn text-white bg-red-500 hover:bg-red-600">Delete</button></td>
    </tr>
  );
};

export default OrderRow;
