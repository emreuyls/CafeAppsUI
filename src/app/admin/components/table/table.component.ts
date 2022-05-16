import { Component, OnInit } from '@angular/core';
import { async } from '@angular/core/testing';
import { MatDialog } from '@angular/material/dialog';
import { GetTableViewModel } from 'src/app/model/viewModels/Table/TableGet.viewmodel';
import { TableService } from 'src/app/services/admin/table.service';
import { CreateTableComponent } from './create-table/create-table.component';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(public dialog: MatDialog,
    private services: TableService) { }
  table: GetTableViewModel[] = [];
  async ngOnInit() {
    this.table = await this.services.getTable();
  }
  openCreateTableDialog() {
    const dialogRef = this.dialog.open(CreateTableComponent, {
      width: '600px',
    });
  }
}
