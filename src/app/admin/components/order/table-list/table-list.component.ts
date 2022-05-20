import { Component, Input, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { data } from 'jquery';
import { OrderGetAllMenu, OrderGetAllTableWithViewTable, OrderGetAllWithMenu } from 'src/app/model/viewModels/Order/GetAllTableWithOrder.viewmodel';
import { CreateOrderComponent } from '../create-order/create-order.component';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit {

  @Input() dataModel: OrderGetAllTableWithViewTable;
  constructor(public dialog:MatDialog) { }

  displayedColumns: string[] = ['orderName', 'piece', 'note', 'remove'];
  dataSource=ELEMENT_DATA;

  ngOnInit(): void {

  }
  AddNewOrder(){
    this.dialog.open(CreateOrderComponent,{
      width:'600px',
      data:this.dataModel.id
    }).afterClosed().subscribe();
  }
}

export default interface PeriodicElement {
  orderName: string;
  piece: number;
  note: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { orderName: "çay", piece: 2, note: 'çay açık olsun lütfen' },
  { orderName: "su", piece: 1, note: 'Soğuk' },
  { orderName: "çaklıt makiato", piece: 1, note: 'Sipariş notu yok' },

];
