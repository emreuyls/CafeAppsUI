import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuComponent } from '../menu/menu.component';
import { RouterModule } from '@angular/router';
import { MenuAddComponent } from './menu-add/menu-add.component';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MenuTableComponent } from './menu-table/menu-table.component';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MenuTypesComponent } from './menu-types/menu-types.component';
import { MenuTypesAddComponent } from './menu-types-add/menu-types-add.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DeleteDirective } from 'src/app/directives/delete.directive';
@NgModule({
  declarations: [
    MenuComponent,
    MenuAddComponent,
    MenuTableComponent,
    MenuTypesComponent,
    MenuTypesAddComponent,
    DeleteDirective
  ],
  imports: [
    CommonModule,
    RouterModule.forChild([
      { path: "", component: MenuComponent },
      { path: "Add", component: MenuComponent },
      { path: "types", component: MenuTypesComponent }
    ]),
    MatTabsModule,
    MatTableModule,
    MatPaginatorModule,
    MatDividerModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
