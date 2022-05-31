export interface OrderListForTableViewModel {
  orderID: string,
  menu: OrderListMenuForTableViewModel[]
}
export interface OrderListMenuForTableViewModel {
  menuName: string,
  stock: number,
  price: number
}

