import "./Home.css";
import Header from "../components/header/Header";
import Dashboard from "../components/dashboard/Dashboard";
import { useEffect, useState } from "react";
import axios from "axios";
import type { DashboardValues } from "../types/DashboardValues.ts";
import { calc } from "../utils/DashboardCalc.ts";
import OrderComponent from "../components/order/OrderComponent.tsx";
import type { Order } from "../types/Order.ts";

function Home() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [dashBoardValues, setDashboarValues] = useState<DashboardValues>(
    calc(orders),
  );

  const URL = "https://6a00f10636fb6ad04de096ef.mockapi.io/api/v1/orders";

  const getAllOrders = async () => {
    const request = await axios.get(URL);
    const data = request.data;
    setOrders(data);
  };

  useEffect(() => {
    getAllOrders();
  }, []);

  useEffect(() => {
    setDashboarValues(calc(orders));
  }, [orders]);

  return (
    <main>
      <Header />
        <Dashboard values={dashBoardValues} />
        <OrderComponent orders={orders} />
    </main>
  );
}

export default Home;
