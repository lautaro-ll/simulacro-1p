import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaActoresComponent } from './alta-actores/alta-actores.component';
import { ActorPeliculaComponent } from './actor-pelicula/actor-pelicula.component';

const routes: Routes = [
  {
    path: 'alta',
    component: AltaActoresComponent
  },
  {
    path: '',
    component: ActorPeliculaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AltaActoresRoutingModule { }
