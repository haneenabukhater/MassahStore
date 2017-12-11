import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
@Component({
  selector: 'app-main-icon',
  templateUrl: './main-icon.component.html',
  styleUrls: ['./main-icon.component.css']
})
export class MainIconComponent implements OnInit {
  // tslint:disable-next-line:max-line-length
  icon: 'https://firebasestorage.googleapis.com/v0/b/massahcollection.appspot.com/o/massah_signature.png?alt=media&token=70b37b72-35fa-4a7f-b00a-a12eef2db10b';

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    // this.storageService
    // .getPicture('massah_signature.png')
    // .then(picURL => {
    //   this.icon = picURL;
    // })
    // .catch(error => {
    //   console.log(error);
    // });
  }

}
