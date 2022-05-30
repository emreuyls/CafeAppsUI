import { Injectable } from '@angular/core';
import { HttpClientService } from '../common/http-client.service';
import { MenuTypesTableViewModel, MenuTypesViewModel } from 'src/app/model/viewModels/MenuTypes/MenuTypes.viewmodel';
import { firstValueFrom } from 'rxjs';
import { HttpErrorResponse } from '@angular/common/http';
import { MenutypeAddViewModel } from 'src/app/model/viewModels/MenuTypes/MenuTypesAdd.ViewModel';
import { CreateMenuViewModel } from 'src/app/model/viewModels/Menu/CreateMenu.viewmodel';
import { TableMenuViewModel } from 'src/app/model/viewModels/Menu/MenuTable.viewmodel';
import { UpdateMenuViewModel } from 'src/app/model/viewModels/Menu/MenuUpdate.viewmodel';
import { GetMenuListViewModel } from 'src/app/model/viewModels/Menu/GetMenuList.viewmodel';
import { async } from '@angular/core/testing';
import { getMenuTypesWithMenusViewModel } from 'src/app/model/viewModels/MenuTypes/getMenuTypesWithMenus.viewmodel';
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
    model.then(s => successCallBack())
      .catch(e => errorCallBack());

  }
  async GetMenuTable(page: number = 0, size: number = 5): Promise<TableMenuViewModel> {
    const model: Promise<TableMenuViewModel> = firstValueFrom(this.httpClient.get<TableMenuViewModel>({
      controller: "menu",
      action: "GetMenuTable",
      querystring: `page=${page}&size=${size}`
    }));
    return await model;
  }
  UpdateMenu(data: UpdateMenuViewModel, successCallBack: () => void, errorCallBack: () => void) {
    this.httpClient.put({
      controller: "Menu",
      action: "UpdateMenu"
    }, data).subscribe(
      (success) => {
        successCallBack()
      },
      (error) => { errorCallBack() }
    );
  }
  async getMenuList():Promise<GetMenuListViewModel[]>
  {
    const menuModel:Promise<GetMenuListViewModel[]>=firstValueFrom(this.httpClient.get<GetMenuListViewModel[]>({
      controller:"Menu",
      action:"GetMenuList"
    }));
    return await menuModel;
  }

  /*Menu Types Area*/
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

  UpdateMenuTypes(data: MenuTypesViewModel, successCallBack: () => void, errorcallBack: () => void) {
    this.httpClient.put({
      controller: "menutypes",
      action: "UpdateMenuTypes"
    }, data).subscribe(
      (success) => {
        successCallBack()
      },
      (error) => {
        errorcallBack()
      }

    )

  }

  async getMenuTypesWithMenus():Promise<getMenuTypesWithMenusViewModel[]>{
    const model:Promise<getMenuTypesWithMenusViewModel[]>=firstValueFrom(this.httpClient.get<getMenuTypesWithMenusViewModel[]>({
      controller:"MenuTypes",
      action:"GetMenuTypesWithMenus"
    }));

    return await model;
  }
}


