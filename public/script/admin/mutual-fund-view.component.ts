import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';
import * as moment from 'moment';

import { AppConstants } from '../helper/app.constants';
import { ServiceResponse } from '../models/service.response.model';
import { VendorService } from '../services/vendor-service';
import { UserService } from '../services/user-service';
import { MutualFundService } from '../services/mutual-fund-service';
import { EndUser } from '../models/end-user.model';
import { Vendor } from '../models/vendor.model';
import { MutualFund } from '../models/mutual-fund.model';

let route:string = AppConstants.RouteUrl;

@Component({
    selector: 'mutual-fund-view',
    host: {
        '(document:click)': 'handleClick($event)'
    },
    templateUrl: route + '/resources/views/admin/mutual-fund-view.component.html',
    providers: [ VendorService, UserService, MutualFundService ] 
})

export class MutualFundViewComponent {
    
    mutualFundEditForm: FormGroup;
    mutualFundEditSuccessMessage: boolean = false;
    mutualFundEditFailureMessage: boolean = false;
    mutualFundDeleteSuccessMessage: boolean = false;
    mutualFundDeleteFailureMessage: boolean = false;
    successMessage: string;
    failureMessage: string;
    mutualFundModel: MutualFund;
    mutualFunds: MutualFund[];
    hasMoreMutualFunds: boolean;
    isEditMutualFund: boolean = false;
    datePickerDate;
    datePickerValue;
    matureDatePickerValue;
    isDatePickerShown: boolean = false;
    isMatureDatePickerShown: boolean = false;
    today:Date = new Date();
    types;
    users: EndUser[];
    vendors: Vendor[];
    @ViewChild('deleteMutualFundModal') public deleteMutualFundModal:ModalDirective;

    constructor(private formBuilder: FormBuilder, private vendorService: VendorService, private userService: UserService, private mutualFundService: MutualFundService) {
        this.mutualFundEditForm = formBuilder.group({
            'user_id': ["", Validators.required],
            'vendor_id': ["", Validators.required],
            'folio_number': [null, Validators.required],
            'type': ["", Validators.required],
            'scheme': [null, Validators.required],
            'start_date': [null, Validators.required],
            'amount_invested': [null, Validators.required],
            'comments': [null],
            'mature_date': [null],
            'matured_amount': [null],
        });
        this.types = AppConstants.MUTUAL_FUND_TYPES;
        this.mutualFunds = [];
        this.mutualFundModel = new MutualFund();
        this.getUsers();
        this.getVendors();
        this.getMutualFundsList();
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


     getMutualFundsList(load?: boolean){
         let mutualFund: MutualFund = {};
         if(load){
             mutualFund.start = this.mutualFunds.length;
             mutualFund.size = AppConstants.PAGINATION_SIZE;
         }

         let response: Observable<ServiceResponse>;
         response =  this.mutualFundService.getMutualFundsList(mutualFund);
         response.subscribe(
             data => {
                 if(data.status){
                     if(data.result.length){
                         this.mutualFunds = this.mutualFunds.concat(data.result);
                         if(data.result.length < AppConstants.PAGINATION_SIZE){
                             this.hasMoreMutualFunds = false;
                         } else {
                             this.hasMoreMutualFunds = true;
                         }
                     }
                 }
             },
             err => {
                 console.log(err);
             }
         );
     }

    showDeleteConfirm(index:number, mutualFundId:number){
        this.mutualFundModel = {
            mutual_fund_id: mutualFundId,
            index: index
        };
        this.deleteMutualFundModal.show();
    }

    closeDeleteMutualFundModal(){
        this.mutualFundModel = {};
        this.deleteMutualFundModal.hide();
    }

    deleteMutualFund(){
        let mutualFund: MutualFund = this.mutualFundModel;
        let response: Observable<ServiceResponse>;

        response = this.mutualFundService.deleteMutualFund(mutualFund);
        response.subscribe(
            data => {
                if(data.status){
                    this.mutualFunds.splice(mutualFund.index, 1);
                    this.mutualFundDeleteSuccessMessage = true;
                    this.successMessage = data.result;
                    setTimeout(function() {
                        this.mutualFundDeleteSuccessMessage = false;
                        this.closeDeleteMutualFundModal();
                    }.bind(this), 3000);
                } else {
                    this.mutualFundDeleteFailureMessage = true;
                    this.failureMessage = data.result;
                    setTimeout(function() {
                        this.mutualFundDeleteFailureMessage = false;
                    }.bind(this), 3000);
                }
            },
            err => {
                console.log(err);
            }
        );
    }

    showEditMutualFund(index:number, mutualFund:MutualFund){
        this.isEditMutualFund = true;
        this.mutualFundModel = mutualFund;
        this.mutualFundModel.index = index;
        this.datePickerDate = moment(mutualFund.start_date).toDate();
        this.mutualFundEditForm = this.formBuilder.group({
            'user_id': [mutualFund.user_id, Validators.required],
            'vendor_id': [mutualFund.vendor_id, Validators.required],
            'folio_number': [mutualFund.folio_number, Validators.required],
            'type': [mutualFund.type, Validators.required],
            'scheme': [mutualFund.scheme, Validators.required],
            'start_date': [mutualFund.start_date, Validators.required],
            'amount_invested': [mutualFund.amount_invested, Validators.required],
            'comments': [mutualFund.comments],
            'mature_date': [mutualFund.mature_date],
            'matured_amount': [mutualFund.matured_amount],
        });

    }

    cancelEditMutualFund(){
        this.mutualFundModel = {};
        this.isEditMutualFund = false;
    }

    editMutualFund(value: MutualFund){
        if(this.mutualFundEditForm.valid){
            value.mutual_fund_id = this.mutualFundModel.id;
            let response: Observable<ServiceResponse>;
            
            response = this.mutualFundService.editMutualFund(value);
            response.subscribe(
                data => {
                    if(data.status){
                        this.mutualFundEditSuccessMessage = true;
                        this.successMessage = data.result;
                        value.id = this.mutualFundModel.id;

                        for(let key in this.mutualFunds[this.mutualFundModel.index]){
                            if(value[key] != undefined){
                                this.mutualFunds[this.mutualFundModel.index][key] = value[key];
                            }
                        }
                        
                        this.mutualFundModel = {};
                        setTimeout(function() {
                            this.mutualFundEditSuccessMessage = false;
                            this.isEditMutualFund = false;
                        }.bind(this), 3000);
                    } else{
                        this.mutualFundEditFailureMessage = true;
                        this.failureMessage = data.result;
                        setTimeout(function() {
                            this.mutualFundEditFailureMessage = false;
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

     showMatureDatePicker(){
         this.isMatureDatePickerShown = true;
     }

     hideMatureDatePicker(){
         this.isMatureDatePickerShown = false;
     }

     dateSelected(event){
         this.datePickerValue = moment(event).format("YYYY-MM-DD");
         this.hideDatePicker();
     }

     matureDateSelected(event){
         this.matureDatePickerValue = moment(event).format("YYYY-MM-DD");
         this.hideMatureDatePicker();
     }

     handleClick(event){
         if(!(event.target.closest('datepicker') != null || event.target.closest('.btn') != null || event.target.closest('.date-picker') != null)){
             this.hideDatePicker();
         }
     }
     

}