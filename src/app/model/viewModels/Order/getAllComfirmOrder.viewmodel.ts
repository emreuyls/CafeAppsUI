export interface getAllComfirmOrderViewModel{
  id:string,
  tableName:string,
  tableLocation:string,
  menu:GetAllComfirmOrderMenuViewModel[]

}
export interface GetAllComfirmOrderMenuViewModel{
  title:string,
  numberofProduct:string,
  customerNote:string,
}
