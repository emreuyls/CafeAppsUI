import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MenuService } from 'src/app/services/admin/menu.service';
import { MenuTypesTableViewModel, MenuTypesViewModel } from 'src/app/model/viewModels/MenuTypes/MenuTypes.viewmodel';
import { MenuTypesAddComponent } from '../menu-types-add/menu-types-add.component';
import { MatDialog } from '@angular/material/dialog';
import { UpdateMenuTypesComponent } from '../update-menu-types/update-menu-types.component';
@Component({
  selector: 'app-menu-types',
  templateUrl: './menu-types.component.html',
  styleUrls: ['./menu-types.component.scss']
})
export class MenuTypesComponent implements OnInit {
  displayedColumns: string[] = ['typeName','update','delete'];
  constructor(private services: MenuService, public dialog: MatDialog) {
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
  }
  async PageChanged() {
    await this.ngOnInit();
  }
  openCreateMenuTypeDialog() {
    const dialogRef = this.dialog.open(MenuTypesAddComponent, {
      width: '600px'
    }).afterClosed().subscribe(result=>result?this.GetMenuTypes():"");
  }

  openUpdateMenuTypesDialog(data:MenuTypesViewModel){
    const dialogRef=this.dialog.open(UpdateMenuTypesComponent,{
      width:'600px',
      data:data
    }).afterClosed().subscribe(result=>result?this.GetMenuTypes():"");
  }
}
