import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MenuAddComponent } from './menu-add/menu-add.component';
import { MenuTypesAddComponent } from './menu-types-add/menu-types-add.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(public dialog: MatDialog) { }

  ngOnInit(): void {
  }
  openCreateMenuDialog() {
    this.dialog.open(MenuAddComponent, {
      width: '600px',
      hasBackdrop: false
    });

  }
  openCreateMenuTypeDialog() {
    this.dialog.open(MenuTypesAddComponent, {
      width: '600px',
      hasBackdrop: false
    });
  }
}
