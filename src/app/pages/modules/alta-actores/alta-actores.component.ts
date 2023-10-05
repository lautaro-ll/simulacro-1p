import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Actor } from 'src/app/models/actor';
import { ActoresService } from 'src/app/services/actores.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alta-actores',
  templateUrl: './alta-actores.component.html',
  styleUrls: ['./alta-actores.component.scss']
})
export class AltaActoresComponent {

  regForm!: FormGroup;
  nombre: string = '';
  apellido: string = '';
  sexo: string = '';
  pais: string = '';
  
  constructor(private actoresService: ActoresService) { }

  ngOnInit(): void {
  }

  clickGuardar() {
    if (this.nombre != '' && this.apellido != '' && this.sexo != '' && this.pais != '') {
      this.actoresService.addUsuario(new Actor(this.nombre, this.apellido, this.sexo, this.pais))
      .then(()=>{
        Swal.fire({
          icon: 'success',
          title: 'Actor guardado correctamente',
        });
        this.clickLimpiar();
      });
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'No se pudo guardar el actor',
        html: 'Debe completar todos los campos.',
      });
    }
  }

  clickLimpiar() {
    this.nombre = '';
    this.apellido = '';
    this.sexo = '';
    this.pais = '';
  }

  cargarPais(paisSeleccionado: string) {
    this.pais = paisSeleccionado;
    console.log(this.nombre)
    console.log(this.apellido)
    console.log(this.sexo)
    console.log(this.pais)
  }

  changeSexo(target: any) {
    this.sexo = target.value;
  }

}
