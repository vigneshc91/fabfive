import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

import { AppConstants } from '../helper/app.constants';
import { ServiceResponse } from '../models/service.response.model';
import { Common } from '../helper/common';
import { UserService } from '../services/user-service';

let route:string = AppConstants.RouteUrl;

@Component({
    selector: 'user-dashboard',
    templateUrl: route + '/resources/views/admin/user-dashboard.component.html',
    providers: [ UserService ]
})

export class UserDashboardComponent implements OnInit {
    userChartData:Array<any> = [
        {data: [], label: 'User'}
    ];
    userChartLabels:Array<any> = [];
    userChartOptions:any = {
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
    userChartColors:Array<any> = [
        {
            backgroundColor: '#fff',
            borderColor: 'rgba(148,159,177,1)',
            pointBackgroundColor: 'rgba(148,159,177,1)',
            pointBorderColor: '#fff',
            pointHoverBackgroundColor: '#fff',
            pointHoverBorderColor: 'rgba(148,159,177,0.8)'
        }
    ];
    userChartLegend:boolean = false;
    userChartType:string = 'line';

    constructor(private userService: UserService) {

    }

    ngOnInit(){
        this.getUserStat();
    }

    getUserStat(){
        let response: Observable<ServiceResponse>;
        response = this.userService.getUserStat();

        response.subscribe(
            data => {
                if(data.status){
                    let res = data.result;
                    let dates = [];
                    let totals = [];
                    res.forEach(element => {
                        dates.push(element.date);
                        totals.push(element.total);
                    });

                    this.userChartLabels = dates;
                    this.userChartData = [{data: totals, label: "User"}];
                }
            }
        );
    }

}