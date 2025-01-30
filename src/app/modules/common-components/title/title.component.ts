import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  imports: [],
  templateUrl: './title.component.html',
  styles: ``,
})
export class TitleComponent {
  @Input() tittleCss: string = '';
  @Input() iconCss: string = '';
  @Input() tittle: string = '';
  @Input() iconClass: string = '';
}
