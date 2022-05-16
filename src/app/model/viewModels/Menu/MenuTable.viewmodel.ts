import { MenuTypesViewModel } from "../MenuTypes/MenuTypes.viewmodel";

export interface TableMenuViewModel {
  menuTable: getMenuTableViewModel[] ,
  tableCount: number
}
export interface getMenuTableViewModel {
  id: string,
  title: string,
  description: string,
  img: string,
  price: number,
  menuTypes: MenuTypesViewModel,
  createTime: Date,
  updateTime: Date
}
