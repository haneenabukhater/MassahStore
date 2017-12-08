import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
// tslint:disable:max-line-length
  slides = ['https://firebasestorage.googleapis.com/v0/b/massahcollection.appspot.com/o/welcome1.jpg?alt=media&token=54b284dd-5107-4d12-88a1-cfaeed3ecfae',
            'https://firebasestorage.googleapis.com/v0/b/massahcollection.appspot.com/o/welcome2.jpg?alt=media&token=bc806b1d-b36f-4e41-b3d6-57c8a424551b',
            'https://firebasestorage.googleapis.com/v0/b/massahcollection.appspot.com/o/welcome3.jpg?alt=media&token=9ec50bbc-7c49-4a89-8bb2-c317ccd93971',
            'https://firebasestorage.googleapis.com/v0/b/massahcollection.appspot.com/o/welcome4.jpg?alt=media&token=74561927-4e14-4efd-a51b-bd6dfbb314b8'
          ];
  slideSpeed = 2500;
  constructor( ) { }

  ngOnInit() { }

}
