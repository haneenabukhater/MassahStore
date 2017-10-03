import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductListComponent } from './product-list/product-list.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { CartComponent } from './cart/cart.component';

const APP_ROUTES: Routes = [

  {
    path: '',
    component: WelcomeComponent
  },
  {
    path: 'products',
    component: ProductListComponent
  },
  {
    path: 'products/:id',
    component: ProductDetailComponent
  },
  {
    path: 'cart',
    component: CartComponent
  }
];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
