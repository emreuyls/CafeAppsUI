import { Component, OnInit } from '@angular/core';
import { OrderGetAllTableWithViewTable } from 'src/app/model/viewModels/Order/GetAllTableWithOrder.viewmodel';
import { OrderService } from 'src/app/services/admin/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  constructor(private services: OrderService) { }

  Tablemodel: OrderGetAllTableWithViewTable[] = [];
  ngOnInit(): void {
    this.getAllTable()
  }
  async getAllTable() {
    this.Tablemodel = await this.services.GetAllTableWithOrder();
  }
}
