import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Observable, Subscription, catchError, of } from 'rxjs';
import { BanderasService } from 'src/app/services/banderas.service';

@Component({
  selector: 'app-detalle-pais',
  templateUrl: './detalle-pais.component.html',
  styleUrls: ['./detalle-pais.component.scss']
})
export class DetallePaisComponent {

  subscripcionPaises?: Subscription;
  nombre: string = "";
  imagen: string = "";
  @Input() value?: string;

  constructor(private servBandera: BanderasService, private http: HttpClient) { }

  ngOnInit(): void {
  }

  ngOnDestroy() {
    this.subscripcionPaises?.unsubscribe();
  }

  ngOnChanges() {
    console.log(this.value);
    if(this.value != undefined)
      this.getPais(this.value);
  }

  getPais(busqueda: string) {
    this.subscripcionPaises = this.servBandera.pais(busqueda)
    .subscribe(pais => {
      this.nombre = pais[0].name.common;
      this.imagen = pais[0].flags.svg;
    })
  }
}
