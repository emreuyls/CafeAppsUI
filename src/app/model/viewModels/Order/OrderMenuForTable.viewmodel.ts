export interface OrderListForTableViewModel {
isOrdered:boolean,
orderMenu:orderMenuForTableViewModel[]
}
export interface orderMenuForTableViewModel{
  menuName: string,
  stock: number,
  price: number
}
