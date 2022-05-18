import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuTypesWithMenuViewModel } from 'src/app/model/viewModels/MenuTypes/MenuTypesWithMenu.viewmodel';
import { TableService } from 'src/app/services/ui/table.service';
declare var $: any;
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  constructor(private route: ActivatedRoute, private services: TableService) { }
  id: string;
  menutypes: MenuTypesWithMenuViewModel[];

  async ngOnInit() {
    console.log(this.route.params.subscribe(params => {
      this.id = params["id"]
    }));
    this.menutypes = await this.services.getTableMenu();

  }
}
$(document).ready(function () {
  $('.menu .item')
    .tab()
    ;
})


