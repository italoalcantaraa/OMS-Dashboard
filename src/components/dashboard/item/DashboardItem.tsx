import "./DashboardItem.css";
import type { DashboardItemProps } from "../../../types/Dashboard.ts";

function ItemDashboard(props: DashboardItemProps) {
  return (
    <>
      <div className="item">
        <div className="icon">
          <img
            src={props.image}
            alt="cart"
            style={{
              backgroundColor: `color-mix(in srgb, ${props.color} 10%, transparent)`,
            }}
          />
          <div id="little-ball" style={{ backgroundColor: `${props.color}` }} />
        </div>
        <p id="description">{props.description}</p>
        <p id="value">{props.value}</p>
      </div>
    </>
  );
}

export default ItemDashboard;
