import { useEffect, useState } from "react";
import useAuth from "./useAuth";

const useOrderedFoodItems = () => {
    const { user } = useAuth();

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  const url = `https://restaurant-management-system-server-kappa.vercel.app/orders?email=${user?.email}`;

  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => 
      {
        setOrders(data);
        setLoading(false);
      }
      );
  }, [url]);

    return [orders, loading]
};

export default useOrderedFoodItems;