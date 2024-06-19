import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class InicioComponent {

  header:any = {
    nombre:'David Mendez',
    fondoHeader: '',
    titulo: '',
    subtitulo: '',
    documentoCv: '',
    carrusel: ''
  }

  // Sobre le carrusel
  slides = [
    './assets/header-doctor.png',
    './assets/header-doctora.png'
  ];

  slideConfig = {
    "fade": true,
    "slideToShow": 1,
    "slideToScroll": 1,
    "autoplay": true,
    "autoplaySpeed": 1500,
    "pauseOnHover": false,
    "infinite": true,
    "arrows": false
    // "responsive": [
    //   {
    //     "breakpoint": 1024,
    //     "settings" : {
    //       "arrows": true,
    //       "infinite": true,
    //       "slideToShow": 1,
    //       "slidesToScroll": 1
    //     }
    //   }
    // ]
  }

}
