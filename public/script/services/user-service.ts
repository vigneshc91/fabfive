import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { ServiceResponse } from '../models/service.response.model';
import { ChangePassword } from '../models/change-password.model';
import { AppConstants } from '../helper/app.constants';
import { Common } from '../helper/common';

@Injectable()

export class UserService {

    private token:string;
    private common:Common;
    private getLoggedInUserUrl = AppConstants.AppUrl + "user/getLoggedInUser";
    private changePasswordUrl = AppConstants.AppUrl + "user/changePassword";
    
    constructor(private http: Http){
        this.common = new Common();
        this.token = this.common.authToken;
    }

    getLoggedInUser(): Observable<ServiceResponse> {
        let headers = new Headers({ 'Content-type': 'application/json', 'Authorization': 'Bearer ' + this.token });
        let options = new RequestOptions({ headers });
        let data;
        return this.http.post(this.getLoggedInUserUrl, data, options)
                        .map((res:Response) => res.json());
                        // .catch((error:any) => Observable.throw(error.json().error || "Server error" ));
    }

    changePassword(data: ChangePassword): Observable<ServiceResponse> {
        let headers = new Headers({ 'Content-type': 'application/json' });
        let options = new RequestOptions({ headers });

        return this.http.post(this.changePasswordUrl, data, options)
                        .map((res:Response) => res.json());
                        // .catch((error:any) => Observable.throw(error.json().error || "Server error" ));
    }
}