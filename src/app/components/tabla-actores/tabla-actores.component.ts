import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { Subscription } from 'rxjs';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { ActoresService } from 'src/app/services/actores.service';
import { Actor } from 'src/app/models/actor';

@Component({
  selector: 'app-tabla-actores',
  templateUrl: './tabla-actores.component.html',
  styleUrls: ['./tabla-actores.component.scss']
})
export class TablaActoresComponent {

  constructor(private servActores: ActoresService) { }

  faMagnifyingGlass = faMagnifyingGlass;
  subscription?: Subscription;
  arrayItems?: Actor[];
  @Output() itemSeleccionado = new EventEmitter<Actor>();

  ngOnInit(): void {
    this.subscription = this.servActores.getCollection().subscribe((data)=>{
      this.arrayItems = data;
      this.arrayItems?.sort((a, b) => a.apellido.localeCompare(b.apellido));
    })
  }

  ngOnDestroy(): void {
    this.subscription?.unsubscribe();
  }
  
  clickItem(obj: Actor) {
    this.itemSeleccionado.emit(obj);
  }

}
