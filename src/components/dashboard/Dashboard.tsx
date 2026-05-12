import "./Dashboard.css";

import type { DashboardItemProps } from "../../types/Dashboard.ts";
import ItemDashboard from "./item/DashboardItem.tsx";
import type { DashboardValues } from "../../types/DashboardValues.ts";

type DashboardProps = {
  values: DashboardValues;
};

function Dashboard({ values }: DashboardProps) {
  const items: DashboardItemProps[] = [
    {
      id: 1,
      image: "/shopping-cart.svg",
      color: "var(--default-yellow)",
      description: "Pending Orders",
      value: values.countPending,
    },
    {
      id: 2,
      image: "/package.svg",
      color: "var(--default-green)",
      description: "Delivered Orders",
      value: values.countDelivered,
    },
    {
      id: 3,
      image: "/circle-x.svg",
      color: "var(--default-red)",
      description: "Canceled Orders",
      value: values.countCanceled,
    },
    {
      id: 4,
      image: "/dollar-sign.svg",
      color: "var(--default-blue)",
      description: "Revenue",
      value: values.renevue,
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
