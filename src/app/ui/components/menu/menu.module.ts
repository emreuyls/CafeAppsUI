import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from './menu.component';
import { RouterModule } from '@angular/router';
import { CustomToastrService,ToastrMessageType, ToastrPosition } from 'src/app/services/common/custom-toastr.service';



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
export class MenuModule {
}
