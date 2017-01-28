import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { AppConstants } from '../helper/app.constants';
import { CustomValidator } from '../helper/custom.validator';
import { LoginLogoutService } from '../services/login-logout.service';
import { ServiceResponse } from '../models/service.response.model';
import { Login } from '../models/login.model';
import { Common } from '../helper/common';

let route:string = AppConstants.RouteUrl;

@Component({
    selector: 'admin-login',
    templateUrl: route + '/resources/views/admin/admin-login.component.html'
})
export class AdminLoginComponent {
    adminLoginForm: FormGroup;
    common: Common;
    adminLoginFailureMessage:boolean = false;
    message: string;
    private routerurl:string = AppConstants.RouterUrl;
    forgotPasswordLink: string;

    constructor(private router: Router, private formBuilder: FormBuilder, private loginLogoutService: LoginLogoutService) { 
        this.adminLoginForm = formBuilder.group({
            'email': [null, [ Validators.required, CustomValidator.isInvalidEmail ]],
            'password': [null, Validators.required]
        });
        this.forgotPasswordLink = this.routerurl + "/user/forgotPassword";
        this.common = new Common();
    }

    adminLogin(value: Login){
        let response:Observable<ServiceResponse>;
        if(this.adminLoginForm.valid){
            response = this.loginLogoutService.login(value);
            response.subscribe(
                data => {
                    if(data.status){
                        this.common.authToken = data.result;
                        this.router.navigate([route + '/admin/dashboard']);
                    } else {
                        this.adminLoginFailureMessage = true;
                        this.message = data.result;
                        setTimeout(function() {
                            this.adminLoginFailureMessage = false;
                        }.bind(this), 3000);
                    }
                },
                err => {
                    console.log(err);
                }
            );
            
        }
    }


}