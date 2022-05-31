import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { createOrderViewModel } from 'src/app/model/viewModels/Order/createOrder.viewmodel';
import { getAllComfirmOrderViewModel } from 'src/app/model/viewModels/Order/getAllComfirmOrder.viewmodel';
import { OrderListForTableViewModel } from 'src/app/model/viewModels/Order/OrderMenuForTable.viewmodel';
import { HttpClientService } from '../common/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private services: HttpClientService) { }


  createOrder(data: createOrderViewModel, succesCallBack: () => void, errorCallBack: () => void) {
    this.services.post<createOrderViewModel>({
      controller: 'order',
      action: 'createorder'
    }, data).subscribe(
      (success) => { succesCallBack() },
      (error) => { errorCallBack() }
    );
  }

  async getAllComfirmOrder(): Promise<getAllComfirmOrderViewModel[]> {
    const dataModel: Promise<getAllComfirmOrderViewModel[]> = firstValueFrom(this.services.get<getAllComfirmOrderViewModel[]>({
      controller: 'order',
      action: 'getcomfirmorder'
    }));
    dataModel.then().catch();
    return await dataModel;
  }
  putOrderDelivering(id:string,succesCallBack:()=>void,errorCallBack:()=>void){
    this.services.get({
      controller:'order',
      action:'orderdelivering',
      querystring:`id=${id}`

    }).subscribe((success)=>{succesCallBack()},(error)=>{errorCallBack()});
  }
 async getOrderMenuForTable(id:string):Promise<OrderListForTableViewModel[]>
  {
    const dataModel:Promise<OrderListForTableViewModel[]>=firstValueFrom(this.services.get<OrderListForTableViewModel[]>({
      controller:'order',
      action:'ordermenufortable',
      querystring:`id=${id}`
    }));
    return await dataModel;
  }

  ComplateOrderTable(tableID:string[],succesCallBack:()=>void,errorCallBack:()=>void)
  {
    this.services.put({
      controller:'order',
      action:'ComplateOrderTable'
    },tableID).subscribe(
      (success)=>{
        succesCallBack()
      },
      (error)=>{
        errorCallBack()
      }
    );

  }
}
