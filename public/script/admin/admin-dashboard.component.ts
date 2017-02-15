import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import * as moment from 'moment';
import { BaseChartDirective } from 'ng2-charts';

import { AppConstants } from '../helper/app.constants';
import { ServiceResponse } from '../models/service.response.model';
import { Common } from '../helper/common';
import { VendorService } from '../services/vendor-service';
import { UserService } from '../services/user-service';
import { MutualFundService } from '../services/mutual-fund-service';

let route:string = AppConstants.RouteUrl;

@Component({
    selector: 'admin-dashboard',
    templateUrl: route + '/resources/views/admin/admin-dashboard.component.html',
    providers: [ VendorService, UserService, MutualFundService ]
})

export class AdminDashboardComponent {
     
    //  Vendor chart
     vendorChartOptions:any = {
        scaleShowVerticalLines: false,
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
    vendorChartLabels:string[] = [];
    vendorChartType:string = 'bar';
    vendorChartLegend:boolean = false;
 
    vendorChartData:any[] = [
        {data: [], label: 'Vendor'}
    ];
    vendor = AppConstants.VENDOR_TYPES;

    // User chart
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

    // Mutual Fund chart
    mutualFundChartLabels:string[] = [];
    mutualFundChartData:number[] = [];
    mutualFundChartType:string = 'pie';
    mutualFundStatus = AppConstants.MUTUAL_FUND_STATUS;
    @ViewChild(BaseChartDirective) private chart;

    constructor(private vendorService: VendorService, private userService: UserService, private mutualFundService: MutualFundService) {
        this.vendor.forEach(element => {
            this.vendorChartLabels.push(element.short);
        });
        this.getVendorStat();
        this.getUserStat();
        this.getMutualFundStat();
     }

     getVendorStat(){
         let response: Observable<ServiceResponse>;
         response = this.vendorService.getVendorStat();
         response.subscribe(
             data => {
                if(data.status){
                    let res = data.result;
                    let chartData = [];
                    let vendors = {};
                    for(let i=0; i<res.length; i++){
                        vendors[res[i].type] = res[i].total;
                    }
                    for(let i=1; i<this.vendor.length+1; i++){
                        if(vendors[i]){
                            chartData.push(vendors[i]);
                        } else {
                            chartData.push(0);
                        }
                    }
                    this.vendorChartData = [{data: chartData, label: 'Vendor'}]
                }
             },
             err => {
                console.log(err);
             }
         );
     }

     getUserStat(){
        let data =  {year: moment().format("YYYY")};
        
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

    getMutualFundStat(){
         let response: Observable<ServiceResponse>;
         let data = {};
         
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