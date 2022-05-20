import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmDialogComponent, DialogConfirm } from 'src/app/Dialog/confirm-dialog/confirm-dialog.component';
import { GetTableViewModel } from 'src/app/model/viewModels/Table/TableGet.viewmodel';
import { TableUpdateViewModel } from 'src/app/model/viewModels/Table/TableUpdate.viewmodel';
import { TableService } from 'src/app/services/admin/table.service';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from 'src/app/services/common/custom-toastr.service';

@Component({
  selector: 'app-show-table',
  templateUrl: './show-table.component.html',
  styleUrls: ['./show-table.component.scss']
})
export class ShowTableComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<ShowTableComponent>, @Inject(MAT_DIALOG_DATA) public data: GetTableViewModel, private services: TableService, private alertMessage: CustomToastrService, private dialog: MatDialog) { }
  updateTableFormGroup = new FormGroup({
    tableName: new FormControl(this.data.tableName),
    tableLocation: new FormControl(this.data.tableLocation),
    capaticty: new FormControl(this.data.capaticty)
  });
  ngOnInit(): void {
  }

  onSubmit(data: TableUpdateViewModel) {
    data.id = this.data.id;
    this.services.updateTable(data, () => {
      this.dialogRef.close(true);
      this.alertMessage.message("Masa Güncellendi.", "Başarılı", {
        messageType: ToastrMessageType.Success,
        position: ToastrPosition.TopRight
      });
    }, () => {
      this.alertMessage.message("Masa güncellemesi sırasında sorun oluştu.", "Hata", {
        messageType: ToastrMessageType.Error,
        position: ToastrPosition.TopRight
      });
    });
  }
  onDelete() {
    this.dialog.open(ConfirmDialogComponent, {
      width: '300px',
      data: DialogConfirm.Yes
    }).afterClosed().subscribe(result => result == DialogConfirm.Yes ? this.deleteDialog() : "");

  }
  deleteDialog() {
    this.services.deleteTable(this.data.id, () => {
      this.dialogRef.close(true);
      this.alertMessage.message("Silme İşlemi Başarılı","Başarılı",{
        messageType:ToastrMessageType.Success,
        position:ToastrPosition.TopRight
      })
    },
      () => {
        this.alertMessage.message("Silme İşlemi Sırasında Bir Sorun Oluştu","Hata",{
          messageType:ToastrMessageType.Error,
          position:ToastrPosition.TopRight
        })
      })
  }
}
