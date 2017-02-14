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
    private editMutualFundUrl = AppConstants.AppUrl + "admin/editMutualFund";
    private deleteMutualFundUrl = AppConstants.AppUrl + "admin/deleteMutualFund";
    private getMutualFundsListUrl = AppConstants.AppUrl + "admin/getMutualFundsList";
    private getMutualFundByFolioNumberUrl = AppConstants.AppUrl + "admin/getMutualFundByFolioNumber";
    private getMutualFundStatUrl = AppConstants.AppUrl + "admin/getMutualFundStat";
   

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

    editMutualFund(data: MutualFund): Observable<ServiceResponse> {
        let headers = new Headers({ 'Content-type': 'application/json', 'Authorization': 'Bearer ' + this.token });
        let options = new RequestOptions({ headers });
        return this.http.post(this.editMutualFundUrl, data, options)
                        .map((res:Response) => res.json());
    }

    deleteMutualFund(data: MutualFund): Observable<ServiceResponse> {
        let headers = new Headers({ 'Content-type': 'application/json', 'Authorization': 'Bearer ' + this.token });
        let options = new RequestOptions({ headers });
        return this.http.post(this.deleteMutualFundUrl, data, options)
                        .map((res:Response) => res.json());
    }

    getMutualFundsList(data: MutualFund): Observable<ServiceResponse> {
        let headers = new Headers({ 'Content-type': 'application/json', 'Authorization': 'Bearer ' + this.token });
        let options = new RequestOptions({ headers });
        return this.http.post(this.getMutualFundsListUrl, data, options)
                        .map((res:Response) => res.json());
    }

    getMutualFundByFolioNumber(data: MutualFund): Observable<ServiceResponse> {
        let headers = new Headers({ 'Content-type': 'application/json', 'Authorization': 'Bearer ' + this.token });
        let options = new RequestOptions({ headers });
        return this.http.post(this.getMutualFundByFolioNumberUrl, data, options)
                        .map((res:Response) => res.json());
    }

    getMutualFundStat(): Observable<ServiceResponse> {
        let headers = new Headers({ 'Content-type': 'application/json', 'Authorization': 'Bearer ' + this.token });
        let options = new RequestOptions({ headers });
        return this.http.post(this.getMutualFundStatUrl, '', options)
                        .map((res:Response) => res.json());
    }

   
}