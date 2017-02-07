import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { ServiceResponse } from '../models/service.response.model';
import { Vendor } from '../models/vendor.model';
import { AppConstants } from '../helper/app.constants';
import { Common } from '../helper/common';

@Injectable()

export class VendorService {

    private token:string;
    private common:Common;
    private createVendorUrl = AppConstants.AppUrl + "admin/createVendor";
    private getVendorsListUrl = AppConstants.AppUrl + "admin/getVendorsList";
    private deleteVendorUrl = AppConstants.AppUrl + "admin/deleteVendor";
    private editVendorUrl = AppConstants.AppUrl + "admin/editVendor";
    private getVendorStatUrl = AppConstants.AppUrl + "admin/getVendorStat";

    constructor(private http: Http){
        this.common = new Common();
        this.token = this.common.authToken;
    }

    createVendor(data: Vendor): Observable<ServiceResponse> {
        let headers = new Headers({ 'Content-type': 'application/json', 'Authorization': 'Bearer ' + this.token });
        let options = new RequestOptions({ headers });
        return this.http.post(this.createVendorUrl, data, options)
                        .map((res:Response) => res.json());
    }

    getVendorsList(data: Vendor): Observable<ServiceResponse> {
        let headers = new Headers({ 'Content-type': 'application/json', 'Authorization': 'Bearer ' + this.token });
        let options = new RequestOptions({ headers });
        return this.http.post(this.getVendorsListUrl, data, options)
                        .map((res:Response) => res.json());
    }

    deleteVendor(data: Vendor): Observable<ServiceResponse> {
        let headers = new Headers({ 'Content-type': 'application/json', 'Authorization': 'Bearer ' + this.token });
        let options = new RequestOptions({ headers });
        return this.http.post(this.deleteVendorUrl, data, options)
                        .map((res:Response) => res.json());
    }

    editVendor(data: Vendor): Observable<ServiceResponse> {
        let headers = new Headers({ 'Content-type': 'application/json', 'Authorization': 'Bearer ' + this.token });
        let options = new RequestOptions({ headers });
        return this.http.post(this.editVendorUrl, data, options)
                        .map((res:Response) => res.json());   
    }

    getVendorStat(): Observable<ServiceResponse> {
        let headers = new Headers({ 'Content-type': 'application/json', 'Authorization': 'Bearer ' + this.token });
        let options = new RequestOptions({ headers });

        return this.http.post(this.getVendorStatUrl, '', options)
                        .map((res:Response) => res.json());   
    }

    
    
}