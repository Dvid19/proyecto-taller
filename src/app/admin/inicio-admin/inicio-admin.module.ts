import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioAdminRoutingModule } from './inicio-admin-routing.module';
import { InicioAdminComponent } from './inicio-admin.component';

// Navbar
import { NavAdminModule } from 'src/app/shared/componentes/nav-admin/nav-admin.module';
// Footer
import { FooterModule } from 'src/app/shared/componentes/footer/footer.module';


@NgModule({
  declarations: [
    InicioAdminComponent
  ],
  imports: [
    CommonModule,
    InicioAdminRoutingModule,
    NavAdminModule,
    FooterModule
  ]
})
export class InicioAdminModule { }
