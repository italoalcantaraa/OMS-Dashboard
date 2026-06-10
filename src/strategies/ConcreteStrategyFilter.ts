import type Order from "../components/order/OrderComponent";
import { FilterType } from "../types/FilterType";
import { equalsIgnoreCase } from "../utils/Utils";
import type { FilterStrategy } from "../contracts/FilterStrategy";

export class ConcreteStrategyFilter implements FilterStrategy {
  filterByType(orders: Order[], filterType: FilterType): Order[] {
    return orders.filter((order) => equalsIgnoreCase(order.status, filterType));
  }
}
