import { Injectable } from '@angular/core';
import { HttpClientService } from '../common/http-client.service';
import { MenuTypesTableViewModel } from 'src/app/model/viewModels/MenuTypes.viewmodel';
import { firstValueFrom } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private httpClient: HttpClientService) { }

  CreateMenu() {

  }
  GetMenu() {

  }
  CreateMenuTypes() {

  }
  async GetMenuTypes(page:number=0,size:number=5,successCallBack:()=>void,errorCallBack:(errorMessage:string)=>void): Promise<MenuTypesTableViewModel> {
    const promiseData: Promise<MenuTypesTableViewModel> =firstValueFrom(this.httpClient.get<MenuTypesTableViewModel>({
      controller: "menutypes",
      querystring:`page=${page}&size=${size}`
    }));
    promiseData.then(s=>successCallBack())
      .catch((errorResponse:HttpErrorResponse)=>errorCallBack(errorResponse.message));
    return await promiseData;
  }
}
