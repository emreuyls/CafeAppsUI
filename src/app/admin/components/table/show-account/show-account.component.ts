import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-show-account',
  templateUrl: './show-account.component.html',
  styleUrls: ['./show-account.component.scss']
})
export class ShowAccountComponent implements OnInit {

  constructor(  public dialogRef: MatDialogRef<ShowAccountComponent>,) { }

  ngOnInit(): void {
  }

}
