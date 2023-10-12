import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { 
    path: '', 
    component: HomeComponent
    // canActivate: [AuthGuard],
  },
  { 
    path: 'peliculas', 
    loadChildren: () => import('./pages/modules/peliculas/peliculas.module')
    .then(mod => mod.PeliculasModule)
  },
  { 
    path: 'actores', 
    loadChildren: () => import('./pages/modules/actores/actores.module')
    .then(mod => mod.AltaActoresModule)
  },
  { 
    path: '**', 
    loadChildren: () => import('./pages/modules/not-found/not-found.module')
    .then(mod => mod.NotFoundModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
