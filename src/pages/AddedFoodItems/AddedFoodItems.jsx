import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import AddedFoodItemsRow from "./AddedFoodItemsRow";

const AddedFoodItems = () => {
  const { user } = useAuth();

  const [addedFoodItems, setAddedFoodItems] = useState([]);

  const url = `http://localhost:5000/addedFoodItems?madeBy=${user?.email}`;
  //   console.log(url);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAddedFoodItems(data));
  }, [url]);
  return (
    <div>
      <h2 className="text-4xl font-bold text-center mt-10 mb-8">
        My Added Food Items
      </h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Food Image</th>
              <th>Food Name</th>
              <th>Description</th>
              <th>Price</th>
              <th>Food Category</th>
              <th>Quantity</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {addedFoodItems.map((addedFoodItem) => (
              <AddedFoodItemsRow
                key={addedFoodItem._id}
                addedFoodItem={addedFoodItem}
              ></AddedFoodItemsRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddedFoodItems;
