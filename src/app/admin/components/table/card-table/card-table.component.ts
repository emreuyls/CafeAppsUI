import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GetTableViewModel } from 'src/app/model/viewModels/Table/TableGet.viewmodel';
import { ShowAccountComponent } from '../show-account/show-account.component';
import { ShowOrderComponent } from '../show-order/show-order.component';

@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.scss']
})
export class CardTableComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  @Input() model: GetTableViewModel;
  time: Date;
  ngOnInit(): void {
  }
  openAccountDialog(): void {
    const dialogRef = this.dialog.open(ShowAccountComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe();
  }
  openOrderDialog(): void {
    const dialogRef = this.dialog.open(ShowOrderComponent, {
      width: '600px'
    });

    dialogRef.afterClosed().subscribe();
  }

}
