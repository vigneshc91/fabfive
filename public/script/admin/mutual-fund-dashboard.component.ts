import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

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

export class MutualFundDashboardComponent implements OnInit {
    

    mutualFundChartLabels:string[] = [];
    mutualFundChartData:number[] = [];
    mutualFundChartType:string = 'pie';
    
    constructor(private mutualFundService: MutualFundService) {

    }

     ngOnInit(){
        this.getMutualFundStat();
     }

     getMutualFundStat(){
         let response: Observable<ServiceResponse>;

         response = this.mutualFundService.getMutualFundStat();
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
                    this.mutualFundChartLabels = labels;
                    this.mutualFundChartData = total;
                }
             },
             err => {

             }
         );
     }

}