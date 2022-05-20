import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { MatDialogContent, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { GetMenuListViewModel } from 'src/app/model/viewModels/Menu/GetMenuList.viewmodel';
import { MenuTypesViewModel } from 'src/app/model/viewModels/MenuTypes/MenuTypes.viewmodel';
import { MenuService } from 'src/app/services/admin/menu.service';

@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss']
})
export class CreateOrderComponent implements OnInit {

  constructor(private dialogRef:MatDialogRef<CreateOrderComponent>,@Inject(MAT_DIALOG_DATA) private data:MatDialogContent,private services:MenuService) { }
  MenuList:GetMenuListViewModel[];
  selectedMenu:any;
  MenuBasket:any[];

  ngOnInit(): void {
    this.getMenuList()
  }
  AddBasket(){
    this.MenuBasket.push(this.selectedMenu);
    //burada Kaldım.. menude seçilen verileri yada bir listede aktarılıp toplu olarak sipariş girme işlemi yapılacak ama galiba veri tabanında farklı türde bir admine özel sipariş kısmı girilmesi gereke bilir olmayada bilir bakalım.
  }
  async getMenuList(){
    this.MenuList=await this.services.getMenuList();
  }

}
