import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss']
})
export class TableListComponent implements OnInit {

  constructor() { }
  displayedColumns: string[] = ['orderName', 'piece', 'note','remove'];
  dataSource = ELEMENT_DATA;
  ngOnInit(): void {
  }

}
export interface PeriodicElement {
  orderName: string;
  piece: number;
  note: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {orderName: "çay", piece: 2, note:'çay açık olsun lütfen'},
  {orderName: "su", piece: 1, note:'Soğuk'},
  {orderName: "çaklıt makiato", piece: 1, note:'Sipariş notu yok'},

];
