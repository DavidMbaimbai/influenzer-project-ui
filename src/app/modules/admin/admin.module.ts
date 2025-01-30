import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminRoutingModule } from './admin-routing.module';
import { ToastNotifyService } from '../services/toast-notify.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, AdminRoutingModule],
  providers: [ToastNotifyService],
})
export class AdminModule {}
