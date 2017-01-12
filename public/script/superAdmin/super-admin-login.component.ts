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
    selector: 'super-admin-login',
    templateUrl: route + '/resources/views/superAdmin/super-admin-login.component.html'
})
export class SuperAdminLoginComponent {
    superAdminLoginForm: FormGroup;
    common: Common;
    superAdminLoginFailureMessage:boolean = false;
    message: string;

    constructor(private router: Router, private formBuilder: FormBuilder, private loginLogoutService: LoginLogoutService) { 
        this.superAdminLoginForm = formBuilder.group({
            'email': [null, [ Validators.required, CustomValidator.isInvalidEmail ]],
            'password': [null, Validators.required]
        });
        this.common = new Common();
    }

    superAdminLogin(value: Login){
        let response:Observable<ServiceResponse>;
        if(this.superAdminLoginForm.valid){
            response = this.loginLogoutService.login(value);
            response.subscribe(
                data => {
                    if(data.status){
                        this.common.authToken = data.result;
                        this.router.navigate([route + '/superAdmin/dashboard']);
                    } else {
                        this.superAdminLoginFailureMessage = true;
                        this.message = data.result;
                        setTimeout(function() {
                            this.superAdminLoginFailureMessage = false;
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