import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TableComponent } from './table.component';
import { TableHeaderComponent } from './table-header/table-header.component';
import { TableContentComponent } from './table-content/table-content.component';
import {MatTabsModule} from '@angular/material/tabs';



@NgModule({
  declarations: [
    TableComponent,
    TableHeaderComponent,
    TableContentComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{path: ":id", component: TableComponent}]),
    MatTabsModule
  ]
})
export class TableModule { }
