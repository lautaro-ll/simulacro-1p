import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map, toArray } from 'rxjs';
import { BanderasService } from 'src/app/services/banderas.service';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-tabla-paises',
  templateUrl: './tabla-paises.component.html',
  styleUrls: ['./tabla-paises.component.scss']
})
export class TablaPaisesComponent {
  
  misBanderas: any[] | undefined;
  misPaises: Observable<any> | undefined;
  bandera: string = "";
  @Output() paisSeleccionado = new EventEmitter<string>();

  constructor(private servBandera: BanderasService, private http: HttpClient) { }
  
  ngOnInit(): void {
    this.servBandera.name_flags().subscribe(
      banderas => {
        this.misBanderas = banderas;
      });

    this.misPaises = this.servBandera.name_flags();
  }

  clickPais(nombre: string) {
    this.paisSeleccionado.emit(nombre);
  }
}
