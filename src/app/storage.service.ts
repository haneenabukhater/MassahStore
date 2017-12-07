import { Injectable } from '@angular/core';
import { db } from './app.module';

@Injectable()
export class StorageService {

  constructor() { }

  getPicture(picture) {
    return db.firebase.storage().ref(picture)
    .getDownloadURL();
  }
}
