import type Order from "../components/order/OrderComponent";
import type { FilterType } from "../types/FilterType";

export interface FilterStrategy {
  filterByType(type: Order[], filterType: FilterType): Order[];
}
