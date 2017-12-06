import { Injectable } from '@angular/core';
import { db } from './app.module';

@Injectable()
export class StorageService {

  constructor() { }

  getPicture(picture) {
    return db.firebase.storage().ref(picture)
    .getDownloadURL();
    // db.firebase.storage().ref(picture)
    //   .getDownloadURL().then(dbURL => {
    //     url = dbURL;
    //     console.log(url)
    //     return url;
    //   })
    //   .catch(error => {
    //     console.log(error);
    //   });
  }
}
