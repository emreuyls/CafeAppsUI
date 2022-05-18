import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';
import { MenuTypesWithMenuViewModel } from 'src/app/model/viewModels/MenuTypes/MenuTypesWithMenu.viewmodel';
import { HttpClientService } from '../common/http-client.service';

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private httpServices:HttpClientService) { }

 async getTableMenu():Promise<MenuTypesWithMenuViewModel[]>
  {
  const model:Promise<MenuTypesWithMenuViewModel[]> = firstValueFrom(this.httpServices.get<MenuTypesWithMenuViewModel[]>({
      controller:"menutypes",
      action:"GetMenuTypesWithMenu"
    }));
    return await model;
  }
}
