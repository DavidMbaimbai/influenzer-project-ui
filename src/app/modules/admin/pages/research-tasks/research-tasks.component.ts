import { Component, Input } from '@angular/core';
import { PageHeaderComponent } from '../../components/page-header/page-header.component';
import { ResearchConfigFormComponent } from "../../components/research-config-form/research-config-form.component";

@Component({
  selector: 'app-research-tasks',
  imports: [PageHeaderComponent, ResearchConfigFormComponent],
  templateUrl: './research-tasks.component.html',
  styles: ``,
})
export class ResearchTasksComponent {
  pageHeaderData: any;

  constructor() {
    this.pageHeaderData = {
      id: 1,
      name: 'Back to Leaderborad',
      url: '/admin/dashboard',
    };
  }
}
