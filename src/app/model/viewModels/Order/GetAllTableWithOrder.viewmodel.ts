export interface OrderGetAllTableWithViewTable {
  id: string,
  tableName: string,
  tableLocataion: string,
  status: boolean,
  Orders: OrderGetAllWithMenu[],
}
export interface OrderGetAllWithMenu {
  id: string,
  isComfirm: boolean,
  isOrdered: boolean,
  isComplated: boolean,
  menus: OrderGetAllMenu[]
}
export interface OrderGetAllMenu {
  id: string,
  customerNote: string,
  numberofProduct: number,
  menu:OrderMenuViewModel
}
export interface OrderMenuViewModel{
  id:string,
  title:string,
  price:number

}
