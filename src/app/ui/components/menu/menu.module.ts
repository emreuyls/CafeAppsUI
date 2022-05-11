import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    MenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "", component: MenuComponent }
    ])
  ]
})
export class MenuModule{
}
