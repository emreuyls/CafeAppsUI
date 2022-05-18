import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule } from './menu/menu.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { OrderModule } from './order/order.module';
import { TableModule } from './table/table.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenuModule,
    TableModule

  ],
  exports:[
    MenuModule,
    DashboardModule,
    OrderModule,
    TableModule
  ]
})
export class ComponentsModule { }
