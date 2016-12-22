import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { ModalDirective } from 'ng2-bootstrap/ng2-bootstrap';

import { AppConstants } from '../helper/app.constants';
import { ServiceResponse } from '../models/service.response.model';
import { AdminService } from '../services/admin-service';
import { UserService } from '../services/user-service';
import { User } from '../models/user.model';

let route:string = AppConstants.RouteUrl;

@Component({
    selector: 'super-admin-view',
    templateUrl: route + '/resources/views/superAdmin/super-admin-view.component.html',
    providers: [ AdminService, UserService ] 
})

export class SuperAdminViewComponent {
    
    adminCreateForm: FormGroup;
    adminDeleteSuccessMessage: boolean = false;
    adminDeleteFailureMessage: boolean = false;
    successMessage: string;
    failureMessage: string;
    adminModel: User;
    admins: User[];
    hasMoreAdmins: boolean;
    @ViewChild('deleteAdminModal') public deleteAdminModal:ModalDirective;

    constructor(private adminService: AdminService, private userService: UserService) {
        this.admins = [];
        this.adminModel = new User();
        this.getAdminsList();
     }

     getAdminsList(load?: boolean){
         let user: User = {
             user_type: AppConstants.USER_TYPE.admin
         };
         if(load){
             user.start = this.admins.length;
             user.size = AppConstants.PAGINATION_SIZE;
         }

         let response: Observable<ServiceResponse>;
         response =  this.userService.getUsersList(user);
         response.subscribe(
             data => {
                 if(data.status){
                     if(data.result.length){
                         this.admins = this.admins.concat(data.result);
                         if(data.result.length < AppConstants.PAGINATION_SIZE){
                             this.hasMoreAdmins = false;
                         } else {
                             this.hasMoreAdmins = true;
                         }
                     }
                 }
             },
             err => {
                 console.log(err);
             }
         );
     }

     showDeleteConfirm(index:number, userId:number){
        this.adminModel = {
            user_id: userId,
            index: index
        };
        this.deleteAdminModal.show();
    }

     closeDeleteAdminModal(){
        this.adminModel = {};
        this.deleteAdminModal.hide();
    }

    deleteAdmin(){
        let admin: User = this.adminModel;
        let response: Observable<ServiceResponse>;

        response = this.adminService.deleteAdmin(admin);
        response.subscribe(
            data => {
                if(data.status){
                    this.admins.splice(admin.index, 1);
                    this.adminDeleteSuccessMessage = true;
                    this.successMessage = data.result;
                    setTimeout(function() {
                        this.adminDeleteSuccessMessage = false;
                    }.bind(this), 3000);
                } else {
                    this.adminDeleteFailureMessage = true;
                    this.failureMessage = data.result;
                    setTimeout(function() {
                        this.adminDeleteFailureMessage = false;
                    }.bind(this), 3000);
                }
            },
            err => {
                console.log(err);
            }
        );
    }
     

}