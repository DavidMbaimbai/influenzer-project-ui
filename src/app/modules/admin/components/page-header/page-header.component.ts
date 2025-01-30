import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-page-header',
  imports: [RouterModule],
  templateUrl: './page-header.component.html',
  styles: ``,
})
export class PageHeaderComponent {
  @Input() pageHeaderData: any;
  @Input() title: string = '';
}
