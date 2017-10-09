import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent {

  constructor(
    private router: Router
  ) { }

  shopNowButtonWasClicked() {
    this.router.navigate(['products/all']);
  }

}
