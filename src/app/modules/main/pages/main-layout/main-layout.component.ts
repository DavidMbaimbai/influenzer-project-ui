import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LogoComponent } from "../../../common-components/logo/logo.component";

@Component({
  selector: 'app-main-layout',
  imports: [RouterModule, LogoComponent],
  templateUrl: './main-layout.component.html',
  styles: ``,
})
export class MainLayoutComponent {}
