import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ROUTING } from './app.routing';
import { masterFirebaseConfig } from './api-keys';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule} from 'angularfire2/auth';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { FooterComponent } from './footer/footer.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { CarouselComponent } from './welcome/carousel/carousel.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { CartComponent } from './cart/cart.component';
import { FilterDuplicatesPipe } from './filter-duplicates.pipe';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';
import { FilterTypePipe } from './filter-type.pipe';
import { ProductButtonsComponent } from './product-list/product-buttons/product-buttons.component';
import { PublicComponent } from './public/public.component';
import { PrivateComponent } from './private/private.component';



export const firebaseConfig = {
  apiKey: masterFirebaseConfig.apiKey,
  authDomain: masterFirebaseConfig.authDomain,
  databaseURL: masterFirebaseConfig.databaseURL,
  storageBucket: masterFirebaseConfig.storageBucket,
  messagingSenderId: masterFirebaseConfig.messagingSenderId
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
    FilterDuplicatesPipe,
    LoginComponent,
    FilterTypePipe,
    ProductButtonsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpModule,
    ROUTING,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
