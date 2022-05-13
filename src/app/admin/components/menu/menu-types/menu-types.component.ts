import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MenuService } from 'src/app/services/admin/menu.service';
import { MenuTypesTableViewModel, MenuTypesViewModel } from 'src/app/model/viewModels/MenuTypes.viewmodel';
import { HttpClientService } from 'src/app/services/common/http-client.service';

@Component({
  selector: 'app-menu-types',
  templateUrl: './menu-types.component.html',
  styleUrls: ['./menu-types.component.scss']
})
export class MenuTypesComponent implements OnInit {
  displayedColumns: string[] = ['typeName'];
  constructor(private services: MenuService, private httpClient: HttpClientService) {
  }
  dataSource: MatTableDataSource<MenuTypesViewModel> = new MatTableDataSource<MenuTypesViewModel>();
  @ViewChild(MatPaginator) paginator: MatPaginator;
  async ngOnInit() {
    this.GetMenuTypes()
  }
  async GetMenuTypes() {
    const promiseData: MenuTypesTableViewModel = await this.services.GetMenuTypes(this.paginator ? this.paginator.pageIndex : 0, this.paginator ? this.paginator.pageSize : 5,
      () => console.log("Başarılı"), () => console.log("hata")
    );
    this.dataSource = new MatTableDataSource<MenuTypesViewModel>(promiseData.menuTypesModel);
    this.paginator.length = promiseData.tableCount;

    debugger;
  }
  async PageChanged() {
    await this.ngOnInit();
  }
}
