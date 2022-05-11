import { Menu } from "./Menu.model";
import { Table } from "./Table.model";

export interface Order{
  status:boolean;
  menu:Menu;
  table:Table;
}
