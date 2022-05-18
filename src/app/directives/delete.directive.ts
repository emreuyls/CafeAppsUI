import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { MenuService } from '../services/admin/menu.service';
import * as $ from 'jquery';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from '../services/common/custom-toastr.service';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent, DialogConfirm } from '../Dialog/confirm-dialog/confirm-dialog.component';
import { HttpClientService } from '../services/common/http-client.service';
@Directive({
  selector: '[appDelete]'
})
export class DeleteDirective {

  constructor(private element: ElementRef,
    private _renderer: Renderer2,
    private httpServices: HttpClientService,
    private toastr: CustomToastrService,
    public dialog: MatDialog) {
    const span = _renderer.createElement('mat-icon');
    this._renderer.addClass(span, 'mat-icon');
    this._renderer.addClass(span, 'material-icons');
    this._renderer.appendChild(span, this._renderer.createText('delete'));
    this._renderer.appendChild(element.nativeElement, span);
  }
  @Input() id: string;
  @Input() controller: string;
  @Input() action: string;
  @Output() callback: EventEmitter<any> = new EventEmitter();
  @HostListener("click")
  onClick() {
    this.openDialog(() => {
      const table: HTMLTableCellElement = this.element.nativeElement;
      this.httpServices.delete({
        controller: this.controller,
        action: this.action

      }, this.id).subscribe(
        (success) => {
          $(table).parent().fadeOut(300, () => { this.callback.emit() });
          this.toastr.message("Silme İşlemi Başarılı", "Başarılı", {
            messageType: ToastrMessageType.Success,
            position: ToastrPosition.TopRight
          })
        }, (error) => {
          this.toastr.message("Silme İşlemi Sırasında Bir Sorun Oluştu", "Hata", {
            messageType: ToastrMessageType.Error,
            position: ToastrPosition.TopRight
          })
        }
      )
    })
  }
  openDialog(afterClosed: any): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: DialogConfirm.Yes,
    });
    dialogRef.afterClosed().subscribe(result => {
      if (result == DialogConfirm.Yes)
        afterClosed();
    });
  }
}
