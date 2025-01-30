import { Component, inject, OnInit } from '@angular/core';
import { TitleComponent } from '../../../../../common-components/title/title.component';
import { TrendTableCardComponent } from '../../../../components/trend-table-card/trend-table-card.component';
import { ClaimResponse } from '../../../../models/claim-response';
import { ClaimService } from '../../../../../services/claim.service';
import { ApiResponse } from '../../../../models/api-response';
import { ActivatedRoute } from '@angular/router';
import { DecimalPipe } from '@angular/common';

@Component({
  selector: 'app-influencer-claims-table',
  imports: [TitleComponent, TrendTableCardComponent, DecimalPipe],
  templateUrl: './influencer-claims-table.component.html',
  styles: ``,
})
export class InfluencerClaimsTableComponent implements OnInit {
  claimService: ClaimService = inject(ClaimService);
  claimList: ClaimResponse[] = [];
  influencerId: string = '';
  constructor(private activeRoute: ActivatedRoute) {}
  ngOnInit(): void {
    this.activeRoute.paramMap.subscribe((params) => {
      this.influencerId = params.get('influencerId');
    });
    this.claimService.getClaimsByInfluencerId(this.influencerId).subscribe({
      next: (apiResponse: ApiResponse) => {
        this.claimList = apiResponse.data['data'];
      },
    });
  }
}
