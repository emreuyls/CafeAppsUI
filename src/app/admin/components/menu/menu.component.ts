import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MenuAddComponent } from './menu-add/menu-add.component';
import { MenuTableComponent } from './menu-table/menu-table.component';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(public dialog: MatDialog) { }
@ViewChild(MenuTableComponent) child:MenuTableComponent;
  ngOnInit(): void {
  }
  openCreateMenuDialog() {
    this.dialog.open(MenuAddComponent, {
      width: '600px'
    }).afterClosed().subscribe(result=>result?this.child.getPage():"");
  }
}
