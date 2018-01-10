import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ROUTING } from './app.routing';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import * as firebase from 'firebase';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './page_components/welcome/welcome.component';
import { FooterComponent } from './structural_components/footer/footer.component';
import { NavBarComponent } from './structural_components/nav-bar/nav-bar.component';
import { CarouselComponent } from './page_components/welcome/carousel/carousel.component';
import { ProductDetailComponent } from './functional_components/product-detail/product-detail.component';
import { ProductListComponent } from './functional_components/product-list/product-list.component';
import { CheckoutComponent } from './functional_components/checkout/checkout.component';
import { CartComponent } from './functional_components/cart/cart.component';
import { AboutComponent } from './page_components/about/about.component';
import { ContactComponent } from './page_components/contact/contact.component';
import { LoginComponent } from './page_components/login/login.component';
import { ProductButtonsComponent } from './functional_components/product-list/product-buttons/product-buttons.component';
import { CleanupDataComponent } from './functional_components/cleanup-data/cleanup-data.component';
import { ProductService } from './product.service';
import { StorageService } from './storage.service';
import { firebaseConfig } from '../environments/environment';
import { MainIconComponent } from './structural_components/main-icon/main-icon.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { WelcomeExtrasBarComponent } from './page_components/welcome/welcome-extras-bar/welcome-extras-bar.component';
import { SubscribeComponent } from './structural_components/footer/subscribe/subscribe.component';
import { FooterLinksComponent } from './structural_components/footer/footer-links/footer-links.component';
import { SocialIconsComponent } from './structural_components/footer/social-icons/social-icons.component';
import { MoreShoppingButtonsComponent } from './functional_components/product-detail/more-shopping-buttons/more-shopping-buttons.component';

firebase.initializeApp(firebaseConfig);

export const db = {
  firebase: firebase
};

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    FooterComponent,
    NavBarComponent,
    CarouselComponent,
    ProductDetailComponent,
    ProductListComponent,
    CheckoutComponent,
    CartComponent,
    AboutComponent,
    ContactComponent,
    LoginComponent,
    ProductButtonsComponent,
    CleanupDataComponent,
    MainIconComponent,
    WelcomeExtrasBarComponent,
    SubscribeComponent,
    FooterLinksComponent,
    SocialIconsComponent,
    MoreShoppingButtonsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpModule,
    ROUTING,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireModule,
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    MDBBootstrapModule.forRoot(),
  ],
  providers: [ ProductService, StorageService ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
