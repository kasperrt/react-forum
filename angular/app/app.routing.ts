import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* Import the components to be used in the routing  */
import { ProfileComponent }  from './components/profile/profile.component';
import { HomeComponent }    from './components/home/home.component';



/* Declare which paths leads to which component (view)  */
const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'home', component: HomeComponent }
];

/* Export the routermodule, so that others can access it.  */
export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);