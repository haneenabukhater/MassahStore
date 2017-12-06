import { Component, OnInit } from '@angular/core';
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
