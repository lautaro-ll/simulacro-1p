import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaActoresComponent } from './alta-actores.component';

const routes: Routes = [
{
  path: '',
  component: AltaActoresComponent
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AltaActoresRoutingModule { }
