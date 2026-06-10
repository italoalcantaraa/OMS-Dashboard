import "./OrderComponent.css";
import React, { useEffect, useState } from "react";
import { FilterType } from "../../types/FilterType";
import type { Order } from "../../types/Order";
import { ConcreteStrategyFilter } from "../../strategies/ConcreteStrategyFilter";
import { equalsIgnoreCase } from "../../utils/Utils";
import type { ColorTypeInterface } from "../../contracts/ColorTypeInterace";
import { Canceled } from "../../strategies/Canceled";
import { Delivered } from "../../strategies/Delivered";
import { Pending } from "../../strategies/Pending";

type OrderProps = {
  orders: Order[];
};

function OrderComponent({ orders }: OrderProps) {
  const [filterType, setFilterType] = useState<FilterType>(FilterType.ALL);
  const [ordersCopy, setOrdersCopy] = useState<Order[]>([]);
  const [customer, setCustomer] = useState<string>("");
  // const [colorTypeInterface, setColorTypeInterface] =
  //   useState<ColorTypeInterface>();

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

  const setColor = (status: string): string => {
    let colorType: ColorTypeInterface;

    switch (status) {
      case "CANCELED":
        colorType = new Canceled();
        break;
      case "DELIVERED":
        colorType = new Delivered();
        break;
      case "PENDING":
        colorType = new Pending();
        break;
      default:
        throw new Error("STATUS INVÁLIDO!");
    }

    const color: string = colorType!.setColor();

    return color;
  };

  const objectStyle = (status: string): React.CSSProperties => {
    const color: string = setColor(status);

    console.log(color);

    const style: React.CSSProperties = {
      backgroundColor: `color-mix(in srgb, ${color} 20%, transparent)`,
      color: color,
      border: `1px solid ${color}`,
    };

    return style;
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
            <img src="./search.svg" alt="" />
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
        <div className="table-container">
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
                  <td id="id" scope="row">
                    #{order.id}
                  </td>
                  <td id="customer">{order.customer}</td>
                  <td id="status">
                    <div>
                      <p style={objectStyle(order.status)}>{order.status}</p>
                    </div>
                  </td>
                  <td id="total">R$ {order.total}</td>
                  <td id="date">{order.createdAt.replaceAll("-", "/")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default OrderComponent;
