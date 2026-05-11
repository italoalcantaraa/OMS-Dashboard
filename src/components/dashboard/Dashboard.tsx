import "./Dashboard.css";

import type { DashboardItemProps } from "../../types/Dashboard.ts";
import ItemDashboard from "./item/DashboardItem.tsx";

function Dashboard() {
  const items: DashboardItemProps[] = [
    {
      id: 1,
      image: "/shopping-cart.svg",
      color: "var(--default-yellow)",
      description: "Pending Orders",
      value: 12,
    },
    {
      id: 2,
      image: "/package.svg",
      color: "var(--default-green)",
      description: "Delivered Orders",
      value: 27,
    },
    {
      id: 3,
      image: "/circle-x.svg",
      color: "var(--default-red)",
      description: "Canceled Orders",
      value: 4,
    },
    {
      id: 4,
      image: "/dollar-sign.svg",
      color: "var(--default-blue)",
      description: "Pending Orders",
      value: 24550,
    },
  ];

  return (
    <>
      <div className="items">
        {items.map((item) => (
          <ItemDashboard
            key={item.id}
            image={item.image}
            color={item.color}
            description={item.description}
            value={item.value}
          />
        ))}
      </div>
    </>
  );
}

export default Dashboard;
