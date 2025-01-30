import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponse } from '../admin/models/api-response';
import { SpecificInfluencerRequest } from '../admin/models/specific-influencer-request';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class InfluencerService {
  baseAPIUrl = '';

  constructor(private http: HttpClient) {
    this.baseAPIUrl = 'https://mysql-ng8g-production.up.railway.app/api/v1'
  }

  createSpecificInfluencer(
    request: SpecificInfluencerRequest
  ): Observable<ApiResponse> {
    return this.http.post<ApiResponse>(
      `${this.baseAPIUrl}/influencer/specific-details`,
      request
    );
  }
  getAllInfluencer(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(`${this.baseAPIUrl}/influencer/all`);
  }
  getInfluencerStatsCount(): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(
      `${this.baseAPIUrl}/influencer/stats-count`
    );
  }
  getInfluencerById(influencerId: string): Observable<ApiResponse> {
    return this.http.get<ApiResponse>(
      `${this.baseAPIUrl}/influencer?id=${influencerId}`
    );
  }
}
