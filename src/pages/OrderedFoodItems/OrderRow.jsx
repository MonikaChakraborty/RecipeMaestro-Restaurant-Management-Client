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

import Swal from "sweetalert2";

// export default OrderRow;

const OrderRow = ({ order }) => {
  const {
    _id,
    foodImage,
    foodName,
    foodCategory,
    price,
    quantity,
    madeBy,
    purchaseDate,
  } = order;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //   Swal.fire({
        //     title: "Deleted!",
        //     text: "Your file has been deleted.",
        //     icon: "success"
        //   });

        fetch(`http://localhost:5000/orders/${_id}`, {
            method: 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your order has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-100">
      <td className="py-4">
        <img
          className="rounded-lg h-16 w-16 object-cover"
          src={foodImage}
          alt={foodName}
        />
      </td>
      <td className="py-4">{foodName}</td>
      <td className="py-4">{foodCategory}</td>
      <td className="py-4">${price}</td>
      <td className="py-4">{quantity}</td>
      <td className="py-4">{madeBy}</td>
      <td className="py-4">{purchaseDate}</td>
      <td>
        <button
          onClick={() => handleDelete(_id)}
          className="btn text-white bg-red-500 hover:bg-red-600"
        >
          Delete
        </button>
      </td>
    </tr>
  );
};

export default OrderRow;
