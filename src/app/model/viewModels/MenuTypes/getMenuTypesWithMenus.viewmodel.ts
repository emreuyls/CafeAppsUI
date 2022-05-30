export interface getMenuTypesWithMenusViewModel{
  id:string,
  menuTypes:string,
  menus:MenusByMenuTypesVM[]
}
export interface MenusByMenuTypesVM{
  id:string,
  menuName:string
}
