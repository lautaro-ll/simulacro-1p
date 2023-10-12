import { Component } from '@angular/core';
import { ActoresService } from 'src/app/services/actores.service';
import { Actor } from 'src/app/models/actor';
import { Pelicula } from 'src/app/models/pelicula';
import { PeliculasService } from 'src/app/services/peliculas.service';
import Swal from 'sweetalert2';
import { getDownloadURL, getStorage, ref, uploadBytes, uploadString } from '@angular/fire/storage';

@Component({
  selector: 'app-alta-peliculas',
  templateUrl: './alta-peliculas.component.html',
  styleUrls: ['./alta-peliculas.component.scss']
})
export class AltaPeliculasComponent {

  actor: Actor = new Actor("","","","");
  pelicula: Pelicula = new Pelicula();
  file: string = "";

  constructor(private peliculasService: PeliculasService) { }

  ngOnInit(): void {
  }

  cargarActor(itemSeleccionado: Actor) {
    this.actor = itemSeleccionado;
    this.pelicula.protagonista = this.actor.id;
  }

  onFileSelected(event: any) {
    const files = event.target.files;
    if (files.length === 0)
      return;

    const mimeType = files[0].type;
    if (mimeType.match(/image\/*/) == null) {
      Swal.fire({
        icon: 'error',
        title: 'Sólo se permiten imagenes.',
      });
      this.file = "";
      return;
    }

    const reader = new FileReader();
    reader.readAsDataURL(files[0]);
    reader.onload = (_event) => {
      this.pelicula.cartel = reader.result!.toString();
    }
  }

  validarPelicula(): boolean {
    let esValido: boolean = true;
    if (this.pelicula.titulo == "" ||
      this.pelicula.anio == null ||
      this.pelicula.duracion == "" ||
      this.pelicula.pais == "" ||
      this.pelicula.director == "" ||
      this.pelicula.genero == "" ||
      this.pelicula.cartel == "") {
      esValido = false;
    }
    return esValido;
  }
  
  clickGuardar() {
    if (this.validarPelicula()) {
      this.guardarPelicula();
    }
    else {
      Swal.fire({
        icon: 'error',
        title: 'No se pudo guardar la película',
        html: 'Debe completar todos los campos.',
      });
    }
  }

  guardarPelicula() {
    const storage = getStorage();
    const storageRef = ref(storage, this.pelicula.titulo + '-' + this.pelicula.id + this.file.substring(this.file.lastIndexOf("."),this.file.length));

    uploadString(storageRef, this.pelicula.cartel!, 'data_url').then((snapshot) => {
      getDownloadURL(snapshot.ref).then(async (url) => {
        this.pelicula.cartel = url;
        this.peliculasService.addDocument(this.pelicula)
          .then(() => {
            Swal.fire({
              icon: 'success',
              title: 'Película guardada correctamente',
            });
            this.clickLimpiar();
          });
      })
    });
  }

  clickLimpiar() {
    this.pelicula = new Pelicula();
    this.actor = new Actor("","","","");
    this.file = "";
  }
}
