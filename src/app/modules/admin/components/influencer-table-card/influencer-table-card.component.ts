import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-influencer-table-card',
  imports: [],
  templateUrl: './influencer-table-card.component.html',
  styles: ``,
})
export class InfluencerTableCardComponent {
  @Input() fullName: string = '';
  @Input() imgUrl: string = '';
}
