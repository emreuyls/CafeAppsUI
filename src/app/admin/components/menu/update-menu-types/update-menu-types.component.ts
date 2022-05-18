import { Component, EventEmitter, Inject, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MenuTypesViewModel } from 'src/app/model/viewModels/MenuTypes/MenuTypes.viewmodel';
import { MenuService } from 'src/app/services/admin/menu.service';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from 'src/app/services/common/custom-toastr.service';

@Component({
  selector: 'app-update-menu-types',
  templateUrl: './update-menu-types.component.html',
  styleUrls: ['./update-menu-types.component.scss']
})
export class UpdateMenuTypesComponent {

  constructor(public dialogRef: MatDialogRef<UpdateMenuTypesComponent>,
    @Inject(MAT_DIALOG_DATA) public data: MenuTypesViewModel,
    private services: MenuService,
    private alerts:CustomToastrService) { }
  menuTypesFormGroup = new FormGroup({
    id: new FormControl(this.data.id),
    typeName: new FormControl(this.data.typeName)
  });
  SubmitForm(data: MenuTypesViewModel) {
    this.services.UpdateMenuTypes(data,
      () => {
        this.dialogRef.close(true);
        this.alerts.message("Veri Başarı İle Güncellendi","Başarılı",{
          messageType:ToastrMessageType.Success,
          position:ToastrPosition.TopRight
        })
      }, () => {
        this.alerts.message("Veri Güncelleme Sırasında Bir Sorun Oluştu","Hata",{
          messageType:ToastrMessageType.Error,
          position:ToastrPosition.TopRight
        })
      });
  }
}
