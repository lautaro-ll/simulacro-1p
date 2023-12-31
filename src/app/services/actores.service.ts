import { Injectable } from '@angular/core';
import { CollectionReference, DocumentData, Firestore, addDoc, collection, collectionData, deleteDoc, doc, getDocs, setDoc, updateDoc } from '@angular/fire/firestore';
import { BehaviorSubject, Observable } from 'rxjs';
import { Actor } from '../models/actor';

@Injectable({
  providedIn: 'root'
})
export class ActoresService {

  constructor(private firestore: Firestore) { }

  // variable currentVarSatate compartida para todos los que consumen el servicio, se actualiza con updateVarState
  private varState = new BehaviorSubject('');
  public currentVarState = this.varState.asObservable();
  updateVarState(id: string) {
    this.varState.next(id)
  }
  
  //Define la referencia a la collección
  private colRef: CollectionReference<DocumentData> = collection(this.firestore, 'actores'); 

  //Obtiene un observable con la colección
  getCollection(): Observable<Actor[]> {
    return collectionData(this.colRef, { idField: 'id' }) as Observable<Actor[]>;
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
    return new Actor(documentData['nombre'], documentData['apellido'], documentData['sexo'], documentData['pais']);
  }

  //Actualiza o crea por id un objeto en la colección
  async setDocument(obj: Actor, id: string) {
    const docRef = doc(this.colRef, id);    //crea un doc con id automatico
    obj.id = id;                            //lo carga en el obj nuevo
    return setDoc(docRef, { ...obj }); 
  }

  //Crea un objeto nuevo en la colección
  addDocument(obj: Actor) {
    return addDoc(this.colRef, { ...obj });
  }

  //Modifica un objeto por id
  updDocument(obj: Actor) {
    const docRef = doc(this.firestore, `actores/${obj.id}`);
    return updateDoc(docRef, { ...obj })
  }

  //Elimina un objeto por id
  delDocument(id: string) {
    const docRef = doc(this.firestore, `actores/${id}`);
    return deleteDoc(docRef)
  }
  
}
