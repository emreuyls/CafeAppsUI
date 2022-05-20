import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { OrderGetAllTableWithViewTable } from 'src/app/model/viewModels/Order/GetAllTableWithOrder.viewmodel';
import { HttpClientService } from '../common/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  constructor(private services:HttpClientService) { }

 async GetAllTableWithOrder():Promise<OrderGetAllTableWithViewTable[]>{
    const model:Promise<OrderGetAllTableWithViewTable[]> = firstValueFrom(this.services.get<OrderGetAllTableWithViewTable[]>({
      controller:"table",
      action:"GetAllOrderPage"
    }));
    model.then();
    model.catch();
    return await model;
  }
}
