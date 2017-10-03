import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public userEmail;
  constructor() { }

  ngOnInit() {
  }

  onKeyup(event) {
    this.userEmail = event.target.value;
    if (this.userEmail === '' || this.userEmail.indexOf('@') === -1 ||  this.userEmail.indexOf('.') === -1) {
      document.getElementById("errorMessage").innerHTML = "Enter the valid email";
    } else {
      document.getElementById("errorMessage").innerHTML = "";
    }
}

  submitEmail() {
  }
}
