import Swal from "sweetalert2";
import css from "./OrderedItems.css";
// import useOrderedFoodItems from "../../hooks/useOrderedFoodItems";

// export default OrderRow;

const OrderRow = ({ order, onRefetch }) => {
  // const [orders, refetch] = useOrderedFoodItems();

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
      // background: 'rgb(161 98 7)',
      background:
        "#fff url(https://img.freepik.com/free-vector/hazardous-caution-alert-yellow-background-with-blank-space-vector_1017-45749.jpg?size=626&ext=jpg&ga=GA1.1.31107995.1700975448&semt=ais)",

      text: "You won't be able to revert this!",
      icon: "warning",
      width: 620,
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",

      customClass: {
        // confirmButton: 'confirm-button-class',
        title: "title-class",
        // icon: 'icon-class',
      },
    }).then((result) => {
      if (result.isConfirmed) {
        //   Swal.fire({
        //     title: "Deleted!",
        //     text: "Your file has been deleted.",
        //     icon: "success"
        //   });

        fetch(
          `https://restaurant-management-system-server-kappa.vercel.app/orders/${_id}`,
          {
            method: "DELETE",
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            
            if (data.deletedCount > 0) {
            

              Swal.fire({
                title: "Deleted!",
                // background: 'rgb(161 98 7)',
                background:
                  "#fff url(https://img.freepik.com/free-photo/flat-lay-red-arrow-cardboard-white-background-with-copy-space_23-2148459972.jpg?size=626&ext=jpg&ga=GA1.1.31107995.1700975448&semt=ais)",
                width: 550,
                text: "Your order has been deleted.",
                icon: "success",
                customClass: {
                  text: "text-class",
                },
              });
              onRefetch();
              
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
