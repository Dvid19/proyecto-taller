import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';

// El Nav Bar
import { NavModule } from 'src/app/shared/componentes/nav/nav.module';
import { InicioComponent } from './inicio.component';
import { FooterModule } from 'src/app/shared/componentes/footer/footer.module';

// Sobre el carrusel
import { SlickCarouselModule } from 'ngx-slick-carousel';


@NgModule({
  declarations: [
    InicioComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    NavModule,
    FooterModule,
    SlickCarouselModule
  ]
})
export class InicioModule { }
