import type Order from "../components/order/Order";
import { FilterType } from "../types/FilterType";
import { equalsIgnoreCase } from "../utils/Utils";
import type { FilterStrategy } from "./FilterStrategy";

export class ConcreteStrategyFilter implements FilterStrategy {
  filterByType(orders: Order[], filterType: FilterType): Order[] {
    return orders.filter((order) => equalsIgnoreCase(order.status, filterType));
  }
}
