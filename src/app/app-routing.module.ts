import {  NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './admin/layout/layout.component';
import { HomeComponent } from './ui/components/home/home.component';

const routes: Routes = [
  {
    path: "admin", component: LayoutComponent, children: [
      { path: "", loadChildren: () => import("./admin/components/dashboard/dashboard.module").then(module => module.DashboardModule) },
      { path: "menu", loadChildren: () => import("./admin/components/menu/menu.module").then(module => module.MenuModule) },
      { path: "order", loadChildren: () => import("./admin/components/order/order.module").then(module => module.OrderModule) },
      { path: "table", loadChildren: () => import("./admin/components/table/table.module").then(module => module.TableModule) }
    ]
  },
  {
    path: "", component: HomeComponent, children: [
      { path: "", loadChildren: () => import("./ui/components/home/home.module").then(module => module.HomeModule) },
      { path: "menu", loadChildren: () => import("./ui/components/menu/menu.module").then(module => module.MenuModule) },
      { path: "table", loadChildren: () => import("./ui/components/table/table.module").then(module=>module.TableModule)}

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
