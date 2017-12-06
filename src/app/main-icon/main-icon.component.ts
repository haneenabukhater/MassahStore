import { Component, OnInit } from '@angular/core';
import { StorageService } from '../storage.service';
@Component({
  selector: 'app-main-icon',
  templateUrl: './main-icon.component.html',
  styleUrls: ['./main-icon.component.css']
})
export class MainIconComponent implements OnInit {
  icon: string;
  constructor(private storageService: StorageService) { }

  ngOnInit() {
    this.storageService
    .getPicture('massah_signature.png')
    .then(picURL => {
      this.icon = picURL;
    })
    .catch(error => {
      console.log(error);
    });
  }

}
