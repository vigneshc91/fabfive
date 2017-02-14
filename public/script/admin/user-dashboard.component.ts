import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import * as moment from 'moment';

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
    userChartLabels:Array<any> = moment.monthsShort();
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
    currentYear = moment().format("YYYY");
    years = [];

    constructor(private userService: UserService) {
        let year = 2016;
        for(let i=0; i<5; i++){
            this.years.push(year);
            year += 1;
        }
    }

    ngOnInit(){
        this.getUserStat();
    }

    getUserStat(year?: string){
        let data =  {year: this.currentYear};
        if(year){
            data.year = year;
        }
        let response: Observable<ServiceResponse>;
        response = this.userService.getUserStat(data);

        response.subscribe(
            data => {
                if(data.status){
                    let res = data.result;
                    let totals = [];
                    let months= {};
                    for(let i=0; i<res.length; i++){
                        months[parseInt(res[i].month)] = res[i].total;
                    }
                    for(let i=1; i<this.userChartLabels.length+1; i++){
                        if(months[i]){
                            totals.push(months[i]);
                        } else {
                            totals.push(0);
                        }
                    }
                    this.userChartData = [{data: totals, label: "User"}];
                }
            }
        );
    }

}