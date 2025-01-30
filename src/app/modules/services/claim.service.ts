import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../admin/models/api-response';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class ClaimService {
  baseAPIUrl = '';

  constructor(private http: HttpClient) {
    this.baseAPIUrl = 'https://mysql-ng8g-production.up.railway.app/api/v1';
  }
  getClaimsByInfluencerId(influencerId: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(
      `${this.baseAPIUrl}/influencer/claims/${influencerId}`
    );
  }
}
