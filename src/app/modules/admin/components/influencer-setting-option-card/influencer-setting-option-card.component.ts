import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-influencer-setting-option-card',
  imports: [],
  templateUrl: './influencer-setting-option-card.component.html',
  styles: ``,
})
export class InfluencerSettingOptionCardComponent {
  @Input() item: any;
}
