import { Component, inject, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { DummyDataService } from '../../services/dummy-data.service';
import { LogoComponent } from '../logo/logo.component';

@Component({
  selector: 'app-header',
  imports: [RouterModule, LogoComponent],
  templateUrl: './header.component.html',
  styles: ``,
})
export class HeaderComponent implements OnInit {
  dummyDataService: DummyDataService = inject(DummyDataService);
  router: Router = inject(Router);
  menuList: any[] = [];

  ngOnInit(): void {
    this.menuList = this.dummyDataService.menuList;
  }
  onLogoutHandler() {
    this.router.navigate(['/auth/signin']);
  }
}
