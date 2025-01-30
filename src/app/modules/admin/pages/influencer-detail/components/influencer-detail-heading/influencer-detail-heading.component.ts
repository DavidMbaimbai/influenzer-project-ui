import { Component, Input } from '@angular/core';
import { Influencer } from '../../../../models/influencer';

@Component({
  selector: 'app-influencer-detail-heading',
  imports: [],
  templateUrl: './influencer-detail-heading.component.html',
  styles: ``,
})
export class InfluencerDetailHeadingComponent {
  @Input() influencer: any;
}
