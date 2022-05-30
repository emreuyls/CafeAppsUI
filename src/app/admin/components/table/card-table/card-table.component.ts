import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GetTableViewModel } from 'src/app/model/viewModels/Table/TableGet.viewmodel';
import { ShowAccountComponent } from '../show-account/show-account.component';
import { ShowOrderComponent } from '../show-order/show-order.component';
import { ShowTableComponent } from '../show-table/show-table.component';

@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.scss']
})
export class CardTableComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
  @Input() model: GetTableViewModel;
  time: Date;
  @Output() callback:EventEmitter<any>=new EventEmitter();
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
      width: '80%',
      height:'80%',
      data:this.model.id
    });

    dialogRef.afterClosed().subscribe();
  }
  openTableDialog(){
    const dialogRef=this.dialog.open(ShowTableComponent,{
      width:'600px',
      data:this.model
    }).afterClosed().subscribe(result=>result?this.callback.emit():"");
  }
}
