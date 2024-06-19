import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, tap } from 'rxjs';
import { HandleErrorService } from '../handle-error.service';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  private apiUrl:string =`${environment.apiUrl}Header/`;

  constructor(private http:HttpClient, private handleError:HandleErrorService) { }

  //#region TITULARES
  getHeader():Observable<any>{
    const rutaApi = `${this.apiUrl}header_obtener`;
    return this.http.get<any>(rutaApi).pipe(
      catchError(this.handleError.handleError)
    )
  }

  //#endregion
}
