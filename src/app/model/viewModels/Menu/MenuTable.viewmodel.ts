import { MenuTypesViewModel } from "../MenuTypes/MenuTypes.viewmodel";

export interface TableMenuViewModel {
id:string,
title:string,
description:string,
img:string,
price:number,
menuTypes:MenuTypesViewModel,
createTime:Date,
updateTime:Date
}
