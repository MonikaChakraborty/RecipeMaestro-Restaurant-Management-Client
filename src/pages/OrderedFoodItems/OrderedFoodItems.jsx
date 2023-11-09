import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import OrderRow from "./OrderRow";

const OrderedFoodItems = () => {
  const { user } = useAuth();

  const [orders, setOrders] = useState([]);

  const url = `http://localhost:5000/orders?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [url]);

  return (
    <div>
      <h2 className="text-4xl font-bold">Orders: {orders.length}</h2>

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
            {orders.map((order) => (
              <OrderRow key={order._id} order={order}></OrderRow>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderedFoodItems;
