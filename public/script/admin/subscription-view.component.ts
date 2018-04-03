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
    selector: 'subscription-dashboard',
    templateUrl: route + '/resources/views/admin/subscription-view.component.html',
    providers: [ UserService ]
})

export class SubscriptionViewComponent {
    private subscriptions: Subscription[] = [];
    private subscriptionModel: Subscription;
    
    private hasMoreSubscriptions: boolean = false;
    private subscriptionStatus = AppConstants.SUBSCRIPTION_STATUS;
    private subscriptionStatusNames = AppConstants.SUBSCRIPTION_STATUS_NAMES;

    constructor(private userService: UserService) {
        this.subscriptionModel = {};
        this.getSubscriptionsList();
    }

    getSubscriptionsList(load?: boolean){
         let subscription: Subscription = this.subscriptionModel;
        
         if(load){
             subscription.start = this.subscriptions.length;
             subscription.size = AppConstants.PAGINATION_SIZE;
         }

         let response: Observable<ServiceResponse>;
         response =  this.userService.getSubscriptionsList(subscription);
         response.subscribe(
             data => {
                 if(data.status){
                     if(data.result.length){
                         this.subscriptions = this.subscriptions.concat(data.result);
                     }
                     if(data.result.length < AppConstants.PAGINATION_SIZE){
                         this.hasMoreSubscriptions = false;
                     } else {
                         this.hasMoreSubscriptions = true;
                     }
                 }
             },
             err => {
                 console.log(err);
             }
         );
     }

    getSubscriptionsListByStatus(status?: number){
        this.subscriptionModel = {};
        this.subscriptionModel.status = status;
        this.subscriptions = [];
        this.getSubscriptionsList();
    }     

}