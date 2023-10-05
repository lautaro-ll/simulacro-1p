import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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

  name_flags(): Observable<any> {
    return this.http.get(this.api + 'all?fields=name,flags');    
  }

  pais(nombrePais:string): Observable<any>{
    return this.http.get(this.api +'name/' + nombrePais);
    
  }}
