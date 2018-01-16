import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-subscribe",
  templateUrl: "./subscribe.component.html",
  styleUrls: ["./subscribe.component.css"]
})
export class SubscribeComponent implements OnInit {
  public userEmail;
  public inputtedEmail;
  errorMessage;

  constructor() {}

  ngOnInit() {}

  onKeyup(event) {
    const button = <HTMLInputElement>document.getElementById("submitButton");
    button.disabled = true;
    const userEmail = event.target.value.trim();
    if (!userEmail) {
      return (this.errorMessage = "");
    }
    if (!this.validEmail(userEmail)) {
      this.errorMessage = "Please enter a valid email";
    } else {
      this.errorMessage = "";
      button.disabled = false;
    }
  }
  validEmail(email: string) {
    return (
      email.length > 6 &&
      email.includes("@") &&
      email.includes(".") &&
      !email.includes(" ")
    );
  }

  submitEmail() {
    this.inputtedEmail = this.userEmail;
    this.toastMessage("Your email has been recorded!");
  }
  toastMessage(string) {
    this.errorMessage = string;
    setTimeout(() => {
      this.errorMessage = "";
    }, 2000);
  }
}
