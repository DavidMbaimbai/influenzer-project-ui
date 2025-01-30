import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-trend-table-card',
  imports: [],
  templateUrl: './trend-table-card.component.html',
  styles: ``,
})
export class TrendTableCardComponent {
  @Input() isTrending: boolean = false;
}
