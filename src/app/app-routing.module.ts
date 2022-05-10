import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';

const routes: Routes = [
  {path:"admin",component:LayoutComponent,children:[
    {path:"",loadChildren:()=>import("./admin/components/dashboard/dashboard.module").then(module=>module.DashboardModule)},
    {path:"menu",loadChildren:()=>import("./admin/components/menu/menu.module").then(module=>module.MenuModule)}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
