import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import * as moment from 'moment';
import { BaseChartDirective } from 'ng2-charts';

import { AppConstants } from '../helper/app.constants';
import { ServiceResponse } from '../models/service.response.model';
import { Common } from '../helper/common';
import { Subscription } from '../models/subscription.model';
import { UserService } from '../services/user-service';

let route:string = AppConstants.RouteUrl;

@Component({
    selector: 'subscription-send-email',
    templateUrl: route + '/resources/views/admin/subscription-send-email.component.html',
    providers: [ UserService ]
})

export class SubscriptionSendEmailComponent {
    
    private sendMailForm: FormGroup;
    private success: boolean = false;
    private failed: boolean = false;
    private message: string;
    private isSubmitted: boolean = false;
    

    constructor(private formBuilder: FormBuilder, private userService: UserService) {
        this.sendMailForm = formBuilder.group({
            'subject': [ null, Validators.required ],
            'content': [ '', Validators.required ]
        });
    }

    sendMailToSubscribers(value){
         if(this.sendMailForm.valid){
            this.isSubmitted = true;
            let response: Observable<ServiceResponse>;
            response =  this.userService.sendMailToSubscribers(value);
            response.subscribe(
                data => {
                    if(data.status){
                        this.sendMailForm.reset();
                        this.isSubmitted = false;
                        this.success  = true;
                        this.message = data.result;
                        setTimeout(function() {
                            this.success = false;
                        }.bind(this), 3000);
                    } else {
                        this.isSubmitted = false;
                        this.failed  = true;
                        this.message = data.result;
                        setTimeout(function() {
                            this.failed = false;
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