import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

import { AppConstants } from '../helper/app.constants';
import { ServiceResponse } from '../models/service.response.model';
import { Common } from '../helper/common';
import { AdminService } from '../services/admin-service';
import { CustomValidator } from '../helper/custom.validator';
import { CreateAdmin } from '../models/create-admin.model';

let route:string = AppConstants.RouteUrl;

@Component({
    selector: 'super-admin-create',
    templateUrl: route + '/resources/views/superAdmin/super-admin-create.component.html',
    providers: [ AdminService ] 
})

export class SuperAdminCreateComponent {
    
    adminCreateForm: FormGroup;
    adminCreateSuccessMessage: boolean = false;
    adminCreateFailureMessage: boolean = false;
    successMessage: string;
    failureMessage: string;

    constructor(private formBuilder: FormBuilder, private adminService: AdminService) {
        this.adminCreateForm = formBuilder.group({
            'first_name': [null, Validators.required],
            'last_name': [null],
            'email': [null, [ Validators.required, CustomValidator.isInvalidEmail ]],
        });
     }

     createAdmin(value: CreateAdmin){
         if(this.adminCreateForm.valid){
             let response: Observable<ServiceResponse>;
             response = this.adminService.createAdmin(value);
             response.subscribe(
                 data => {
                     if(data.status){
                         this.adminCreateSuccessMessage = true;
                         this.successMessage = data.result;
                         this.adminCreateForm.reset();
                         setTimeout(function() {
                             this.adminCreateSuccessMessage = false;
                         }.bind(this), 3000);
                     } else {
                         this.adminCreateFailureMessage = true;
                         this.failureMessage = data.result;
                         setTimeout(function() {
                             this.adminCreateFailureMessage = false;
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