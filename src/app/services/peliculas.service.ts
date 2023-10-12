import { Injectable } from '@angular/core';
import { CollectionReference, DocumentData, Firestore, addDoc, collection, collectionData, deleteDoc, doc, getDocs, setDoc, updateDoc } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { Pelicula } from '../models/pelicula';

@Injectable({
  providedIn: 'root'
})
export class PeliculasService {

  constructor(private firestore: Firestore) { }

  // variable currentVarSatate compartida para todos los que consumen el servicio, se actualiza con updateVarState
  private varState = new BehaviorSubject('');
  public currentVarState = this.varState.asObservable();
  updateVarState(id: string) {
    this.varState.next(id)
  }
  
  //Define la referencia a la collección
  private colRef: CollectionReference<DocumentData> = collection(this.firestore, 'peliculas'); 

  //Obtiene un observable con la colección
  getCollection(): Observable<Pelicula[]> {
    return collectionData(this.colRef, { idField: 'id' }) as Observable<Pelicula[]>;
  }

  //Devuelve un objeto por id
  async getDocument(id: string) {
    var documentData: DocumentData = new Document();
    const querySnapshot = await getDocs(this.colRef);
    querySnapshot.forEach((doc) => {
      if (doc.id == id) {
        documentData = doc.data();
      }
    });
    return new Pelicula(
      documentData['titulo'], 
      documentData['anio'], 
      documentData['duracion'], 
      documentData['pais'], 
      documentData['director'], 
      documentData['protagonista'], 
      documentData['genero'], 
      documentData['cartel']
    );
  }

  //Actualiza o crea por id un objeto en la colección
  async setDocument(obj: Pelicula, id: string) {
    const docRef = doc(this.colRef, id);    //crea un doc con id automatico
    obj.id = id;                            //lo carga en el obj nuevo
    return setDoc(docRef, { ...obj }); 
  }

  //Crea un objeto nuevo en la colección
  addDocument(obj: Pelicula) {
    return addDoc(this.colRef, { ...obj });
  }

  //Modifica un objeto por id
  updDocument(obj: Pelicula) {
    const docRef = doc(this.firestore, `peliculas/${obj.id}`);
    return updateDoc(docRef, { ...obj })
  }

  //Elimina un objeto por id
  delDocument(id: string) {
    const docRef = doc(this.firestore, `peliculas/${id}`);
    return deleteDoc(docRef)
  }
  
}
