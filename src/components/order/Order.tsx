import './Order.css'
import axios from "axios";
import { useEffect, useState } from "react";

type Order = {
  id: string;
  customer: string;
  status: string;
  total: number;
  createdAt: string;
};

type FilterType = {
  isActive: boolean;
  filter: "All" | "Pending" | "Delivered" | "Canceled";
};

function Order() {
  const [filterType, setFilterType] = useState<FilterType[]>([
    { filter: "All", isActive: true },
    { filter: "Pending", isActive: false },
    { filter: "Delivered", isActive: false },
    { filter: "Canceled", isActive: false },
  ]);

  const [orders, setOrders] = useState<Order[]>([]);

  const URL = "https://6a00f10636fb6ad04de096ef.mockapi.io/api/v1/orders";

  const getAllOrders = async () => {
    const request = await axios.get(URL);
    const data = request.data;

    setOrders(data);
  };

  useEffect(() => {
    getAllOrders();
  }, []);

  return (
    <>
      <div className="container-order">
        <h1>Orders</h1>
        <div className="filter">
          <div className="search">
            <img src="" alt="" />
            <input type="text" placeholder="Search customer..." />
          </div>
          <div className="filters">
            {filterType.map((e) => (
              <button>{e.filter}</button>
            ))}
          </div>
        </div>
        <table className="orders">
          <thead>
            <tr>
              <th scope="col">Order ID</th>
              <th scope="col">Customer</th>
              <th scope="col">Status</th>
              <th scope="col">Total</th>
              <th scope="col">Date</th>
            </tr>
          </thead>

          <tbody>
            {orders.map((order) => (
              <tr key={order.id}>
                <th scope="row">{order.id}</th>
                <td>{order.customer}</td>
                <td>{order.status}</td>
                <td>{order.total}</td>
                <td>{order.createdAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Order;
