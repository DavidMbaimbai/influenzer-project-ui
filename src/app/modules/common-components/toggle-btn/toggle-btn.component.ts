import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-toggle-btn',
  imports: [],
  templateUrl: './toggle-btn.component.html',
  styles: ``,
})
export class ToggleBtnComponent {
  @Input() id: string = '';
  @Output() onToggleEmitter = new EventEmitter();
  onToggleBtnClickHandler($event: Event) {
    this.onToggleEmitter.emit();
    //$event.preventDefault();
  }
}
