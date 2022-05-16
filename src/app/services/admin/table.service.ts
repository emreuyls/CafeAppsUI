import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { TableCreateViewModel } from 'src/app/model/viewModels/Table/TableCreate.viewmodel';
import { GetTableViewModel } from 'src/app/model/viewModels/Table/TableGet.viewmodel';
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
 async getTable():Promise<GetTableViewModel[]> {
    const PromiseTable: Promise<GetTableViewModel[]> = firstValueFrom(this.httpServices.get<GetTableViewModel[]>({
      controller: "table",
      action: "GetTable"
    }));
    return await PromiseTable;

  }
}
