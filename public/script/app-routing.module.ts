import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppConstants } from './helper/app.constants';
// Super Admin components
import { SuperAdminLoginComponent } from './superAdmin/super-admin-login.component';
import { SuperAdminDashboardComponent } from './superAdmin/super-admin-dashboard.component';
import { SuperAdminCreateComponent } from './superAdmin/super-admin-create.component';
import { SuperAdminViewComponent } from './superAdmin/super-admin-view.component';
import { ChangePasswordComponent } from './user/change-password.component';
// Admin components
import { AdminLoginComponent } from './admin/admin-login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard.component';

let routeurl:string = AppConstants.RouteUrl;

const routes: Routes = [
  // super admin routes
  { path: routeurl + '/superAdmin', redirectTo: routeurl + '/superAdmin/login', pathMatch: 'full' },
  { path: routeurl + '/superAdmin/login', component: SuperAdminLoginComponent },
  { path: routeurl + '/superAdmin/dashboard', component: SuperAdminDashboardComponent },
  { path: routeurl + '/superAdmin/create', component: SuperAdminCreateComponent },
  { path: routeurl + '/superAdmin/view', component: SuperAdminViewComponent },
  // common routes
  { path: routeurl + '/user/changePassword', component: ChangePasswordComponent },
  // admin routes  
  { path: routeurl + '/admin', redirectTo: routeurl + '/admin/login', pathMatch: 'full' },
  { path: routeurl + '/admin/login', component: AdminLoginComponent },
  { path: routeurl + '/admin/dashboard', component: AdminDashboardComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})

export class AppRoutingModule {}
