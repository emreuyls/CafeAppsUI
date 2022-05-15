import { Injectable } from '@angular/core';
import { HttpClientService } from '../common/http-client.service';
import { MenuTypesTableViewModel, MenuTypesViewModel } from 'src/app/model/viewModels/MenuTypes/MenuTypes.viewmodel';
import { firstValueFrom } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { MenutypeAddViewModel } from 'src/app/model/viewModels/MenuTypes/MenuTypesAdd.ViewModel';
import { CreateMenuViewModel } from 'src/app/model/viewModels/Menu/CreateMenu.viewmodel';
import { TableMenuViewModel } from 'src/app/model/viewModels/Menu/MenuTable.viewmodel';
@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private httpClient: HttpClientService) { }

  CreateMenu(data: CreateMenuViewModel, successCallBack: () => void, errorCallBack: () => void) {
    const model = firstValueFrom(this.httpClient.post({
      controller: "menu",
      action: "create"
    }, data));
    model.then()
      .catch();

  }
  async GetAllMenu(): Promise<TableMenuViewModel[]> {
    const model: Promise<TableMenuViewModel[]> =  firstValueFrom(this.httpClient.get<TableMenuViewModel[]>({
      controller: "menu",
      action: "GetAll"
    }));

    return model;
  }
  CreateMenuTypes(model: MenutypeAddViewModel, successCallBack: () => void, errorcallBack: () => void) {
    this.httpClient.post<MenutypeAddViewModel>({
      controller: "MenuTypes"
    }, model).subscribe(
      (succes) => {
        successCallBack()
      },
      (error) => {
        errorcallBack()
      }
    );
  }
  async GetAllMenuTypes(): Promise<MenuTypesViewModel[]> {
    const model: Promise<MenuTypesViewModel[]> = firstValueFrom(this.httpClient.get<MenuTypesViewModel[]>({
      controller: "menutypes",
      action: "getAllMenuTypes"
    }));
    return await model;
  }
  async GetMenuTypes(page: number = 0, size: number = 5, successCallBack: () => void, errorCallBack: (errorMessage: string) => void): Promise<MenuTypesTableViewModel> {
    const promiseData: Promise<MenuTypesTableViewModel> = firstValueFrom(this.httpClient.get<MenuTypesTableViewModel>({
      controller: "menutypes",
      querystring: `page=${page}&size=${size}`
    }));
    promiseData.then(s => successCallBack())
      .catch((errorResponse: HttpErrorResponse) => errorCallBack(errorResponse.message));
    return await promiseData;
  }
  async DeleteMenuTypes(id: string, successCallBack: () => void) {
    await firstValueFrom(this.httpClient.delete({
      controller: "menutypes"
    }, id))
      .then(s => successCallBack());

  }
}


