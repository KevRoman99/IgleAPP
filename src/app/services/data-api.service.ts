import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument} from '@angular/fire/firestore';

import {noticiasInterface} from '../models/noticias'
import { Observable } from 'rxjs';
import { Action } from 'rxjs/internal/scheduler/Action';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {

  constructor(private afs: AngularFirestore) { 
    this.noticiasCollection = afs.collection<noticiasInterface>('news');
    this.noticias = this.noticiasCollection.valueChanges();
  }
  private noticiasCollection: AngularFirestoreCollection<noticiasInterface>;
  private noticias: Observable<noticiasInterface[]>;
  private noticiaDoc: AngularFirestoreDocument<noticiasInterface>;
  private noticia: Observable<noticiasInterface>;


  getAllNoticias(){
    return this.noticias = this.noticiasCollection.snapshotChanges()
    .pipe(map(changes =>{
      return changes.map(action =>{
        const data = action.payload.doc.data() as noticiasInterface;
        data.id = action.payload.doc.id;
        return data;
      });
    }));
  }
  getOneNoticia(idNews){
    this.noticiaDoc = this.afs.doc<noticiasInterface>(`news/${idNews}`);
    return this.noticia = this.noticiaDoc.snapshotChanges().pipe(map(action =>{
      if(action.payload.exists == false){
        return null;
      }else{
        const data = action.payload.data() as noticiasInterface;
        data.id = action.payload.id;
        return data;
      }
    }));
  }
  addNoticias(){}
  updateNoticias(){}
  deleteNoticias(){}
}
