import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { DatepickerModule } from 'ng2-bootstrap';
import * as moment from 'moment';

import { AppConstants } from '../helper/app.constants';
import { CustomValidator } from '../helper/custom.validator';
import { ServiceResponse } from '../models/service.response.model';
import { Common } from '../helper/common';
import { UserService } from '../services/user-service';
import { VendorService } from '../services/vendor-service';
import { MutualFundService } from '../services/mutual-fund-service';
import { EndUser } from '../models/end-user.model';
import { Vendor } from '../models/vendor.model';
import { MutualFund } from '../models/mutual-fund.model';

let route:string = AppConstants.RouteUrl;

@Component({
    selector: 'mutual-fund-create',
    host: {
        '(document:click)': 'handleClick($event)'
    },
    templateUrl: route + '/resources/views/admin/mutual-fund-create.component.html',
    providers: [ UserService, VendorService, MutualFundService ]
})

export class MutualFundCreateComponent {
    
    mutualFundCreateForm: FormGroup;
    mutualFundCreateSuccessMessage: boolean = false;
    mutualFundCreateFailureMessage: boolean = false;
    successMessage: string;
    failureMessage: string;
    datePickerDate;
    datePickerValue;
    isDatePickerShown: boolean = false;
    today:Date = new Date();
    types;
    users: EndUser[];
    vendors: Vendor[];

    constructor(private formBuilder: FormBuilder, private userService: UserService, private vendorService: VendorService, private mutualFundService: MutualFundService) {
        this.mutualFundCreateForm = formBuilder.group({
            'user_id': ["", Validators.required],
            'vendor_id': ["", Validators.required],
            'folio_number': [null, Validators.required],
            'type': ["", Validators.required],
            'scheme': [null, Validators.required],
            'start_date': [null, Validators.required],
            'amount_invested': [null, Validators.required],
            'comments': [null]
        });
        this.types = AppConstants.MUTUAL_FUND_TYPES;
        this.getUsers();
        this.getVendors();
     }

     getUsers(){
         let user: EndUser = {};
         user.user_type = AppConstants.USER_TYPE.user;
         user.start = 0;
         user.size = AppConstants.MAX_VALUE;

         let response: Observable<ServiceResponse>;
         response =  this.userService.getUsersList(user);
         response.subscribe(
             data => {
                 if(data.status){
                     if(data.result.length){
                         this.users = data.result;
                     }
                 }
             },
             err => {
                 console.log(err);
             }
         );
     }

     getVendors(load?: boolean){
         let vendor: Vendor = {};
         vendor.type = AppConstants.VENDOR_VALUES.MUTUAL_FUND;
         vendor.start = 0;
         vendor.size = AppConstants.PAGINATION_SIZE;

         let response: Observable<ServiceResponse>;
         response =  this.vendorService.getVendorsList(vendor);
         response.subscribe(
             data => {
                 if(data.status){
                     if(data.result.length){
                         this.vendors = data.result;
                     }
                 }
             },
             err => {
                 console.log(err);
             }
         );
     }

     createMutualFund(value: MutualFund){
         if(this.mutualFundCreateForm.valid){
             let response: Observable<ServiceResponse>;
             
             response = this.mutualFundService.createMutualFund(value);
             response.subscribe(
                 data => {
                     if(data.status){
                         this.mutualFundCreateSuccessMessage = true;
                         this.successMessage = data.result;
                         this.mutualFundCreateForm.reset({
                             'vendor_id': '',
                             'user_id': '',
                             'type': ''
                            });
                         setTimeout(function() {
                             this.mutualFundCreateSuccessMessage = false;
                         }.bind(this), 3000);
                     } else {
                         this.mutualFundCreateFailureMessage = true;
                         this.failureMessage = data.result;
                         setTimeout(function() {
                             this.mutualFundCreateFailureMessage = false;
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
         if(!(event.target.closest('datepicker') != null || event.target.closest('.btn') != null || event.target.closest('.date-picker') != null)){
             this.hideDatePicker();
         }
     }

}