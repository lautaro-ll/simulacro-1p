import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'alta', 
    pathMatch: 'full'
    // component: HomeComponent
    // canActivate: [AuthGuard],
  },
  { 
    path: 'alta', 
    loadChildren: () => import('./pages/modules/alta-actores/alta-actores.module')
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
