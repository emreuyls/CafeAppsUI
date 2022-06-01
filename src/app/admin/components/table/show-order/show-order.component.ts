import { Component, Inject, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { ConfirmDialogComponent, DialogConfirm } from 'src/app/Dialog/confirm-dialog/confirm-dialog.component';
import { OrderListMenuForTableViewModel } from 'src/app/model/viewModels/Order/OrderMenuForTable.viewmodel';
import { OrderService } from 'src/app/services/admin/order.service';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from 'src/app/services/common/custom-toastr.service';
import { CreateOrderComponent } from '../../order/create-order/create-order.component';


@Component({
  selector: 'app-show-order',
  templateUrl: './show-order.component.html',
  styleUrls: ['./show-order.component.scss']
})
export class ShowOrderComponent implements OnInit {
  TableMenuDs: MatTableDataSource<OrderListMenuForTableViewModel> = new MatTableDataSource<OrderListMenuForTableViewModel>();
  constructor(public dialogRef: MatDialogRef<ShowOrderComponent>, @Inject(MAT_DIALOG_DATA) public data: string, private orderService: OrderService, private message: CustomToastrService, private dialog: MatDialog,private route:Router) { }
  displayedColumns: string[] = ['menuName', 'stock', 'price'];
  DataOrderMenu: OrderListMenuForTableViewModel[] = [];
  orderID: string[] = [];
  ngOnInit(): void {
    this.getOrderMenu();
  }
  async getOrderMenu() {
    const dataModel = await this.orderService.getOrderMenuForTable(this.data)

    for (let i = 0; i < dataModel.length; i++) {
      this.orderID.push(dataModel[i].orderID);
      for (let m = 0; m < dataModel[i].menu.length; m++) {
        const sum = this.DataOrderMenu.find(a => a.menuName == dataModel[i].menu[m].menuName)
        if (sum != undefined)
          this.DataOrderMenu.filter(a => a.menuName === dataModel[i].menu[m].menuName).forEach(s => { s.stock = s.stock ? s.stock + dataModel[i].menu[m].stock : s.stock })
        else
          this.DataOrderMenu.push(dataModel[i].menu[m])
      }
    }
    this.TableMenuDs.data = this.DataOrderMenu;
  }
  getTotalCost() {
    let calc: number = 0;
    this.DataOrderMenu.forEach(a => {
      calc += a.price * a.stock;
    })
    return calc;
  }
  onComplateOrder() {
    this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: {
        messageTitle: "Hesap Ödeme",
        messageBody: "Masa'nın Hesabını Kapatmak İstiyormusunuz",
        DialogConfirm: DialogConfirm.Yes
      }
    }).afterClosed().subscribe(result => result == DialogConfirm.Yes ?
      this.orderService.ComplateOrderTable(this.orderID, () => {
        this.message.message("Başarılı", "Masa Hesap Ödemesi Yapılmıştır.", {
          messageType: ToastrMessageType.Success,
          position: ToastrPosition.TopRight
        });
        this.dialogRef.close();
      }, () => {
        this.message.message("Sorun", "Hesap Ödemesi Sırasında Bir Sorun Oluştu", {
          messageType: ToastrMessageType.Error,
          position: ToastrPosition.TopRight
        })
      })
      : "");
  }
  onNewOrder(){
    this.dialog.open(CreateOrderComponent,{
      width: '80%',
      height: '80%',
      data:this.data
    }).afterClosed().subscribe(result=>result?this.route.navigate(['admin/order']):"");
  }
}
