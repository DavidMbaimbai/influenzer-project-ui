import { Component, inject, OnInit } from '@angular/core';
import { AdminStatsCardComponent } from '../../components/admin-stats-card/admin-stats-card.component';
import { DummyDataService } from '../../../services/dummy-data.service';
import { BtnComponent } from '../../../common-components/btn/btn.component';
import { AdminTableComponent } from '../../components/admin-table/admin-table.component';
import { InfluencerService } from '../../../services/influencer.service';
import { InfluencerStatsResponse } from '../../models/influencer-stats-response';
import { ApiResponse } from '../../models/api-response';

@Component({
  selector: 'app-dashboard',
  imports: [AdminStatsCardComponent, BtnComponent, AdminTableComponent],
  templateUrl: './dashboard.component.html',
  styles: ``,
})
export class DashboardComponent implements OnInit {
  statsList: { id: number; name: string; count: number; iconCss: string }[] =
    [];
  influenceStatsObj: InfluencerStatsResponse = {
    activeInfluencers: 0,
    claimsVerifiedCount: 0,
    averageTrustScoreRate: 0,
  };
  categoryFilterList: any[] = [];
  dummyDataService: DummyDataService = inject(DummyDataService);
  influencerService: InfluencerService = inject(InfluencerService);
  constructor() {}
  selectedCatName: string = 'all';
  ngOnInit(): void {
    this.influencerService.getInfluencerStatsCount().subscribe({
      next: (apiResponse: ApiResponse) => {
        this.statsList = this.statsList = [
          {
            id: 1,
            name: 'Active Influencers',
            count: apiResponse.data['data'].activeInfluencers,
            iconCss: 'fa-solid fa-users',
          },
          {
            id: 2,
            name: 'Claims Verified',
            count: apiResponse.data['data'].claimsVerifiedCount,
            iconCss: 'fa-solid fa-certificate',
          },
          {
            id: 3,
            name: 'Average Trust Score',
            count: apiResponse.data['data'].averageTrustScoreRate,
            iconCss: 'fa-solid fa-signal',
          },
        ];
      },
      error: (apiResponse: ApiResponse) => {
        console.log(apiResponse.message);
      },
    });

    this.categoryFilterList = this.dummyDataService.categoryFilterList;
  }
  onCatFilterClickHandler(catName: string) {
    this.selectedCatName = catName.toLowerCase();
    //fiter
  }
  onOrderBYHandler() {
    throw new Error('Method not implemented.');
  }
}
