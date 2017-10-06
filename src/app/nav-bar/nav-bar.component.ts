import { Component, OnInit } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from '../authentication.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  providers: [AuthenticationService]
})
export class NavBarComponent implements OnInit {
  user;
  private isLoggedIn: Boolean;
  private userName: String;

  constructor(public authService: AuthenticationService) {
    this.authService.user.subscribe(user =>  {
      if (user == null) {
       this.isLoggedIn = false;
      } else {
       this.isLoggedIn = true;
       this.userName = user.displayName;
      }
    });
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit() {
  }
}
