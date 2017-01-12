import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { ServiceResponse } from '../models/service.response.model';
import { CreateAdmin } from '../models/create-admin.model';
import { User } from '../models/user.model';
import { AppConstants } from '../helper/app.constants';
import { Common } from '../helper/common';

@Injectable()

export class AdminService {

    private token:string;
    private common:Common;
    private createAdminUrl = AppConstants.AppUrl + "superAdmin/createAdmin";
    private deleteAdminUrl = AppConstants.AppUrl + "superAdmin/deleteAdmin";

    constructor(private http: Http){
        this.common = new Common();
        this.token = this.common.authToken;
    }

    createAdmin(data: CreateAdmin): Observable<ServiceResponse> {
        let headers = new Headers({ 'Content-type': 'application/json', 'Authorization': 'Bearer ' + this.token });
        let options = new RequestOptions({ headers });
        return this.http.post(this.createAdminUrl, data, options)
                        .map((res:Response) => res.json());
                        // .catch((error:any) => Observable.throw(error.json().error || "Server error" ));
    }

    deleteAdmin(data: User): Observable<ServiceResponse> {
        let headers = new Headers({ 'Content-type': 'application/json', 'Authorization': 'Bearer ' + this.token });
        let options = new RequestOptions({ headers });
        return this.http.post(this.deleteAdminUrl, data, options)
                        .map((res:Response) => res.json());
    }

    
}