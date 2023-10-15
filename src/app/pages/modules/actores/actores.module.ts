import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AltaActoresRoutingModule } from './actores-routing.module';
import { AltaActoresComponent } from './alta-actores/alta-actores.component';
import { TablaPaisesComponent } from 'src/app/components/tabla-paises/tabla-paises.component';
import { ActorPeliculaComponent } from './actor-pelicula/actor-pelicula.component';
import { TablaPeliculasComponent } from 'src/app/components/tabla-peliculas/tabla-peliculas.component';
import { DetallePaisComponent } from 'src/app/components/detalle-pais/detalle-pais.component';
import { DetalleActorComponent } from 'src/app/components/detalle-actor/detalle-actor.component';
import { PeliculasModule } from '../peliculas/peliculas.module';

@NgModule({
  declarations: [
    AltaActoresComponent,
    TablaPaisesComponent,
    ActorPeliculaComponent,
    TablaPeliculasComponent,
    DetallePaisComponent,
    DetalleActorComponent
    ],
  imports: [
    CommonModule,
    AltaActoresRoutingModule,
    FormsModule,
    FontAwesomeModule,
    PeliculasModule
  ],
  exports: [
    TablaPaisesComponent
  ]
})
export class AltaActoresModule { }
