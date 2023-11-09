import { Link } from "react-router-dom";

const AddedFoodItemsRow = ({ addedFoodItem }) => {
    
  const {
    _id,
    foodImage,
    foodName,
    description,
    foodCategory,
    price,
    quantity,
  } = addedFoodItem;
  return (
    <tr className="border-b border-gray-200 hover:bg-gray-100">
      <td className="py-4">
        <img
          className="rounded-lg h-16 w-16 object-cover"
          src={foodImage}
          alt={foodName}
        />
      </td>
      <td className="py-">{foodName}</td>
      <td className="py-4">{description}</td>
      <td className="py-4">{foodCategory}</td>
      <td className="py-4">${price}</td>
      <td className="py-4">{quantity}</td>
      <td>
        <Link to={`/addedFoodItems/updateAddedFoodItems/${_id}`}>
        <button className="btn text-white bg-orange-500 hover:bg-orange-600">
          Update
        </button>
        </Link>
      </td>
    </tr>
  );
};

export default AddedFoodItemsRow;
