import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { TableCreateViewModel } from 'src/app/model/viewModels/Table/TableCreate.viewmodel';
import { TableService } from 'src/app/services/admin/table.service';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from 'src/app/services/common/custom-toastr.service';

@Component({
  selector: 'app-create-table',
  templateUrl: './create-table.component.html',
  styleUrls: ['./create-table.component.scss']
})
export class CreateTableComponent{
  constructor(public dialogRef: MatDialogRef<CreateTableComponent>,
    private services: TableService,
    private toastr: CustomToastrService
  ) { dialogRef.disableClose = true }
  CreateMenuFormGroup = new FormGroup({
    tableName: new FormControl(''),
    tableLocation: new FormControl(''),
    capaticty: new FormControl('')
  });

  onNoClick(): void {
    this.dialogRef.close();
  }
  onSubmit(data: TableCreateViewModel) {
    this.services.CreateTable(data, () => {
      this.dialogRef.close(true);
      this.toastr.message("Masa başarı ile kayıt oldu", "Kayıt Başarılı", {
        position: ToastrPosition.TopRight,
        messageType: ToastrMessageType.Success
      });
    }, () => {
      this.toastr.message("Masa Oluşturma sırasında bir sorun oluştu", "Sorun Oluştu", {
        position: ToastrPosition.TopRight,
        messageType: ToastrMessageType.Error

      });
    });
  }
}
