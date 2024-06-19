import { Component, OnInit } from '@angular/core';
import { NgxCroppedEvent, NgxPhotoEditorService } from 'ngx-photo-editor';
import { HeaderService } from 'src/app/core/services/privado/header.service';

@Component({
  selector: 'app-inicio-admin',
  templateUrl: './inicio-admin.component.html',
  styleUrls: ['./inicio-admin.component.scss']
})
export class InicioAdminComponent implements OnInit {


  header:any = {
    navNombre: '',

    titulo:'',
    subtitulo: '',
    documentoCv: '',

    carrusel: [],

    fotoFondo: '',

    footerNombre: ''
  }

  // Titulares
  titulo:string = '';
  subtitulo:string = '';
  documentoCvUrl:string = '';
  documentoCv:any = null;

  // Foto del carrusel
  carrusel:any = [];
  fotoCarruselId:number = 0;
  fotoCarruselEstado:string = 'add';
  fotoCarrusel:string | any = '';
  output1?: NgxCroppedEvent;

  // Foto del fondo
  fotoFondoHeader:string | any = '';
  output2?: NgxCroppedEvent;

  constructor(
    private photoEditorService:NgxPhotoEditorService,
    private servicioHeader:HeaderService){}

  ngOnInit(): void {
    console.log('Inicio del componente')

    this.titularesGet();
  }

  agregarDocumento(event : any):void{
    const file:any = event.target.files;
    this.documentoCv = file;

  }

  eliminarDocumento():void{
    this.documentoCv = null;
  }

  //#region TITULARES
  titularesGet():void{
    this.servicioHeader.getHeader().subscribe(
      {next:(header:any) => {
        console.log(header);
      },error:(e) => {
        console.log(e);
      }}
    )
  }

  titularPost():void{
    const titularFormData = new FormData();
    titularFormData.append('titulo', this.titulo);
    titularFormData.append('subtitulo', this.subtitulo);
    titularFormData.append('documentoCv', this.documentoCv);
  }
  //#endregion


  //#region CARRUSEL
  fotoCarruselReset(){
    this.output1 = {};
    this.fotoCarrusel = '';
  }

  fotosCarruselGet():void{
    
  }

  fotoCarruselGet(idFotoCarrusel:number):void{
    
  }

  fotoCarruselPost():void{
    
  }

  fotoCarruselPut():void{
    
  }

  fotoCarruselDelete(idFotoCarrusel:number):void{
    
  }

  fileChangeHandler1(event: any) {
    this.photoEditorService.open(event, {
      aspectRatio: 15 / 18,
      autoCropArea: 1,
      hideModalHeader: false,
      closeBtnText: 'Denegar',
      applyBtnText: 'Aplicar'
    }).subscribe((data: NgxCroppedEvent) => {
      this.output1 = data;
      this.fotoCarrusel = data.base64;
    });
  }

  fotoCarruselLimpiar():void{
    this.output1 = {};
    this.fotoCarrusel = '';
  }

  //#endregion


  //#region FONDO
  fondoHeaderPut():void{
    
  }
  
  fondoHeaderDelete():void{
   
  }
  
  fileChangeHandler2(event: any) {
    this.photoEditorService.open(event, {
      aspectRatio: 40 / 27,
      autoCropArea: 1,
      hideModalHeader: false,
      closeBtnText: 'Denegar',
      applyBtnText: 'Aplicar'
    }).subscribe((data: NgxCroppedEvent) => {
      this.output2 = data;
      this.fotoFondoHeader = data.base64;
    });
  
  }
  
  fotoFondoLimpiar():void{
    this.output2 = {};
    this.fotoFondoHeader = '';
  }

  //#endregion

}
