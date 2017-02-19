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
    selector: 'user-header',
    templateUrl: route + '/resources/views/user/header.component.html',
    providers: [ UserService ]
})
export class HeaderComponent {
    private loggedInUser:User;
    private routerurl:string = AppConstants.RouterUrl;
    private superAdminDashboardLink:string;
    private superAdminCreateLink:string;
    private superAdminViewLink:string;
    private changePasswordLink:string;

    private adminDashboardLink:string;
    private vendorDashboardLink:string;
    private vendorCreateLink:string;
    private vendorViewLink:string;
    private userDashboardLink:string;
    private userCreateLink:string;
    private userViewLink:string;
    private mutualFundDashboardLink:string;
    private mutualFundCreateLink:string;
    private mutualFundViewLink:string;
    private subscriptionDashboardLink:string;
    private subscriptionViewLink:string;
    private subscriptionSendMailLink:string;
    
    private common: Common;

    constructor(private router: Router, private userService: UserService) { 
        this.loggedInUser = {};
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
                     switch (this.loggedInUser.user_type) {
                         case 1:
                             this.setSuperAdminRoutes();
                             break;
                         case 2:
                             this.setAdminRoutes();
                             break;
                     }
                 } else {
                     this.router.navigate([this.routerurl + '/superAdmin/login']);
                 }
             },
             err => {
                 console.log(err);
             }
         );
     }

     setSuperAdminRoutes(){
        this.superAdminDashboardLink = this.routerurl + '/superAdmin/dashboard';
        this.superAdminCreateLink = this.routerurl + '/superAdmin/create';
        this.superAdminViewLink = this.routerurl + '/superAdmin/view';
        this.changePasswordLink = this.routerurl + '/user/changePassword';
     }

     setAdminRoutes(){
         this.adminDashboardLink = this.routerurl + '/admin/dashboard';
         this.changePasswordLink = this.routerurl + '/user/changePassword';
         this.vendorDashboardLink = this.routerurl + '/vendor/dashboard';
         this.vendorCreateLink = this.routerurl + '/vendor/create';
         this.vendorViewLink = this.routerurl + '/vendor/view';
         this.userDashboardLink = this.routerurl + '/user/dashboard';
         this.userCreateLink = this.routerurl + '/user/create';
         this.userViewLink = this.routerurl + '/user/view';
         this.mutualFundDashboardLink = this.routerurl + '/mutualFund/dashboard';
         this.mutualFundCreateLink = this.routerurl + '/mutualFund/create';
         this.mutualFundViewLink = this.routerurl + '/mutualFund/view';
         this.subscriptionDashboardLink = this.routerurl + '/subscription/dashboard';
         this.subscriptionViewLink = this.routerurl + '/subscription/view';
         this.subscriptionSendMailLink = this.routerurl + '/subscription/sendMail';
     }

     superAdminLogout(){
         if(this.common.clearToken()){
             this.router.navigate([this.routerurl + '/superAdmin/login']);
         }
     }

     adminLogout(){
         if(this.common.clearToken()){
             this.router.navigate([this.routerurl + '/admin/login']);
         }
     }

}