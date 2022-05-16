import { DataSource } from '@angular/cdk/collections';
import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { getMenuTableViewModel, TableMenuViewModel } from 'src/app/model/viewModels/Menu/MenuTable.viewmodel';
import { MenuService } from 'src/app/services/admin/menu.service';

@Component({
  selector: 'app-menu-table',
  templateUrl: './menu-table.component.html',
  styleUrls: ['./menu-table.component.scss']
})
export class MenuTableComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['title', 'description','price', 'menuTypes', 'createTime','updateTime'];
   dataSource: MatTableDataSource<getMenuTableViewModel>= new MatTableDataSource<getMenuTableViewModel>();


  constructor(private services: MenuService) { }

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  async ngOnInit() {
   await this.getPage()
  }
 async getPage(){
    const data:TableMenuViewModel = await this.services.GetMenuTable(this.paginator ? this.paginator.pageIndex : 0, this.paginator ? this.paginator.pageSize : 5);
    debugger;
    console.log(data.menuTable);
    this.dataSource=new MatTableDataSource<getMenuTableViewModel>(data.menuTable);
    this.paginator.length = data.tableCount;
  }
  async PageChanged() {
    await this.ngOnInit();
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

}
