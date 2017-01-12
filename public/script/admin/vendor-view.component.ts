import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';

import { AppConstants } from '../helper/app.constants';
import { ServiceResponse } from '../models/service.response.model';
import { VendorService } from '../services/vendor-service';
import { Vendor } from '../models/vendor.model';

let route:string = AppConstants.RouteUrl;

@Component({
    selector: 'vendor-view',
    templateUrl: route + '/resources/views/admin/vendor-view.component.html',
    providers: [ VendorService ] 
})

export class VendorViewComponent {
    
    vendorEditForm: FormGroup;
    vendorSearchForm: FormGroup;
    vendorEditSuccessMessage: boolean = false;
    vendorEditFailureMessage: boolean = false;
    vendorDeleteSuccessMessage: boolean = false;
    vendorDeleteFailureMessage: boolean = false;
    successMessage: string;
    failureMessage: string;
    vendorModel: Vendor;
    vendors: Vendor[];
    hasMoreVendors: boolean;
    isEditVendor: boolean = false;
    vendorList;
    vendorNames;
    @ViewChild('deleteVendorModal') public deleteVendorModal:ModalDirective;

    constructor(private formBuilder: FormBuilder, private vendorService: VendorService) {
        this.vendorEditForm = formBuilder.group({
            'type': ["", Validators.required],
            'name': [null, Validators.required]
        });
        this.vendorSearchForm = formBuilder.group({
            'type': [""]
        });
        this.vendors = [];
        this.vendorModel = new Vendor();
        this.vendorList = AppConstants.VENDOR_TYPES;
        this.vendorNames = AppConstants.VENDOR_NAMES;
        this.getVendorsList();
     }

     getVendorsList(load?: boolean){
         let vendor: Vendor = {};
         if(load){
             vendor.start = this.vendors.length;
             vendor.size = AppConstants.PAGINATION_SIZE;
         }
         if(this.vendorModel.type){
             vendor.type = this.vendorModel.type;
         }

         let response: Observable<ServiceResponse>;
         response =  this.vendorService.getVendorsList(vendor);
         response.subscribe(
             data => {
                 if(data.status){
                     if(data.result.length){
                         this.vendors = this.vendors.concat(data.result);
                         if(data.result.length < AppConstants.PAGINATION_SIZE){
                             this.hasMoreVendors = false;
                         } else {
                             this.hasMoreVendors = true;
                         }
                     }
                 }
             },
             err => {
                 console.log(err);
             }
         );
     }

     showDeleteConfirm(index:number, vendorId:number){
        this.vendorModel = {
            vendor_id: vendorId,
            index: index
        };
        this.deleteVendorModal.show();
    }

     closeDeleteVendorModal(){
        this.vendorModel = {};
        this.deleteVendorModal.hide();
    }

    deleteVendor(){
        let vendor: Vendor = this.vendorModel;
        let response: Observable<ServiceResponse>;

        response = this.vendorService.deleteVendor(vendor);
        response.subscribe(
            data => {
                if(data.status){
                    this.vendors.splice(vendor.index, 1);
                    this.vendorDeleteSuccessMessage = true;
                    this.successMessage = data.result;
                    setTimeout(function() {
                        this.vendorDeleteSuccessMessage = false;
                        this.closeDeleteVendorModal();
                    }.bind(this), 3000);
                } else {
                    this.vendorDeleteFailureMessage = true;
                    this.failureMessage = data.result;
                    setTimeout(function() {
                        this.vendorDeleteFailureMessage = false;
                    }.bind(this), 3000);
                }
            },
            err => {
                console.log(err);
            }
        );
    }

    showEditVendor(index:number, vendor:Vendor){
        this.isEditVendor = true;
        this.vendorModel = vendor;
        this.vendorModel.index = index;
        this.vendorEditForm = this.formBuilder.group({
            'type': [vendor.type, Validators.required],
            'name': [vendor.name, Validators.required],
        });

    }

    cancelEditVendor(){
        this.vendorModel = {};
        this.isEditVendor = false;
    }

    editVendor(value: Vendor){
        if(this.vendorEditForm.valid){
            value.vendor_id = this.vendorModel.id;
            let response: Observable<ServiceResponse>;
            
            response = this.vendorService.editVendor(value);
            response.subscribe(
                data => {
                    if(data.status){
                        this.vendorEditSuccessMessage = true;
                        this.successMessage = data.result;
                        value.id = this.vendorModel.id;
                        this.vendors[this.vendorModel.index] = value;
                        this.vendorModel = {};
                        setTimeout(function() {
                            this.vendorEditSuccessMessage = false;
                            this.isEditVendor = false;
                        }.bind(this), 3000);
                    } else{
                        this.vendorEditFailureMessage = true;
                        this.failureMessage = data.result;
                        setTimeout(function() {
                            this.vendorEditFailureMessage = false;
                        }.bind(this), 3000);
                    }
                },
                err => {
                    console.log(err);
                }
            );

        }
    }

    searchVendor(value: Vendor){
        if(this.vendorSearchForm.valid){
         this.vendorModel.type = value.type;
         let response: Observable<ServiceResponse>;
         response =  this.vendorService.getVendorsList(value);
         response.subscribe(
             data => {
                 if(data.status){
                     this.vendors = [];
                     if(data.result.length){
                         this.vendors = this.vendors.concat(data.result);
                         if(data.result.length < AppConstants.PAGINATION_SIZE){
                             this.hasMoreVendors = false;
                         } else {
                             this.hasMoreVendors = true;
                         }
                     }
                 }
             },
             err => {
                 console.log(err);
             }
         );
        }
    }
     

}