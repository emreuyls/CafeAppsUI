import { InteractivityChecker } from '@angular/cdk/a11y';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatChip } from '@angular/material/chips';
import { MatDialogRef } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { ListMenuDataModel } from 'src/app/model/dataModels/ListMenu.datamodel';
import { getMenuTypesWithMenusViewModel, MenusByMenuTypesVM } from 'src/app/model/viewModels/MenuTypes/getMenuTypesWithMenus.viewmodel';
import { createOrderMenuViewModel, createOrderViewModel } from 'src/app/model/viewModels/Order/createOrder.viewmodel';
import { getOrderMenuTableViewModel } from 'src/app/model/viewModels/Table/getOrderMenuTable.viewmodel';
import { MenuService } from 'src/app/services/admin/menu.service';
import { OrderService } from 'src/app/services/admin/order.service';
import { TableService } from 'src/app/services/admin/table.service';



@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<CreateOrderComponent>, private tableServices: TableService, private MenuServices: MenuService, private orderServices: OrderService) { dialogRef.disableClose = true }
  dataSource: MatTableDataSource<ListMenuDataModel> = new MatTableDataSource<ListMenuDataModel>();
  displayedColumns: string[] = ['title', 'stock', 'delete'];
  TableList: getOrderMenuTableViewModel[] = [];
  MenuTypesList: getMenuTypesWithMenusViewModel[] = [];
  MenuList: MenusByMenuTypesVM[];
  SelectMenuTable: ListMenuDataModel[] = [];
  selectTable: getOrderMenuTableViewModel;
  orderFormGroup = new FormGroup({
    id: new FormControl(''),
    table: new FormControl('',[
      Validators.required,
    ]),
    menu: new FormControl(''),
    stock: new FormControl(1)
  })
  selectedChipsValue: any;
  async ngOnInit() {
    await this.GetTable();
    await this.GetMenu();
  }
  async GetTable() {
    this.TableList = await this.tableServices.getOrderMenuTable();
  }

  async GetMenu() {
    this.MenuTypesList = await this.MenuServices.getMenuTypesWithMenus();
  }
  onSelectTable(table: getOrderMenuTableViewModel) {
    this.selectTable = table;
  }
  onMenuSelect(menu: MenusByMenuTypesVM) {
    this.orderFormGroup.controls['id'].setValue(menu.id);
    this.orderFormGroup.controls['menu'].setValue(menu.menuName);
  }
  OnMenuTypeSelected(data: MenusByMenuTypesVM[]) {
    this.MenuList = data;
  }
  removeMenu(id: string) {
    const menuIndex = this.SelectMenuTable.findIndex(a => a.menu.id === id);
    this.SelectMenuTable.splice(menuIndex);
    this.dataSource.data = this.SelectMenuTable;
  }
  complateOrder() {
    const menuModel: createOrderMenuViewModel[] = [];
    this.SelectMenuTable.forEach(a => {
      menuModel.push({ MenuID: a.menu.id, NumberofProduct: a.stock })
    });
    const createModel: createOrderViewModel={
      menu: menuModel,
      tableID: this.selectTable.id
    };

    this.orderServices.createOrder(createModel,()=>{this.dialogRef.close(true)},()=>{});
  }
  OnAddMenu(data: any) {
    console.log(data);
    const menu: ListMenuDataModel = {
      stock: data.stock,
      menu: { id: data.id, title: data.menu }
    };
    const sum = this.SelectMenuTable.find(a => a.menu.id === menu.menu.id);
    if (sum != undefined)
      this.SelectMenuTable.filter(a => a.menu.id === menu.menu.id).forEach(s => { s.stock = s.stock ? s.stock + menu.stock : s.stock });
    else
      this.SelectMenuTable?.push(menu);
    this.dataSource.data = this.SelectMenuTable;
  }
}
