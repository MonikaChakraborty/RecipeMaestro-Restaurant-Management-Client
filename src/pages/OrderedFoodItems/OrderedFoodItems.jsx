import { useEffect, useState } from "react";
import useAuth from "../../hooks/useAuth";
import OrderRow from "./OrderRow";
import Navbar from "../Shared/Navbar";

const OrderedFoodItems = () => {
  const { user } = useAuth();

  const [orders, setOrders] = useState([]);

  const url = `https://restaurant-management-system-server-kappa.vercel.app/orders?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setOrders(data));
  }, [url]);

  return (
    <div>
      <Navbar></Navbar>
      <div
        style={{
          minHeight: "calc(100vh - 120px)" // Subtract the height of navbar and footer
        }}
      >
        <h2 className="text-4xl font-bold text-center pt-28">
          My Ordered Items
        </h2>

        <div className="overflow-x-auto max-w-6xl mx-auto npm m run ">
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
    </div>
  );
};

export default OrderedFoodItems;
