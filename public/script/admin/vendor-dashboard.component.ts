import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

import { AppConstants } from '../helper/app.constants';
import { ServiceResponse } from '../models/service.response.model';
import { Common } from '../helper/common';
import { VendorService } from '../services/vendor-service';

let route:string = AppConstants.RouteUrl;

@Component({
    selector: 'vendor-dashboard',
    templateUrl: route + '/resources/views/admin/vendor-dashboard.component.html',
    providers: [ VendorService ]  
})

export class VendorDashboardComponent {
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

    constructor(private vendorService: VendorService) {
        this.vendor.forEach(element => {
            this.vendorChartLabels.push(element.name);
        });
        this.getVendorStat();
     }

     getVendorStat(){
         let response: Observable<ServiceResponse>;
         response = this.vendorService.getVendorStat();
         response.subscribe(
             data => {
                if(data.status){
                    let res = data.result;
                    let chartData = [];
                    for(let i=0; i<res.length; i++){
                        if(res[i].total){
                            chartData.push(res[i].total);
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

}