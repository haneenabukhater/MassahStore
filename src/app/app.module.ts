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
import { WelcomeComponent } from './welcome/welcome.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CarouselComponent } from './welcome/carousel/carousel.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { FilterTypePipe } from './filter-type.pipe';
import { ProductButtonsComponent } from './product-list/product-buttons/product-buttons.component';
import { CleanupDataComponent } from './cleanup-data/cleanup-data.component';
import { ProductService } from './product.service';
import { StorageService } from './storage.service';
import { firebaseConfig } from '../environments/environment';
import { MainIconComponent } from './main-icon/main-icon.component';
import { MDBBootstrapModule } from 'angular-bootstrap-md';

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
    FilterTypePipe,
    ProductButtonsComponent,
    CleanupDataComponent,
    MainIconComponent
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
