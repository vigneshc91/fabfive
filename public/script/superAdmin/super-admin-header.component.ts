import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';

import { ServiceResponse } from '../models/service.response.model';
import { User } from '../models/user.model';
import { AppConstants } from '../helper/app.constants';
import { UserService } from '../services/user-service';
import { Common } from '../helper/common';

let route:string = AppConstants.RouteUrl;

@Component({
    selector: 'super-admin-header',
    templateUrl: route + '/resources/views/superAdmin/super-admin-header.component.html',
    providers: [ UserService ]
})
export class SuperAdminHeaderComponent {
    private loggedInUser:User;
    private routeurl:string = AppConstants.RouteUrl;
    private superAdminDashboardLink:string;
    private superAdminCreateLink:string;
    private superAdminViewLink:string;
    private common: Common;
    constructor(private router: Router, private userService: UserService) { 
        this.loggedInUser = {};
        this.superAdminDashboardLink = this.routeurl + '/superAdmin/dashboard';
        this.superAdminCreateLink = this.routeurl + '/superAdmin/create';
        this.superAdminViewLink = this.routeurl + '/superAdmin/view';
        this.common = new Common();
        this.getLoggedInUser();
    }

    getLoggedInUser(){
         let response: Observable<ServiceResponse>;
         response = this.userService.getLoggedInUser();
         response.subscribe(
             data => {
                 if(data.status){
                     this.loggedInUser = data.result;
                 } else {
                     this.router.navigate([this.routeurl + '/superAdmin/login']);
                 }
             },
             err => {
                 console.log(err);
             }
         );
     }

     superAdminLogout(){
         if(this.common.clearToken()){
             this.router.navigate([this.routeurl + '/superAdmin/login']);
         }
     }

}