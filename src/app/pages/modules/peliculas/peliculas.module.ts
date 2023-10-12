import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { PeliculasRoutingModule } from './peliculas-routing.module';
import { AltaPeliculasComponent } from './alta-peliculas/alta-peliculas.component';
import { TablaActoresComponent } from 'src/app/components/tabla-actores/tabla-actores.component';


@NgModule({
  declarations: [
    AltaPeliculasComponent,
    TablaActoresComponent
  ],
  imports: [
    CommonModule,
    PeliculasRoutingModule,
    FormsModule,
    FontAwesomeModule
  ]
})
export class PeliculasModule { }
