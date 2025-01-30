import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ResearchTasksComponent } from './pages/research-tasks/research-tasks.component';
import { InfluencerDetailComponent } from './pages/influencer-detail/influencer-detail.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'leaderborad',
        component: DashboardComponent,
      },
      { path: 'research-tasks', component: ResearchTasksComponent },
      {
        path: 'influencers/:influencerId',
        component: InfluencerDetailComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
