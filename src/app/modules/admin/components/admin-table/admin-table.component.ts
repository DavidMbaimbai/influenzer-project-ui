import { Component, inject, OnInit } from '@angular/core';
import { InfluencerTableCardComponent } from '../influencer-table-card/influencer-table-card.component';
import { TrendTableCardComponent } from '../trend-table-card/trend-table-card.component';
import { InfluencerService } from '../../../services/influencer.service';
import { InfluencerResponse } from '../../models/influencer-response';
import { ApiResponse } from '../../models/api-response';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-admin-table',
  imports: [
    InfluencerTableCardComponent,
    TrendTableCardComponent,
    RouterModule,
  ],
  templateUrl: './admin-table.component.html',
  styles: ``,
})
export class AdminTableComponent implements OnInit {
  influenceService: InfluencerService = inject(InfluencerService);
  influencerList: InfluencerResponse[] = [];

  ngOnInit(): void {
    this.influenceService.getAllInfluencer().subscribe({
      next: (apiResponse: ApiResponse) => {
        console.log(apiResponse.data);
        this.influencerList = apiResponse.data['data'];
      },
      error: (apiResponse: ApiResponse) => {
        console.log(apiResponse.message);
      },
    });
  }
}
