import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  url = 'https://firebasestorage.googleapis.com/v0/b/massahcollection.appspot.com/o/about.jpg?alt=media&token=55f5c7a7-1f78-4c50-af19-e60e3148cc58';

  constructor() { }

}
