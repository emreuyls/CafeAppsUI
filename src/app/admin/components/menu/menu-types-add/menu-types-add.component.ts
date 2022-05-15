import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, } from '@angular/material/dialog';
import { MenutypeAddViewModel } from 'src/app/model/viewModels/MenuTypes/MenuTypesAdd.ViewModel';
import { MenuService } from 'src/app/services/admin/menu.service';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from 'src/app/services/common/custom-toastr.service';
import { MenuTypesComponent } from '../menu-types/menu-types.component';

@Component({
  selector: 'app-menu-types-add',
  templateUrl: './menu-types-add.component.html',
  styleUrls: ['./menu-types-add.component.scss']
})
export class MenuTypesAddComponent implements OnInit {

  constructor(private services: MenuService, private formBuilder: FormBuilder, private dialogRef: MatDialogRef<MenuTypesComponent>, private toastr: CustomToastrService) { }
  menuTypesFormGroup: FormGroup;

  ngOnInit(): void {
    this.menuTypesFormGroup = this.formBuilder.group({
      typeName: [""]
    });
  }

  SubmitForm(data: MenutypeAddViewModel) {
    this.services.CreateMenuTypes(data, () => {
      this.dialogRef.close();
      this.toastr.message(`${data.typeName} Başarı İle Kayıt Edildi.`, "Kayıt Başarılı", {
        messageType: ToastrMessageType.Success,
        position: ToastrPosition.TopRight
      })
    }, () => {
      this.toastr.message(`Kayıt Sırasında Bir Sorun Çıtkı.`, "Kayıt Başarısız", {
        messageType: ToastrMessageType.Warning,
        position: ToastrPosition.TopRight
      })
    });
  }
}
