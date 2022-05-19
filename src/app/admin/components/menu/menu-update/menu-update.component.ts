import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { getMenuTableViewModel } from 'src/app/model/viewModels/Menu/MenuTable.viewmodel';
import { UpdateMenuViewModel } from 'src/app/model/viewModels/Menu/MenuUpdate.viewmodel';
import { MenuTypesViewModel } from 'src/app/model/viewModels/MenuTypes/MenuTypes.viewmodel';
import { MenuService } from 'src/app/services/admin/menu.service';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from 'src/app/services/common/custom-toastr.service';

@Component({
  selector: 'app-menu-update',
  templateUrl: './menu-update.component.html',
  styleUrls: ['./menu-update.component.scss']
})
export class MenuUpdateComponent implements OnInit {

  constructor(private services: MenuService, private dialogRef: MatDialogRef<MenuUpdateComponent>,@Inject(MAT_DIALOG_DATA) public data: getMenuTableViewModel,private AlertMessage:CustomToastrService) { }
  menuTypesList: MenuTypesViewModel[];
  menuTypesId:string;

  UpdateMenuFormGroup = new FormGroup({
    id: new FormControl(this.data.id),
    title: new FormControl(this.data.title),
    description: new FormControl(this.data.description),
    price: new FormControl(this.data.price),
    MenuTypesID: new FormControl(this.data.menuTypes.id)
  });
  async ngOnInit() {
    this.menuTypesList = await this.services.GetAllMenuTypes();

  }
  onSubmit(data: UpdateMenuViewModel) {
    data.CreateTime=this.data.createTime;
    data.updateTime=this.data.updateTime;
     this.services.UpdateMenu(data,()=>{
       this.dialogRef.close(true);
      this.AlertMessage.message("Menü Başarı ile Güncellendi","Başarılı",{
        position:ToastrPosition.TopRight,
        messageType:ToastrMessageType.Success,
      })
     },()=>{
      this.AlertMessage.message("Menü Güncellenirken Bir Sorunla Karşılaşıldı","Hata",{
        position:ToastrPosition.TopRight,
        messageType:ToastrMessageType.Error,
      })
     });
  }
}
