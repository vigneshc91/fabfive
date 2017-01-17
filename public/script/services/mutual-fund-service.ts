import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { ServiceResponse } from '../models/service.response.model';
import { ChangePassword } from '../models/change-password.model';
import { AppConstants } from '../helper/app.constants';
import { Common } from '../helper/common';
import { MutualFund } from '../models/mutual-fund.model';

@Injectable()

export class MutualFundService {

    private token:string;
    private common:Common;
    private createMutualFundUrl = AppConstants.AppUrl + "admin/createMutualFund";
   

    constructor(private http: Http){
        this.common = new Common();
        this.token = this.common.authToken;
    }

    

    createMutualFund(data: MutualFund): Observable<ServiceResponse> {
        let headers = new Headers({ 'Content-type': 'application/json', 'Authorization': 'Bearer ' + this.token });
        let options = new RequestOptions({ headers });
        return this.http.post(this.createMutualFundUrl, data, options)
                        .map((res:Response) => res.json());
    }

 

    

   
}