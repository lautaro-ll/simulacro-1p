import { Injectable } from '@angular/core';
import { CollectionReference, DocumentData, Firestore, addDoc, collection, collectionData, deleteDoc, doc, getDocs, setDoc, updateDoc } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { Actor } from '../models/actor';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {


  constructor(private firestore: Firestore) { }
  
  //BehaviorSubject es un tipo de Observable que permite un valor inicial
  private loginState = new BehaviorSubject('');

  //Propiedad que devuelve el estado actual del usuario logueado
  public currentLoginState = this.loginState.asObservable();
  
  //Actualiza el id del usuario logueado
  updateLoginState(id: string) {
    this.loginState.next(id)
  }

  //Define la referencia a la collección de usuarios
  private usuariosRef: CollectionReference<DocumentData> = collection(this.firestore, 'actores');

  //Crea un usuario nuevo en la colección
  addUsuario(usuario: Actor) {
    return addDoc(this.usuariosRef, {...usuario});
  }

  //Actualiza o crea por id un usuario en la colección
  async setUsuario(usuario: Actor, id: string) {
    const usuarioDocRef = doc(this.usuariosRef, id);
    usuario.id = id;
    return setDoc(usuarioDocRef, {...usuario});
  }

  //Obtiene un observable con la colección
  getUsuarios() : Observable<Actor[]> {
    return collectionData(this.usuariosRef, { idField: 'id' }) as Observable<Actor[]>;
  }

  //Devuelve la subscripción a la colección
  traerSubscripcion(){     
    return this.getUsuarios().subscribe((informacion) => {
      console.log(informacion);
    });
  }
  
  //Devuelve un usuario por id
  async getUsuario(id:string) {    
    var documentData: DocumentData = new Document();
    const querySnapshot = await getDocs(this.usuariosRef);
    querySnapshot.forEach((doc) => {
      if(doc.id == id) {
        documentData = doc.data();
      }
    });
    return new Actor(documentData['nombre'], documentData['apellido'], documentData['sexo'], documentData['pais']);
  }

  //Modifica un usuario por mail
  updUsuario(usuario: Actor) {
    const usuarioDocRef = doc(this.firestore, `actores/${usuario.nombre}`);
    return updateDoc(usuarioDocRef, {...usuario})
  }

  //Elimina un usuario por id
  delUsuario(id: string) {
    const usuarioDocRef = doc(this.firestore, `actores/${id}`);
    return deleteDoc(usuarioDocRef)
  }
}
