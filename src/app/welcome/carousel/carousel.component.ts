import { Component, OnInit } from '@angular/core';
import { StorageService } from '../../storage.service';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  welcome1; welcome2; welcome3; welcome4; string = '';

  constructor(private storageService: StorageService) { }

  ngOnInit() {
    console.log(this.welcome1);
    this.storageService.getPicture('welcome1.jpg')
    .then(picURL => {
      this.welcome1 = picURL;
    })
    .catch(error => {
      console.log(error);
    });
    this.storageService.getPicture('welcome2.jpg')
    .then(picURL => {
      this.welcome2 = picURL;
    })
    .catch(error => {
      console.log(error);
    });
    this.storageService.getPicture('welcome3.jpg')
    .then(picURL => {
      this.welcome3 = picURL;
    })
    .catch(error => {
      console.log(error);
    });
    this.storageService.getPicture('welcome4.jpg')
    .then(picURL => {
      this.welcome4 = picURL;
    })
    .catch(error => {
      console.log(error);
    });
  }

}
