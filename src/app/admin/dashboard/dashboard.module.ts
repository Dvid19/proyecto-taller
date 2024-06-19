import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';

// Nav del admin
import { NavAdminModule } from 'src/app/shared/componentes/nav-admin/nav-admin.module';

// Footer
import { FooterModule } from 'src/app/shared/componentes/footer/footer.module';


@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    NavAdminModule,
    FooterModule
  ]
})
export class DashboardModule { }
