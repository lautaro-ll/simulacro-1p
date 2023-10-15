import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaPeliculasComponent } from './alta-peliculas/alta-peliculas.component';

const routes: Routes = [
  {
    path: 'alta',
    component: AltaPeliculasComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PeliculasRoutingModule { }
