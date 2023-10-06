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
    return this.http.get(this.api +'name/' + nombrePais).pipe(
      catchError(this.handleError)
    );;
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }
}
