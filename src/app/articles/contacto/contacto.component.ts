import { Component } from '@angular/core';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent {

  contacto:any = {
    fotoFondo: '',
    fotoUsuario: '',
    titulo: '',
    subtitulo: '',
    links: [
      {idLink:0, link:'', foto:'', descripcion:''}
    ]
  };

}
