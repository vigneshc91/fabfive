import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

import { AppConstants } from '../helper/app.constants';
import { ServiceResponse } from '../models/service.response.model';
import { Common } from '../helper/common';
import { VendorService } from '../services/vendor-service';
import { Vendor } from '../models/vendor.model';

let route:string = AppConstants.RouteUrl;

@Component({
    selector: 'vendor-create',
    templateUrl: route + '/resources/views/admin/vendor-create.component.html',
    providers: [ VendorService ] 
})

export class VendorCreateComponent {
    
    vendorCreateForm: FormGroup;
    vendorCreateSuccessMessage: boolean = false;
    vendorCreateFailureMessage: boolean = false;
    successMessage: string;
    failureMessage: string;
    vendors;

    constructor(private formBuilder: FormBuilder, private vendorService: VendorService) {
        this.vendorCreateForm = formBuilder.group({
            'type': ["", Validators.required],
            'name': [null, Validators.required]
        });
        this.vendors = AppConstants.VENDOR_TYPES;
     }

     createVendor(value: Vendor){
         if(this.vendorCreateForm.valid){
             let response: Observable<ServiceResponse>;
             response = this.vendorService.createVendor(value);
             response.subscribe(
                 data => {
                     if(data.status){
                         this.vendorCreateSuccessMessage = true;
                         this.successMessage = data.result;
                         this.vendorCreateForm.reset({'type': ''});
                         setTimeout(function() {
                             this.vendorCreateSuccessMessage = false;
                         }.bind(this), 3000);
                     } else {
                         this.vendorCreateFailureMessage = true;
                         this.failureMessage = data.result;
                         setTimeout(function() {
                             this.vendorCreateFailureMessage = false;
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