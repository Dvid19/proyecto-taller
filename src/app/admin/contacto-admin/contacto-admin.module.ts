import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoAdminRoutingModule } from './contacto-admin-routing.module';
import { ContactoAdminComponent } from './contacto-admin.component';

import { NavAdminModule } from 'src/app/shared/componentes/nav-admin/nav-admin.module';
import { FooterModule } from 'src/app/shared/componentes/footer/footer.module';


@NgModule({
  declarations: [
    ContactoAdminComponent
  ],
  imports: [
    CommonModule,
    ContactoAdminRoutingModule,
    NavAdminModule,
    FooterModule
  ]
})
export class ContactoAdminModule { }
