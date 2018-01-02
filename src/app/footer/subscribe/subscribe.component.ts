import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subscribe',
  templateUrl: './subscribe.component.html',
  styleUrls: ['./subscribe.component.css']
})
export class SubscribeComponent implements OnInit {
  public userEmail;
  public inputtedEmail;

  constructor() { }

  ngOnInit() { }

  onKeyup(event) {
    const button = <HTMLInputElement>document.getElementById('submitButton');
    button.disabled = true;
    const userEmail = event.target.value.trim();
    if (!userEmail) {
      return this.displayErrorMessage('');
    }
    if (!this.validEmail(userEmail)) {
      this.displayErrorMessage('Please enter a valid email');
    } else {
      this.displayErrorMessage('');
      button.disabled = false;
    }
  }
  validEmail(email: string) {
    return email.length > 6 &&
      email.includes('@') &&
      email.includes('.') &&
      !email.includes(' ');
  }

  displayErrorMessage(message: string) {
    document.getElementById('errorMessage').innerHTML = message;
  }

  submitEmail() {
    this.inputtedEmail = this.userEmail;
    document.getElementById('errorMessage').innerHTML = 'Your email has been recorded!';
  }

}
