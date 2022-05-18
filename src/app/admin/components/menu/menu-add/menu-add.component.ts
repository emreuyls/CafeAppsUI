import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { CreateMenuViewModel } from 'src/app/model/viewModels/Menu/CreateMenu.viewmodel';
import { MenuTypesViewModel } from 'src/app/model/viewModels/MenuTypes/MenuTypes.viewmodel';
import { MenuService } from 'src/app/services/admin/menu.service';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from 'src/app/services/common/custom-toastr.service';
@Component({
  selector: 'app-menu-add',
  templateUrl: './menu-add.component.html',
  styleUrls: ['./menu-add.component.scss']
})
export class MenuAddComponent implements OnInit {


  constructor(private formBuilder: FormBuilder, private services: MenuService, private message: CustomToastrService, private dialogRef: MatDialogRef<MenuAddComponent>,) { dialogRef.disableClose=true}
  menuTypesList: MenuTypesViewModel[];
  CreateMenuFormGroup = new FormGroup({
    title: new FormControl(''),
    description: new FormControl(''),
    img: new FormControl(''),
    price: new FormControl(''),
    MenuTypesID: new FormControl('')
  });

  async ngOnInit() {

    this.menuTypesList = await this.services.GetAllMenuTypes();
  }
  onSubmit(data: CreateMenuViewModel) {
    this.services.CreateMenu(data,
      () => {
        this.dialogRef.close(true);
        this.message.message("Kayıt Başarılı", "Başarılı", {
          position: ToastrPosition.TopRight,
          messageType: ToastrMessageType.Success
        });
      }
      , () => {
        this.message.message("Kayıt Başarısız", "Başarısız", {
          position: ToastrPosition.TopRight,
          messageType: ToastrMessageType.Error
        })
      }
    );
  }

}
