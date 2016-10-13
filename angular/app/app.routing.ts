import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProfileComponent }  from './components/profile/profile.component';
import { HomeComponent }    from './components/home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent }
  { path: 'profile', component: ProfileComponent },
  { path: 'home', component: HomeComponent }
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);