import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppConstants } from './helper/app.constants';
// Super Admin components
import { SuperAdminLoginComponent } from './superAdmin/super-admin-login.component';

let routeurl:string = AppConstants.RouteUrl;

const routes: Routes = [
  { path: routeurl + '/superAdmin', redirectTo: routeurl + '/superAdmin/login', pathMatch: 'full' },
  { path: routeurl + '/superAdmin/login', component: SuperAdminLoginComponent },
  
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
