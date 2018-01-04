import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './functional_components/product-detail/product-detail.component';
import { ProductListComponent } from './functional_components/product-list/product-list.component';
import { WelcomeComponent } from './page_components/welcome/welcome.component';
import { CartComponent } from './functional_components/cart/cart.component';
import { AboutComponent } from './page_components/about/about.component';
import { ContactComponent } from './page_components/contact/contact.component';
import { LoginComponent } from './page_components/login/login.component';

const APP_ROUTES: Routes = [

  {
    path: '',
    component: WelcomeComponent
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
