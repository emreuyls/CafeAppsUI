import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table.component';
import { RouterModule } from '@angular/router';
import { CreateTableComponent } from './create-table/create-table.component';
import { CardTableComponent } from './card-table/card-table.component';
import {MatCardModule} from '@angular/material/card';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatListModule} from '@angular/material/list';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatDialogModule} from '@angular/material/dialog';
import {MatIconModule} from '@angular/material/icon';
import { ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { ShowOrderComponent } from './show-order/show-order.component';
import { ShowTableComponent } from './show-table/show-table.component';
import { MatTableModule } from '@angular/material/table';
@NgModule({
  declarations: [
    TableComponent,
    CreateTableComponent,
    CardTableComponent,
    ShowOrderComponent,
    ShowTableComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([{ path: "", component: TableComponent }]),
    ReactiveFormsModule,
    MatFormFieldModule,
    MatCardModule,
    MatGridListModule,
    MatListModule,
    MatButtonModule,
    MatDividerModule,
    MatDialogModule,
    MatIconModule,
    MatTableModule,
    MatInputModule  ],
  exports: [
    TableComponent
  ]
})
export class TableModule { }
