import { Component, inject } from '@angular/core';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { InfluencerDetailHeadingComponent } from './components/influencer-detail-heading/influencer-detail-heading.component';
import { InfluencerClaimTbComponent } from './components/influencer-claim-tb/influencer-claim-tb.component';
import { ApiResponse } from '../../models/api-response';
import { DummyDataService } from '../../../services/dummy-data.service';
import { InfluencerService } from '../../../services/influencer.service';
import { InfluencerStatsResponse } from '../../models/influencer-stats-response';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-influencer-detail',
  imports: [
    PageHeaderComponent,
    InfluencerDetailHeadingComponent,
    InfluencerClaimTbComponent,
  ],
  templateUrl: './influencer-detail.component.html',
  styles: ``,
})
export class InfluencerDetailComponent {
  pageHeaderData: any;
  influencerObj: any;
  constructor(private activeRoute: ActivatedRoute) {
    this.pageHeaderData = {
      id: 1,
      name: 'Back to Leaderborad',
      url: '/admin/leaderborad',
    };
  }
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
  influencerId: string = '';

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
    this.activeRoute.paramMap.subscribe((params) => {
      this.influencerId = params.get('influencerId');
    });

    this.influencerService.getInfluencerById(this.influencerId).subscribe({
      next: (apiResponse: ApiResponse) => {
        this.influencerObj = apiResponse.data['data'];
      },
    });
  }
}
