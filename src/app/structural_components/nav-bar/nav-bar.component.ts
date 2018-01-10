import { Component, OnInit, DoCheck } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AuthenticationService } from '../../authentication.service';
import { AppComponent } from '../../app.component';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css'],
  providers: [AuthenticationService]
})
export class NavBarComponent implements OnInit {
  user;
  public isLoggedIn: Boolean;
  public userName: String;
  public logoURI = 'https://firebasestorage.googleapis.com/v0/b/massahcollection.appspot.com/o/FBLogo.png?alt=media&token=91487cd0-8ef7-43e6-b670-bcd4bef574c9';

  constructor(public authService: AuthenticationService) {
    // this.authService.user.subscribe(user =>  {
    //   if (user == null) {
    //    this.isLoggedIn = false;
    //   } else {
    //    this.isLoggedIn = true;
    //    this.userName = user.displayName;
    //   }
    // });
  }

  login() {
    this.authService.login();
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit() {
    this.closeNavBarWhenItemsClicked();
  }
  ngDoCheck() {
  }

  closeNavBarWhenItemsClicked() {
    const navs = document.getElementsByClassName('nav-link');
    for (let i = 0; i < navs.length; i++) {
      navs[i].addEventListener('click', this.handleNavButtonClick);
    }
  }

  handleNavButtonClick() {
    const $navbar = document.getElementById('navbarResponsive');
    const _closed = $navbar.classList.contains('collapse');
    if (_closed) {
      $navbar.classList.remove('collapse');
    } else {
      $navbar.classList.add('collapse');
    }
  }
}
