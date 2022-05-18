import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from './home/home.module';
import { TableModule } from './table/table.module';



@NgModule({
  declarations: [

  ],
  imports: [
    CommonModule,
    HomeModule,
    TableModule
  ],
  exports:[
    HomeModule
  ]
})
export class ComponentsModule { }
