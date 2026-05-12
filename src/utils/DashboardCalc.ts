import type { DashboardValues } from "../types/DashboardValues";
import { FilterType } from "../types/FilterType";
import type { Order } from "../types/Order";
import { equalsIgnoreCase } from "./Utils";

export const calc = (orders: Order[]): DashboardValues => {
  let countPending: number = 0;
  let countDelivered: number = 0;
  let countCanceled: number = 0;
  let revenue: number = 0;

  for (let i = 0; i < orders.length - 1; i++) {
    revenue += orders[i].total;

    if (equalsIgnoreCase(orders[i].status, FilterType.PENDING)) {
      countPending++;
    } else if (equalsIgnoreCase(orders[i].status, FilterType.DELIVERED)) {
      countDelivered++;
    } else {
      countCanceled++;
    }
  }

  return {
    countPending: countPending,
    countDelivered: countDelivered,
    countCanceled: countCanceled,
    renevue: revenue,
  };
};
