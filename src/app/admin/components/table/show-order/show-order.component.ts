import { DataSource } from '@angular/cdk/collections';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { OrderListForTableViewModel, orderMenuForTableViewModel } from 'src/app/model/viewModels/Order/OrderMenuForTable.viewmodel';
import { OrderService } from 'src/app/services/admin/order.service';

@Component({
  selector: 'app-show-order',
  templateUrl: './show-order.component.html',
  styleUrls: ['./show-order.component.scss']
})
export class ShowOrderComponent implements OnInit {
  TableMenuDs: MatTableDataSource<OrderListForTableViewModel> = new MatTableDataSource<OrderListForTableViewModel>();
  constructor(public dialogRef: MatDialogRef<ShowOrderComponent>, @Inject(MAT_DIALOG_DATA) public data: string, private orderService: OrderService) { }
  displayedColumns: string[] = ['menuName', 'stock', 'price'];
  DataOrderMenu: OrderListForTableViewModel[] = [];
  ngOnInit(): void {
    this.getOrderMenu();
  }
  async getOrderMenu() {
    this.DataOrderMenu = await this.orderService.getOrderMenuForTable(this.data)

    this.TableMenuDs.data = this.DataOrderMenu;
    //burada veriler geliyor lakin gelen verileri istediğim gibi gelmiyor onları ayarlamak lazım şuanki viewmodel türü pek uygun gelmiyor
  }
  getTotalCost() {
    // return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }
}
