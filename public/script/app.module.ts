import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

// Common Components
import { AppRoutingModule } from './app-routing.module';

// Super Admin Components
import { SuperAdminLoginComponent } from './superAdmin/super-admin-login.component';
import { SuperAdminDashboardComponent } from './superAdmin/super-admin-dashboard.component';

// Services
import { LoginLogoutService } from './services/login-logout.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, ModalModule, AppRoutingModule],
  declarations: [ AppComponent, SuperAdminLoginComponent, SuperAdminDashboardComponent ],
  providers: [ LoginLogoutService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
