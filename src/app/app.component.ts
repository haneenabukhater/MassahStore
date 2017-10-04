import { Component } from '@angular/core';
import {Observable} from 'rxjs/Observable';
import { AuthenticationService } from './authentication.service';
// import * as firebase from 'firebase/app';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AuthenticationService]
})

export class AppComponent {
  // user;
  title = 'Massah Collection';
  time = new Observable<string>((observer) => {
    setInterval(()=> observer.next(new Date().toString()), 1000);
  });

  // constructor(public authService: AuthenticationService) {
  //   this.authService.user.subscribe(user =>  {
  //     console.log(user);
  //   });
  // }
  //
  // login() {
  //   this.authService.login();
  // }
  //
  // logout() {
  //   this.authService.logout();
  // }
}
