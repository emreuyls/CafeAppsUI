import { Directive, ElementRef, EventEmitter, HostListener, Input, Output, Renderer2 } from '@angular/core';
import { MenuService } from '../services/admin/menu.service';
import * as $ from 'jquery';
import { CustomToastrService, ToastrMessageType, ToastrPosition } from '../services/common/custom-toastr.service';
@Directive({
  selector: '[appDelete]'
})
export class DeleteDirective {

  constructor(private element: ElementRef,
    private _renderer: Renderer2,
    private Services: MenuService,
    private toastr: CustomToastrService) {
    // const span = _renderer.createElement("mat-icon");
    // span.setAttribute("role", "img");
    // const text = _renderer.createText("delete");
    // this._renderer.appendChild(span, text)
    // _renderer.appendChild(element.nativeElement, span);
    const span = _renderer.createElement('mat-icon');
    this._renderer.addClass(span, 'mat-icon');
    this._renderer.addClass(span, 'material-icons');
    this._renderer.appendChild(span, this._renderer.createText('delete'));
    this._renderer.appendChild(element.nativeElement, span);
  }
  @Input() id: string;
  @Output() callback: EventEmitter<any> = new EventEmitter();
  @HostListener("click")
  onClick() {
    const table: HTMLTableCellElement = this.element.nativeElement;
    this.Services.DeleteMenuTypes(this.id, () => {
      $(table).parent().fadeOut(1000, () => { this.callback.emit() });
      this.toastr.message("Silme İşlemi Başarılı", "Başarılı", {
        messageType: ToastrMessageType.Success,
        position: ToastrPosition.TopRight
      })
    })

    console.log(this.id)
  }

}
