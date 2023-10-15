import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pelicula } from 'src/app/models/pelicula';

@Component({
  selector: 'app-tabla-peliculas',
  templateUrl: './tabla-peliculas.component.html',
  styleUrls: ['./tabla-peliculas.component.scss']
})
export class TablaPeliculasComponent {

  item: Pelicula = new Pelicula();
  @Input() peliculas: Array<Pelicula> = [];

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges() {
  }

}
