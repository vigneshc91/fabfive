import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs/Rx';

import { AppConstants } from '../helper/app.constants';
import { CustomValidator } from '../helper/custom.validator';
import { UserService } from '../services/user-service';
import { ServiceResponse } from '../models/service.response.model';
import { ForgotPassword } from '../models/forgot-password.model';

let route:string = AppConstants.RouteUrl;

@Component({
    selector: 'forgot-password',
    templateUrl: route + '/resources/views/user/forgot-password.component.html',
    providers: [ UserService ]
})
export class ForgotPasswordComponent {
    forgotPasswordForm: FormGroup;
    forgotPasswordFailureMessage:boolean = false;
    forgotPasswordSuccessMessage:boolean = false;
    message: string;
    
    constructor(private router: Router, private formBuilder: FormBuilder, private userService: UserService) { 
        this.forgotPasswordForm = formBuilder.group({
            'email': [null, [ Validators.required, CustomValidator.isInvalidEmail ]]
        });
    }

    forgotPassword(value: ForgotPassword){
        let response:Observable<ServiceResponse>;
        if(this.forgotPasswordForm.valid){
            response = this.userService.forgotPassword(value);
            response.subscribe(
                data => {
                    if(data.status){
                        this.forgotPasswordSuccessMessage = true;
                        this.message = data.result;
                        setTimeout(function() {
                            this.forgotPasswordSuccessMessage = false;
                        }.bind(this), 3000);
                    } else {
                        this.forgotPasswordFailureMessage = true;
                        this.message = data.result;
                        setTimeout(function() {
                            this.forgotPasswordFailureMessage = false;
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