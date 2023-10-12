import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription, catchError, map, of, toArray } from 'rxjs';
import { BanderasService } from 'src/app/services/banderas.service';
import { Output, EventEmitter } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.scss']
})
export class TablaPaisesComponent {

  faMagnifyingGlass = faMagnifyingGlass;
  subscripcionPaises?: Subscription;
  misPaises: any[] | undefined;
  bandera: string = "";
  busqueda: string = "";
  @Output() paisSeleccionado = new EventEmitter<string>();

  constructor(private servBandera: BanderasService, private http: HttpClient) { }

  ngOnInit(): void {
    this.subscripcionPaises = this.servBandera.fields('name,flags')
      .subscribe(
        banderas => {
          this.misPaises = banderas;
          this.misPaises?.sort((a, b) => a.name.common.localeCompare(b.name.common));
        });
  }

  ngOnDestroy() {
    this.subscripcionPaises?.unsubscribe();
  }

  clickPais(nombre: string) {
    this.paisSeleccionado.emit(nombre);
  }

  filtrarLista() {
    this.subscripcionPaises?.unsubscribe();
    if (this.busqueda == "") {
      this.subscripcionPaises = this.servBandera.fields('name,flags')
        .subscribe(
          banderas => {
            this.misPaises = banderas;
            this.misPaises?.sort((a, b) => a.name.common.localeCompare(b.name.common));
          });
    }
    else {
      this.subscripcionPaises = this.servBandera.pais(this.busqueda)
        .pipe(catchError((error: any, caught: Observable<any>): Observable<any> => {
          this.misPaises = [];
          return of();
        }))
        .subscribe(banderas => {
          this.misPaises = banderas;
          this.misPaises?.sort((a, b) => a.name.common.localeCompare(b.name.common));
        })
    }
  }

}
