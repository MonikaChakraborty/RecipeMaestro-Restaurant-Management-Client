import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import AddedFoodItemsRow from "./AddedFoodItemsRow";
import Navbar from "../Shared/Navbar";

const AddedFoodItems = () => {
  const { user } = useAuth();

  const [addedFoodItems, setAddedFoodItems] = useState([]);

  const url = `https://restaurant-management-system-server-kappa.vercel.app/addedFoodItems?madeBy=${user?.email}`;
  //   console.log(url);

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setAddedFoodItems(data));
  }, [url]);
  return (
    <div className="">
       <Navbar></Navbar>
       
    <div style={{
          minHeight: "calc(100vh - 120px)" // Subtract the height of navbar and footer
        }}>
    <h2 className="text-4xl font-bold text-center mb-8 pt-28">
        My Added Food Items
      </h2>

      <div className="overflow-x-auto max-w-6xl mx-auto mt-6">
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
    </div>
  );
};

export default AddedFoodItems;
