import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AltaActoresRoutingModule } from './alta-actores-routing.module';
import { AltaActoresComponent } from './alta-actores.component';
import { TablaPaisesComponent } from 'src/app/components/tabla-paises/tabla-paises.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AltaActoresComponent,
    TablaPaisesComponent
    ],
  imports: [
    CommonModule,
    AltaActoresRoutingModule,
    FormsModule
  ]
})
export class AltaActoresModule { }
