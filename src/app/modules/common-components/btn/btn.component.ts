import { Component, EventEmitter, Input, Output } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-btn',
  imports: [RouterModule],
  templateUrl: './btn.component.html',
  styles: ``,
})
export class BtnComponent {
  @Input() url: string = '';
  @Input() btnCss: string = '';
  @Input() name: string = '';
  @Input() btnIconCss: string = '';
  @Input() btnLoading: boolean = false;
  @Output() onBtnEmitter = new EventEmitter<string>();

  onBtnClickHandler($name: string) {
    this.onBtnEmitter.emit($name);
  }
}
