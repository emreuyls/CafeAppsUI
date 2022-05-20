import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OrderComponent } from '../order/order.component';
import { RouterModule } from '@angular/router';
import { TableListComponent } from './table-list/table-list.component';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import { CreateOrderComponent } from './create-order/create-order.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ReactiveFormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatListModule } from '@angular/material/list';
@NgModule({
  declarations: [
    OrderComponent,
    TableListComponent,
    CreateOrderComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path:"",component:OrderComponent}
    ]),
    MatExpansionModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatSelectModule,
    MatListModule
  ],
  exports: [
    OrderComponent
  ]
})
export class OrderModule { }
