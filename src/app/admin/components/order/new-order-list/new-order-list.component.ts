import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';


@Component({
  selector: 'app-new-order-list',
  templateUrl: './new-order-list.component.html',
  styleUrls: ['./new-order-list.component.scss']
})
export class NewOrderListComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {

  }

}
