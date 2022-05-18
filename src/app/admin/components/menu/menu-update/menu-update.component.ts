import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { UpdateMenuViewModel } from 'src/app/model/viewModels/Menu/MenuUpdate.viewmodel';
import { MenuTypesViewModel } from 'src/app/model/viewModels/MenuTypes/MenuTypes.viewmodel';
import { MenuService } from 'src/app/services/admin/menu.service';

@Component({
  selector: 'app-menu-update',
  templateUrl: './menu-update.component.html',
  styleUrls: ['./menu-update.component.scss']
})
export class MenuUpdateComponent implements OnInit {

  constructor(private services:MenuService,private dialogRef:MatDialogRef<MenuUpdateComponent>,@Inject) { }
  menuTypesList: MenuTypesViewModel[];
  UpdateMenuFormGroup = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    img: new FormControl(''),
    price: new FormControl(''),
    MenuTypesID: new FormControl('')
  });
  async ngOnInit() {
    this.menuTypesList = await this.services.GetAllMenuTypes();
  }
  onSubmit(data:UpdateMenuViewModel){
   //update için veri gelicek işlem yap :D
  }
}
