import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';

import { AppConstants } from '../helper/app.constants';
import { ServiceResponse } from '../models/service.response.model';
import { Common } from '../helper/common';

let route:string = AppConstants.RouteUrl;

@Component({
    selector: 'admin-dashboard',
    templateUrl: route + '/resources/views/admin/admin-dashboard.component.html'    
})

export class AdminDashboardComponent {
    
    constructor() {
        
     }

}