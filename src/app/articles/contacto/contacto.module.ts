import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ContactoRoutingModule } from './contacto-routing.module';

// El nav bar
import { NavModule } from 'src/app/shared/componentes/nav/nav.module';
import { ContactoComponent } from './contacto.component';
import { FooterModule } from 'src/app/shared/componentes/footer/footer.module';


@NgModule({
  declarations: [
    ContactoComponent
  ],
  imports: [
    CommonModule,
    ContactoRoutingModule,
    NavModule,
    FooterModule
  ]
})
export class ContactoModule { }
