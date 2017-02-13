import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

import { ServiceResponse } from '../models/service.response.model';
import { ChangePassword } from '../models/change-password.model';
import { AppConstants } from '../helper/app.constants';
import { Common } from '../helper/common';
import { User } from '../models/user.model';
import { EndUser } from '../models/end-user.model';
import { Address } from '../models/address.model';
import { ForgotPassword } from '../models/forgot-password.model';

@Injectable()

export class UserService {

    private token:string;
    private common:Common;
    private getLoggedInUserUrl = AppConstants.AppUrl + "user/getLoggedInUser";
    private changePasswordUrl = AppConstants.AppUrl + "user/changePassword";
    private getUsersListUrl = AppConstants.AppUrl + "user/getUsersList";
    private editUserUrl = AppConstants.AppUrl + "admin/editUser";
    private createEndUserUrl = AppConstants.AppUrl + "admin/createUser";
    private deleteUserUrl = AppConstants.AppUrl + "admin/deleteUser";
    private editEndUserUrl = AppConstants.AppUrl + "admin/editUser";
    private editUserAddressUrl = AppConstants.AppUrl + "admin/editAddress";
    private searchUserUrl = AppConstants.AppUrl + "user/searchUser";
    private forgotPasswordUrl = AppConstants.AppUrl + "user/forgotPassword";
    private getUserStatUrl = AppConstants.AppUrl + "admin/getUserStat";

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
        let headers = new Headers({ 'Content-type': 'application/json', 'Authorization': 'Bearer ' + this.token });
        let options = new RequestOptions({ headers });

        return this.http.post(this.changePasswordUrl, data, options)
                        .map((res:Response) => res.json());
                        // .catch((error:any) => Observable.throw(error.json().error || "Server error" ));
    }

    getUsersList(data: User): Observable<ServiceResponse>{
        let headers = new Headers({ 'Content-type': 'application/json', 'Authorization': 'Bearer ' + this.token });
        let options = new RequestOptions({ headers });

        return this.http.post(this.getUsersListUrl, data, options)
                        .map((res:Response) => res.json());   
    }

    editUser(data: User): Observable<ServiceResponse>{
        let headers = new Headers({ 'Content-type': 'application/json', 'Authorization': 'Bearer ' + this.token });
        let options = new RequestOptions({ headers });

        return this.http.post(this.editUserUrl, data, options)
                        .map((res: Response) => res.json());
    }

    editUserAddress(data: Address): Observable<ServiceResponse>{
        let headers = new Headers({ 'Content-type': 'application/json', 'Authorization': 'Bearer ' + this.token });
        let options = new RequestOptions({ headers });

        return this.http.post(this.editUserAddressUrl, data, options)
                        .map((res: Response) => res.json());
    }

    createEndUser(data: EndUser): Observable<ServiceResponse>{
        let headers = new Headers({ 'Content-type': 'multipart/form-data', 'Authorization': 'Bearer ' + this.token });
        let options = new RequestOptions({ headers });
        
        var fd:FormData = new FormData();

        for(var key in data){
            if(data.hasOwnProperty(key) && data[key] != null){
                fd.append(key, data[key]);
            }
        }

        let xhr:XMLHttpRequest = new XMLHttpRequest();
        xhr.open('post', this.createEndUserUrl, true);
        xhr.setRequestHeader('Authorization', 'Bearer ' + this.token);
        xhr.send(fd);
        return Observable.create(res => {
            xhr.onreadystatechange =() => {
                if(xhr.readyState == 4){
                    if(xhr.status == 200){
                        res.next(JSON.parse(xhr.response));
                    } else {
                        res.error(xhr.response);
                    }
                }
            }

        });

    }

    editEndUser(data: EndUser): Observable<ServiceResponse>{
        let headers = new Headers({ 'Content-type': 'multipart/form-data', 'Authorization': 'Bearer ' + this.token });
        let options = new RequestOptions({ headers });
        
        var fd:FormData = new FormData();

        for(var key in data){
            if(data.hasOwnProperty(key) && data[key] != null){
                fd.append(key, data[key]);
            }
        }

        let xhr:XMLHttpRequest = new XMLHttpRequest();
        xhr.open('post', this.editEndUserUrl, true);
        xhr.setRequestHeader('Authorization', 'Bearer ' + this.token);
        xhr.send(fd);
        return Observable.create(res => {
            xhr.onreadystatechange =() => {
                if(xhr.readyState == 4){
                    if(xhr.status == 200){
                        res.next(JSON.parse(xhr.response));
                    } else {
                        res.error(xhr.response);
                    }
                }
            }

        });

    }

    deleteUser(data: User): Observable<ServiceResponse> {
        let headers = new Headers({ 'Content-type': 'application/json', 'Authorization': 'Bearer ' + this.token });
        let options = new RequestOptions({ headers });
        return this.http.post(this.deleteUserUrl, data, options)
                        .map((res:Response) => res.json());
    }

    searchUser(data: User): Observable<ServiceResponse> {
        let headers = new Headers({ 'Content-type': 'application/json', 'Authorization': 'Bearer ' + this.token });
        let options = new RequestOptions({ headers });
        return this.http.post(this.searchUserUrl, data, options)
                        .map((res:Response) => res.json());
    }

    forgotPassword(data: ForgotPassword): Observable<ServiceResponse> {
        let headers = new Headers({ 'Content-type': 'application/json' });
        let options = new RequestOptions({ headers });
        return this.http.post(this.forgotPasswordUrl, data, options)
                        .map((res:Response) => res.json());
    }

    getUserStat(data): Observable<ServiceResponse> {
        let headers = new Headers({ 'Content-type': 'application/json', 'Authorization': 'Bearer ' + this.token });
        let options = new RequestOptions({ headers });

        return this.http.post(this.getUserStatUrl, data, options)
                        .map((res:Response) => res.json());
    }
}