import { Component, Input } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-textarea-ui',
  imports: [ReactiveFormsModule],
  templateUrl: './textarea-ui.component.html',
  styles: ``,
})
export class TextareaUiComponent {
  @Input() labelCss: string = '';
  @Input() label: string = '';
  @Input() rows: number = 5;
  @Input() textAreaCss: string = '';
  @Input() control = new FormControl();
  @Input() placeholder: string = '';
  @Input() textAreaTipLabel: string = '';
}
