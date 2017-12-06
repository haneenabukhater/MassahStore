import { Component, OnInit } from '@angular/core';
// import * as firebase from 'firebase';
// declare var firebase: any;
import { db } from '../app.module';
import { StorageService } from '../storage.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  url: string;

  constructor(private storageService: StorageService) {}

  ngOnInit() {
    // db.firebase.storage().ref('welcome1.jpg')
    // .getDownloadURL().then(url => {
    //   this.url = url;
    // })
    // .catch(error => {
    //   console.log(error);
    // });
    this.storageService
      .getPicture('about.jpg')
      .then(picURL => {
        this.url = picURL;
      })
      .catch(error => {
        console.log(error);
      });
  }
}
