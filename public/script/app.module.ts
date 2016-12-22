import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';

// Common Components
import { AppRoutingModule } from './app-routing.module';
import { SuperAdminHeaderComponent } from './superAdmin/super-admin-header.component';

// Super Admin Components
import { SuperAdminLoginComponent } from './superAdmin/super-admin-login.component';
import { SuperAdminDashboardComponent } from './superAdmin/super-admin-dashboard.component';
import { SuperAdminCreateComponent } from './superAdmin/super-admin-create.component';
import { SuperAdminViewComponent } from './superAdmin/super-admin-view.component';
// Services
import { LoginLogoutService } from './services/login-logout.service';


@NgModule({
  imports:      [ BrowserModule, FormsModule, ReactiveFormsModule, HttpModule, ModalModule, AppRoutingModule],
  declarations: [ AppComponent, SuperAdminLoginComponent, SuperAdminHeaderComponent, SuperAdminDashboardComponent, SuperAdminCreateComponent, SuperAdminViewComponent ],
  providers: [ LoginLogoutService ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
