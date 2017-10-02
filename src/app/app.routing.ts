import { ModuleWithProviders }  from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { WelcomeComponent } from './welcome/welcome.component';

const APP_ROUTES: Routes = [

  { path: '', component: WelcomeComponent }

];

export const ROUTING: ModuleWithProviders = RouterModule.forRoot(APP_ROUTES);
