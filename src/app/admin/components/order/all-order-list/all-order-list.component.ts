import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { data } from 'jquery';
import { ConfirmDialogComponent, ConfirmDialogOptions, DialogConfirm } from 'src/app/Dialog/confirm-dialog/confirm-dialog.component';
import { getAllComfirmOrderViewModel } from 'src/app/model/viewModels/Order/getAllComfirmOrder.viewmodel';
import { OrderService } from 'src/app/services/admin/order.service';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from 'src/app/services/common/custom-toastr.service';
import { CreateOrderComponent } from '../create-order/create-order.component';

@Component({
  selector: 'app-all-order-list',
  templateUrl: './all-order-list.component.html',
  styleUrls: ['./all-order-list.component.scss']
})
export class AllOrderListComponent implements OnInit {
  comfirmOrderList: getAllComfirmOrderViewModel[] = [];
  constructor(public dialog: MatDialog, private orderService: OrderService, private messageAlert: CustomToastrService) { }

  ngOnInit(): void {
    this.getAllOrder();
  }
  async getAllOrder() {
    this.comfirmOrderList = await this.orderService.getAllComfirmOrder();
  }
  onNewOrderDialog() {
    this.dialog.open(CreateOrderComponent, {
      width: '80%',
      height: '80%',
      data:undefined
    }).afterClosed().subscribe(result => result ? this.getAllOrder() : "");
  }
  onDelivering(id: string) {
    this.dialog.open(ConfirmDialogComponent, {
      width: '600px',
      data: {messageTitle:"Sipariş Onayla",messageBody:"Mevcut Sipariş Teslim Edildi.",DialogConfirm:DialogConfirm.Yes}
    }).afterClosed().subscribe(result => result == DialogConfirm.Yes ? this.orderService.putOrderDelivering(id,
      () => { this.messageAlert.message("Başarılı", "Sipariş Onaylanmıştır.", { messageType: ToastrMessageType.Success, position: ToastrPosition.TopRight }); this.getAllOrder(); },
      () => { this.messageAlert.message("Sorun Oluştu", "Sipariş Onaylar İken Bir Sorun Oluştu", { messageType: ToastrMessageType.Error, position: ToastrPosition.TopRight }) }) : "");
  }
}
