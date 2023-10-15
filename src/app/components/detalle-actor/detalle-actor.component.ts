import { Component, Input } from '@angular/core';
import { Actor } from 'src/app/models/actor';

@Component({
  selector: 'app-detalle-actor',
  templateUrl: './detalle-actor.component.html',
  styleUrls: ['./detalle-actor.component.scss']
})
export class DetalleActorComponent {
  
  @Input() actor: Actor = new Actor("","","","");

  constructor() { }

  ngOnInit(): void {
  }

}
