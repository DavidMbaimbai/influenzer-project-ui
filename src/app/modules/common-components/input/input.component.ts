import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input',
  imports: [ReactiveFormsModule],
  templateUrl: './input.component.html',
  styles: ``,
})
export class InputComponent {
  @Input() labelCss: string = '';
  @Input() label: string = '';
  @Input() iconCss: string = '';
  @Input() iconClass: string = '';
  @Input() type?: 'text' | 'password' | 'email' | 'number';
  @Input() control: FormControl = new FormControl();
  @Input() placeholder: string = '';
  @Input() inputCss: string = '';
  @Input() inputTipLabel: string = '';
  @Output() addItemByEnterKeyEmitter = new EventEmitter<string>();
  addItemByEnterKeyHandler(value: string) {
    this.addItemByEnterKeyEmitter.emit(value);
  }
  @Output() onIconClickEmitter = new EventEmitter();
  onIconClickHandler() {
    this.onIconClickEmitter.emit();
  }
  displayErrors() {
    const { dirty, touched, errors } = this.control;
    return dirty && touched && errors;
  }
}
