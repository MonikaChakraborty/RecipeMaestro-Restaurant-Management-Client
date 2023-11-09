import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";

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
      <h2 className="text-4xl font-bold">My Added Food Items: {addedFoodItems.length}</h2>

      <div className="overflow-x-auto">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr>
              <th>Food Image</th>
              <th>Food Name</th>
              <th>Price</th>
              <th>Food Category</th>
              <th>Quantity</th>
              <th>Food Owner</th>
              <th>Order Time</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {/* {addedFoodItems.map((addedFoodItem) => (
              <OrderRow key={addedFoodItem._id} order={addedFoodItem}></OrderRow>
            ))} */}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default AddedFoodItems;