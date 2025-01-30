import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from '../../../common-components/header/header.component';

@Component({
  selector: 'app-layout',
  imports: [RouterModule, HeaderComponent],
  templateUrl: './layout.component.html',
  styles: ``,
})
export class LayoutComponent {}
