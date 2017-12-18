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
