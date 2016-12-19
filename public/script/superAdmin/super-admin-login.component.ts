import { Component, OnInit } from '@angular/core';
import { AppConstants } from '../helper/app.constants';

let route:string = AppConstants.RouteUrl;

@Component({
    selector: 'super-admin-login',
    templateUrl: route + '/resources/views/superAdmin/super-admin-login.component.html'
})
export class SuperAdminLoginComponent {
    constructor() { 

    }

}