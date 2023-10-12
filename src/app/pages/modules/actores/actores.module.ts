import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AltaActoresRoutingModule } from './actores-routing.module';
import { AltaActoresComponent } from './alta-actores/alta-actores.component';
import { TablaPaisesComponent } from 'src/app/components/tabla-paises/tabla-paises.component';


@NgModule({
  declarations: [
    AltaActoresComponent,
    TablaPaisesComponent
    ],
  imports: [
    CommonModule,
    AltaActoresRoutingModule,
    FormsModule,
    FontAwesomeModule
  ]
})
export class AltaActoresModule { }
