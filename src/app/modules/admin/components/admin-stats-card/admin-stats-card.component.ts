import { Component, Input } from '@angular/core';
import { DecimalPipe } from '@angular/common';
@Component({
  selector: 'app-admin-stats-card',
  imports: [DecimalPipe],
  templateUrl: './admin-stats-card.component.html',
  styles: ``,
})
export class AdminStatsCardComponent {
  @Input() item: any;
}
