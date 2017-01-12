import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators, AbstractControl } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

import { CustomValidator } from '../helper/custom.validator';
import { ChangePassword } from '../models/change-password.model';
import { ServiceResponse } from '../models/service.response.model';
import { UserService } from '../services/user-service';
import { AppConstants } from '../helper/app.constants';

let route:string = AppConstants.RouteUrl;

@Component({
    selector: 'change-password',
    templateUrl: route + '/resources/views/user/change-password.component.html',
    providers: [ UserService ]
})

export class ChangePasswordComponent {
    changePasswordForm:FormGroup;
    changePasswordSuccessMessage: boolean = false;
    changePasswordFailureMessage: boolean = false;
    successMessage: string;
    failureMessage: string;

    constructor(private formBuilder: FormBuilder, private userService: UserService) { 
        this.changePasswordForm = formBuilder.group({
            'old_password': [null, Validators.required],
            'new_password': [null, Validators.required],
            'confirm_new_password': [null, [ Validators.required, CustomValidator.passwordMatch ]] 
        });
    }

    changePassword(value: ChangePassword){
        if(this.changePasswordForm.valid){
            let response: Observable<ServiceResponse>;

            response = this.userService.changePassword(value);

            response.subscribe(
                data => {
                    if(data.status){
                        this.changePasswordSuccessMessage = true;
                        this.successMessage = data.result;
                        this.changePasswordForm.reset();
                        setTimeout(function() {
                            this.changePasswordSuccessMessage = false;
                        }.bind(this), 3000);
                    } else {
                        this.changePasswordFailureMessage = true;
                        this.failureMessage = data.result;
                        setTimeout(function() {
                            this.changePasswordFailureMessage = false;
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