import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { DatepickerModule } from 'ng2-bootstrap';
import * as moment from 'moment';

import { AppConstants } from '../helper/app.constants';
import { CustomValidator } from '../helper/custom.validator';
import { ServiceResponse } from '../models/service.response.model';
import { Common } from '../helper/common';
import { VendorService } from '../services/vendor-service';
import { Vendor } from '../models/vendor.model';

let route:string = AppConstants.RouteUrl;

@Component({
    selector: 'user-create',
    host: {
        '(document:click)': 'handleClick($event)'
    },
    templateUrl: route + '/resources/views/admin/user-create.component.html',
    providers: [ VendorService ]
})

export class UserCreateComponent {
    
    userCreateForm: FormGroup;
    userCreateSuccessMessage: boolean = false;
    userCreateFailureMessage: boolean = false;
    successMessage: string;
    failureMessage: string;
    gender;
    datePickerDate;
    datePickerValue;
    isDatePickerShown: boolean = false;
    today:Date = new Date();

    constructor(private formBuilder: FormBuilder, private vendorService: VendorService) {
        this.userCreateForm = formBuilder.group({
            'first_name': [null, Validators.required],
            'last_name': [null, Validators.required],
            'email': [null, [ Validators.required, CustomValidator.isInvalidEmail ]],
            'date_of_birth': [null, Validators.required],
            'gender': ["", Validators.required],
            'contact_number': [null, Validators.required],
            'profile_pic': [null],
            'pan_card': [null, Validators.required],
            'introducer_name': [null],
            'address_line_1': [null, Validators.required],
            'address_line_2': [null],
            'city': [null, Validators.required],
            'state': [null, Validators.required],
            'country': [null, Validators.required],
            'pin_code': [null]
        });
        this.gender = AppConstants.GENDER_TYPES;
     }

     createUser(value: Vendor){
         if(this.userCreateForm.valid){
             let response: Observable<ServiceResponse>;
             response = this.vendorService.createVendor(value);
             response.subscribe(
                 data => {
                     if(data.status){
                         this.userCreateSuccessMessage = true;
                         this.successMessage = data.result;
                         this.userCreateForm.reset({'type': ''});
                         setTimeout(function() {
                             this.userCreateSuccessMessage = false;
                         }.bind(this), 3000);
                     } else {
                         this.userCreateFailureMessage = true;
                         this.failureMessage = data.result;
                         setTimeout(function() {
                             this.userCreateFailureMessage = false;
                         }.bind(this), 3000);
                     }
                 },
                 err => {
                     console.log(err);
                 }
             );
         }
     }

     showDatePicker(){
         this.isDatePickerShown = true;
     }

     hideDatePicker(){
         this.isDatePickerShown = false;
     }

     dateSelected(event){
         this.datePickerValue = moment(event).format("YYYY-MM-DD");
         this.hideDatePicker();
     }

     handleClick(event){
         if(!(event.target.closest('datepicker') != null || event.target.closest('.btn') != null || event.target.closest('.date_of_birth') != null)){
             this.hideDatePicker();
         }
     }

}