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
    private routerurl:string = AppConstants.RouterUrl;
    private superAdminDashboardLink:string;
    private superAdminCreateLink:string;
    private superAdminViewLink:string;
    private changePasswordLink:string;
    private common: Common;

    constructor(private router: Router, private userService: UserService) { 
        this.loggedInUser = {};
        this.superAdminDashboardLink = this.routerurl + '/superAdmin/dashboard';
        this.superAdminCreateLink = this.routerurl + '/superAdmin/create';
        this.superAdminViewLink = this.routerurl + '/superAdmin/view';
        this.changePasswordLink = this.routerurl + '/user/changePassword';
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
                     this.router.navigate([this.routerurl + '/superAdmin/login']);
                 }
             },
             err => {
                 console.log(err);
             }
         );
     }

     superAdminLogout(){
         if(this.common.clearToken()){
             this.router.navigate([this.routerurl + '/superAdmin/login']);
         }
     }

}