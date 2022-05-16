import { Component, Input, OnInit, Output } from '@angular/core';
import { GetTableViewModel } from 'src/app/model/viewModels/Table/TableGet.viewmodel';

@Component({
  selector: 'app-card-table',
  templateUrl: './card-table.component.html',
  styleUrls: ['./card-table.component.scss']
})
export class CardTableComponent implements OnInit {

  constructor() { }
  @Input() model: GetTableViewModel;
  time: number;
  ngOnInit(): void {

  }

}
