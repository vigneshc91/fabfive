import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

// Third party plugins
import { ModalModule, DatepickerModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ChartsModule } from 'ng2-charts';

// Common Components
import { AppRoutingModule } from './app-routing.module';
import { HeaderComponent } from './user/header.component';
import { ChangePasswordComponent } from './user/change-password.component';
import { ForgotPasswordComponent } from './user/forgot-password.component';

// Super Admin Components
import { SuperAdminLoginComponent } from './superAdmin/super-admin-login.component';
import { SuperAdminDashboardComponent } from './superAdmin/super-admin-dashboard.component';
import { SuperAdminCreateComponent } from './superAdmin/super-admin-create.component';
import { SuperAdminViewComponent } from './superAdmin/super-admin-view.component';

// Admin Components
import { AdminLoginComponent } from './admin/admin-login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard.component';
import { VendorDashboardComponent } from './admin/vendor-dashboard.component';
import { VendorCreateComponent } from './admin/vendor-create.component';
import { VendorViewComponent } from './admin/vendor-view.component';
import { UserDashboardComponent } from './admin/user-dashboard.component';
import { UserCreateComponent } from './admin/user-create.component';
import { UserViewComponent } from './admin/user-view.component';
import { MutualFundDashboardComponent } from './admin/mutual-fund-dashboard.component';
import { MutualFundCreateComponent } from './admin/mutual-fund-create.component';
import { MutualFundViewComponent } from './admin/mutual-fund-view.component';
import { SubscriptionDashboardComponent } from './admin/subscription-dashboard.component';
import { SubscriptionViewComponent } from './admin/subscription-view.component';
import { SubscriptionSendEmailComponent } from './admin/subscription-send-email.component';

// Services
import { LoginLogoutService } from './services/login-logout.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, ModalModule, AppRoutingModule, DatepickerModule, ChartsModule ],
  declarations: [ AppComponent, SuperAdminLoginComponent, HeaderComponent, SuperAdminDashboardComponent, 
                  SuperAdminCreateComponent, SuperAdminViewComponent, ChangePasswordComponent,
                  AdminLoginComponent, AdminDashboardComponent, VendorDashboardComponent, 
                  VendorCreateComponent, VendorViewComponent, UserDashboardComponent, ForgotPasswordComponent,
                  UserCreateComponent, UserViewComponent, MutualFundDashboardComponent,
                  MutualFundCreateComponent, MutualFundViewComponent,
                  SubscriptionDashboardComponent, SubscriptionViewComponent, SubscriptionSendEmailComponent ],
  providers: [ LoginLogoutService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
