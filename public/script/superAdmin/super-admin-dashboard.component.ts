import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

import { AppConstants } from '../helper/app.constants';
import { ServiceResponse } from '../models/service.response.model';
import { Common } from '../helper/common';
import { AdminService } from '../services/admin-service';

let route:string = AppConstants.RouteUrl;

@Component({
    selector: 'super-admin-dashboard',
    templateUrl: route + '/resources/views/superAdmin/super-admin-dashboard.component.html',
    providers: [ AdminService ] 
})

export class SuperAdminDashboardComponent {
    superAdminChartOptions:any = {
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
    superAdminChartLabels:string[] = ["Admin", "User"];
    superAdminChartType:string = 'bar';
    superAdminChartLegend:boolean = false;
 
    superAdminChartData:any[] = [
        {data: [], label: 'Total'}
    ];

    constructor(private adminService: AdminService) {
        this.getStatForSuperAdmin();
     }

     getStatForSuperAdmin(){
         let response: Observable<ServiceResponse>;
         response = this.adminService.getStatForSuperAdmin();
         response.subscribe(
             data => {
                if(data.status){
                    let res = data.result;
                    let chartData = [];
                    chartData.push(res.admin);
                    chartData.push(res.user);
                    this.superAdminChartData = [{data: chartData, label: 'Total'}]
                }
             },
             err => {
                console.log(err);
             }
         );
     }

}