import { Component, inject, Input } from '@angular/core';
import { AdminStatsCardComponent } from '../../../../components/admin-stats-card/admin-stats-card.component';
import { BtnComponent } from '../../../../../common-components/btn/btn.component';
import { ApiResponse } from '../../../../models/api-response';
import { InfluencerService } from '../../../../../services/influencer.service';
import { DummyDataService } from '../../../../../services/dummy-data.service';
import { InfluencerStatsResponse } from '../../../../models/influencer-stats-response';
import { InfluencerClaimsTableComponent } from '../influencer-claims-table/influencer-claims-table.component';

@Component({
  selector: 'app-influencer-claim-tb',
  imports: [
    AdminStatsCardComponent,
    BtnComponent,
    InfluencerClaimsTableComponent,
  ],
  templateUrl: './influencer-claim-tb.component.html',
  styles: ``,
})
export class InfluencerClaimTbComponent {
  @Input() statsList: any;
  @Input() categoryFilterList: any;
  selectedCatName: string = 'all';
  onCatFilterClickHandler(catName: string) {
    this.selectedCatName = catName.toLowerCase();
    //fiter
  }
  onOrderBYHandler() {
    throw new Error('Method not implemented.');
  }
}
