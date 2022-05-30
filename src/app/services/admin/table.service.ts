import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { getOrderMenuTableViewModel } from 'src/app/model/viewModels/Table/getOrderMenuTable.viewmodel';
import { TableCreateViewModel } from 'src/app/model/viewModels/Table/TableCreate.viewmodel';
import { GetTableViewModel } from 'src/app/model/viewModels/Table/TableGet.viewmodel';
import { TableUpdateViewModel } from 'src/app/model/viewModels/Table/TableUpdate.viewmodel';
import { HttpClientService } from '../common/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private httpServices: HttpClientService) { }

  CreateTable(data: TableCreateViewModel, successCallBack: () => void, errorcallBack: () => void) {
    this.httpServices.post<TableCreateViewModel>({
      controller: "table",
      action: "create"
    }, data).subscribe(
      () => {
        successCallBack();
      },
      () => {
        errorcallBack();
      }
    );
  }
  async getTable(): Promise<GetTableViewModel[]> {
    const PromiseTable: Promise<GetTableViewModel[]> = firstValueFrom(this.httpServices.get<GetTableViewModel[]>({
      controller: "table",
      action: "GetTable"
    }));
    return await PromiseTable;

  }
  updateTable(data: TableUpdateViewModel, successCallBack: () => void, errorcallBack: () => void) {
    this.httpServices.put({
      controller: "table",
      action: "UpdateTable"
    }, data).subscribe(
      (success) => {
        successCallBack()
      },
      (error) => {
        errorcallBack()
      }
    );
  }
  deleteTable(id:string,successCallBack:()=>void,errorcallBack:()=>void){
    this.httpServices.delete({
      controller:"table",
      action:"DeleteTable"
    },id).subscribe(
      (success)=>{
        successCallBack()
      },
      (error)=>{
        errorcallBack()
      }
    );
  }
  async getOrderMenuTable():Promise<getOrderMenuTableViewModel[]>{
    const model:Promise<getOrderMenuTableViewModel[]>=firstValueFrom(this.httpServices.get<getOrderMenuTableViewModel[]>({
      controller:"table",
      action:"NewOrderGetAllTable"
    }));
    model.then().catch();
    return await model;
  }
}
