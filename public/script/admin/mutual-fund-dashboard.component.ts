import { Component, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { BaseChartDirective } from 'ng2-charts';

import { AppConstants } from '../helper/app.constants';
import { ServiceResponse } from '../models/service.response.model';
import { Common } from '../helper/common';
import { MutualFundService } from '../services/mutual-fund-service';

let route:string = AppConstants.RouteUrl;

@Component({
    selector: 'mutual-fund-dashboard',
    templateUrl: route + '/resources/views/admin/mutual-fund-dashboard.component.html',
    providers: [ MutualFundService ]
})

export class MutualFundDashboardComponent {
    

    mutualFundChartLabels:string[] = [];
    mutualFundChartData:number[] = [];
    mutualFundChartType:string = 'pie';
    mutualFundStatus = AppConstants.MUTUAL_FUND_STATUS;
    @ViewChild(BaseChartDirective) private chart;
    
    constructor(private mutualFundService: MutualFundService) {
        this.getMutualFundStat();
    }

     getMutualFundStat(status?:number){
         let response: Observable<ServiceResponse>;
         let data = {};
         if(status){
            data['status'] = status;
         }
         response = this.mutualFundService.getMutualFundStat(data);
         response.subscribe(
             data => {
                if(data.status){
                    let res = data.result;
                    let labels = [];
                    let total = [];
                    res.forEach(element => {
                        labels.push(element.first_name + ' ' + element.last_name);
                        total.push(element.total);
                    });
                    if(!res.length){
                        labels.push("No data found");
                        total.push("1");
                    }
                    this.mutualFundChartLabels = labels;
                    this.mutualFundChartData = total;
                    setTimeout(function() {
                        this.chart.refresh();
                    }.bind(this), 10);
                }
             },
             err => {

             }
         );
     }

}