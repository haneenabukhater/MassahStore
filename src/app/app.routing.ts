import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CartComponent } from './cart/cart.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { LoginComponent } from './login/login.component';

const APP_ROUTES: Routes = [

  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'products/all',
    component: ProductListComponent
  },
  {
    path: 'products/:category',
    component: ProductListComponent
  },
  {
    path: 'products/item/:id',
    component: ProductDetailComponent
  },
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'about',
    component: AboutComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
