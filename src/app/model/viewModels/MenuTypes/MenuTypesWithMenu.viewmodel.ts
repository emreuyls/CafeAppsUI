export interface MenuTypesWithMenuViewModel {
typeName:string,
menus:MenuTypesMenuViewModel[]
}
export interface MenuTypesMenuViewModel {
  id: string,
  title: string,
  description: string,
  img: string,
  price: number
}
