import { Order } from "./Order.model";

export interface Table {
  tableName: string;
  capatict: number;
  status: boolean;
  order:Order;
}
