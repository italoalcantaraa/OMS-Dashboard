import "./Order.css";
import { useEffect, useState } from "react";
import { FilterType } from "../../types/FilterType";
import type { Order } from "../../types/Order";
import { ConcreteStrategyFilter } from "../../strategies/ConcreteStrategyFilter";
import { equalsIgnoreCase } from "../../utils/Utils";

type OrderProps = {
  orders: Order[];
};

function Order({ orders }: OrderProps) {
  const [filterType, setFilterType] = useState<FilterType>(FilterType.ALL);
  const [ordersCopy, setOrdersCopy] = useState<Order[]>([]);
  const [customer, setCustomer] = useState<string>("");

  const apllyFilter = (): void => {
    let newList: Order[] = [];

    // prioridade de filtro por nome
    const ordersFilteredByName: Order[] = orders.filter((e) =>
      e.customer.toLowerCase().includes(customer.toLowerCase()),
    );  

    // se nao for ALL
    if (!equalsIgnoreCase(filterType, FilterType.ALL)) {
      // aplica a estretegia por filtro
      const filterStrategy = new ConcreteStrategyFilter();
      newList = filterStrategy.filterByType(ordersFilteredByName, filterType);
      setOrdersCopy(newList);
      return;
    }

    // so filtra por nome (ALL)
    setOrdersCopy(ordersFilteredByName);
  };

  const handleCustomer = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCustomer(e.target.value);
  };

  useEffect(() => {
    apllyFilter();
  }, [filterType, customer, orders]);

  return (
    <>
      <div className="container-order">
        <h1 id="title">Orders</h1>
        <div className="filter">
          <div className="search">
            <img src="" alt="" />
            <input
              type="text"
              value={customer}
              onChange={handleCustomer}
              placeholder="Search customer..."
            />
          </div>
          <div className="filters">
            {Object.values(FilterType).map((e) => (
              <button
                className={e == filterType ? `active` : ""}
                key={e}
                onClick={() => setFilterType(e as FilterType)}
              >
                {e}
              </button>
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
            {ordersCopy.map((order) => (
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
