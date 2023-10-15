import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { Actor } from 'src/app/models/actor';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculasService } from 'src/app/services/peliculas.service';

@Component({
  selector: 'app-actor-pelicula',
  templateUrl: './actor-pelicula.component.html',
  styleUrls: ['./actor-pelicula.component.scss']
})
export class ActorPeliculaComponent {

  actor: Actor = new Actor("","","","");
  pais?: string;
  peliculas: Array<Pelicula> = [];
  subscription?: Subscription;

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit(): void {
  }  

  cargarActor(itemSeleccionado: Actor) {
    this.actor = itemSeleccionado;
    this.pais = itemSeleccionado.pais;
    this.peliculas = [];
    this.peliculasService.getDocuments().then((data)=> {
      data.forEach(element => {
        console.log(element);
        if(element.protagonista == this.actor.id)
          this.peliculas.push(element);
      });
    });
  }
  
}
