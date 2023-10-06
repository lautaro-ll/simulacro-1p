import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AltaActoresRoutingModule } from './alta-actores-routing.module';
import { AltaActoresComponent } from './alta-actores.component';
import { TablaPaisesComponent } from 'src/app/components/tabla-paises/tabla-paises.component';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


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
