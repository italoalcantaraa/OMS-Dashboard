import type Order from "../components/order/Order";
import type { FilterType } from "../types/FilterType";

export interface FilterStrategy {
  filterByType(type: Order[], filterType: FilterType): Order[];
}
