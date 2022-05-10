import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuModule } from './menu/menu.module';
import { DashboardModule } from './dashboard/dashboard.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MenuModule
  ],
  exports:[
    MenuModule,
    DashboardModule
  ]
})
export class ComponentsModule { }
