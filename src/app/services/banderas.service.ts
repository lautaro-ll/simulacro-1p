import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BanderasService {

  api: string = 'https://restcountries.com/v3.1/';

  constructor(private http: HttpClient) {

  }

  todos(): Observable<any> {
    return this.http.get(this.api + 'all');    
  }

  fields(params: string): Observable<any> {
    return this.http.get(this.api + 'all?fields=' + params);    
  }

  pais(nombrePais:string): Observable<any>{
    return this.http.get(this.api +'name/' + nombrePais);
  }
}
