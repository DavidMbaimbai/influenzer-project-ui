import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-tab-select-btn',
  imports: [],
  templateUrl: './tab-select-btn.component.html',
  styles: ``,
})
export class TabSelectBtnComponent {
  @Input() btnCss: string = '';
  @Input() name: string = '';
  @Input() nameCss: string = '';
  @Input() descriptionCss: string = '';
  @Input() description: string = '';
  @Input() isDotted: boolean = false;
  @Input() dotCss: string = '';
  @Input() selectedTabIndex: number = 0;
  @Output() onSelectTabEmitter = new EventEmitter<number>();

  onSelectTabHandler(index: number) {
    this.onSelectTabEmitter.emit(index);
  }
}
