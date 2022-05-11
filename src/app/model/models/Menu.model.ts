import { MenuTypes } from "./MenuTypes.model";
import { Order } from "./Order.model";

export interface Menu {
  title: string;
  description: string;
  ımg: string;
  price: number;
  order: Order;
  menuTypes: MenuTypes;

}
