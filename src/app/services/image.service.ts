import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { FirebaseApp } from 'angularfire2';
import 'firebase/storage';
import { GalleryImage } from '../models/galleryImage.model';
import * as firebase from 'firebase';
@Injectable()
export class ImageService {

  constructor( private db: AngularFireDatabase) { }

  	getImages(): Observable<GalleryImage[]> {
    return this.db.list('uploads').valueChanges();
  }

  getImage(key: string) {
    return firebase.database().ref('uploads/' + key).once('value')
    .then((snap) => snap.val());
  }
}
