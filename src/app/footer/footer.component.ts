import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  public userEmail;
  public inputtedEmail;
  constructor() { }

  ngOnInit() {}

  onKeyup(event) {
    const button =   <HTMLInputElement> document.getElementById("submitButton");
    button.disabled = true;
    this.userEmail = event.target.value.trim();
    if (this.userEmail.length < 6 || this.userEmail.indexOf('@') === -1 ||  this.userEmail.indexOf('.') === -1 ||  this.userEmail.indexOf(' ') > -1) {
      document.getElementById("errorMessage").innerHTML = "Enter the valid email";
    } else {
      document.getElementById("errorMessage").innerHTML = "";
      button.disabled = false;
    }
}

  submitEmail() {
    this.inputtedEmail = this.userEmail;
    document.getElementById("errorMessage").innerHTML = "Your email has been recorded!";
  }
}
