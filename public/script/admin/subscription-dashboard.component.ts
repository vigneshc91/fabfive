import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import * as moment from 'moment';
import { BaseChartDirective } from 'ng2-charts';

import { AppConstants } from '../helper/app.constants';
import { ServiceResponse } from '../models/service.response.model';
import { Common } from '../helper/common';
import { UserService } from '../services/user-service';

let route:string = AppConstants.RouteUrl;

@Component({
    selector: 'subscription-dashboard',
    templateUrl: route + '/resources/views/admin/subscription-dashboard.component.html',
    providers: [ UserService ]
})

export class SubscriptionDashboardComponent {
    subscriptionChartData:Array<any> = [
        {data: [], label: 'User'}
    ];
    subscriptionChartLabels:Array<any> = moment.monthsShort();
    subscriptionChartOptions:any = {
        responsive: true,
        scales: {
            xAxes: [{
                gridLines: {
                    display: false
                } 
            }],
            yAxes: [{
                gridLines: {
                    display: false
                },
                ticks: {
                    min: 0
                }
            }]
        }
    };
    subscriptionChartColors:Array<any> = [
        {
            backgroundColor: '#fff',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ];
    subscriptionChartLegend:boolean = false;
    subscriptionChartType:string = 'line';
    currentYear = moment().format("YYYY");
    years = [];
    subscriptionForm: FormGroup;
    subscriptionStatus = AppConstants.SUBSCRIPTION_STATUS;

    constructor(private formBuilder: FormBuilder, private userService: UserService) {
        let year = AppConstants.STATISTICS_START_YEAR;
        for(let i=0; i<AppConstants.STATISTICS_YEAR_COUNT; i++){
            this.years.push(year);
            year += 1;
        }
        this.subscriptionForm = formBuilder.group({
            'status': [ "" ],
            'year': [ this.currentYear ]
        });
        this.subscriptionForm.valueChanges.subscribe(data => {
            this.getSubscriptionStat();
        });
        this.getSubscriptionStat();
    }

    getSubscriptionStat(){
        let data = this.subscriptionForm.value;
        let response: Observable<ServiceResponse>;
        response = this.userService.getSubscriptionStat(data);

        response.subscribe(
            data => {
                if(data.status){
                    let res = data.result;
                    let totals = [];
                    let months= {};
                    for(let i=0; i<res.length; i++){
                        months[parseInt(res[i].month)] = res[i].total;
                    }
                    for(let i=1; i<this.subscriptionChartLabels.length+1; i++){
                        if(months[i]){
                            totals.push(months[i]);
                        } else {
                            totals.push(0);
                        }
                    }
                    this.subscriptionChartData = [{data: totals, label: "Subscribers"}];
                }
            }
        );
    }

}