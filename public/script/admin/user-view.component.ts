import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Rx';
import { ModalDirective, DatepickerModule } from 'ng2-bootstrap/ng2-bootstrap';
import * as moment from 'moment';

import { AppConstants } from '../helper/app.constants';
import { ServiceResponse } from '../models/service.response.model';
import { UserService } from '../services/user-service';
import { User } from '../models/user.model';
import { Address } from '../models/address.model';
import { EndUser } from '../models/end-user.model';

let route:string = AppConstants.RouteUrl;

@Component({
    selector: 'user-view',
    host: {
        '(document:click)': 'handleClick($event)'
    },
    templateUrl: route + '/resources/views/admin/user-view.component.html',
    providers: [ UserService ] 
})

export class UserViewComponent {
    
    userEditForm: FormGroup;
    userAddressEditForm: FormGroup;
    userEditSuccessMessage: boolean = false;
    userEditFailureMessage: boolean = false;
    userAddressEditSuccessMessage: boolean = false;
    userAddressEditFailureMessage: boolean = false;
    userDeleteSuccessMessage: boolean = false;
    userDeleteFailureMessage: boolean = false;
    successMessage: string;
    failureMessage: string;
    userModel: User;
    addressModel: Address;
    users: EndUser[];
    hasMoreUsers: boolean;
    isEditUser: boolean = false;
    isEditUserAddress: boolean = false;
    genderList;
    genderNames;
    isDatePickerShown:boolean = false;
    datePickerDate;
    datePickerValue;
    today:Date = new Date();
    user: string;
    invalidFile:boolean = false;
    imageBaseUrl:string = AppConstants.ImageUrl;
    malePlaceholderImage: string = AppConstants.AppUrl + 'public/images/placeholder-male.jpg';
    femalePlaceholderImage: string = AppConstants.AppUrl + 'public/images/placeholder-female.jpg';
    @ViewChild('deleteUserModal') public deleteUserModal:ModalDirective;

    constructor(private formBuilder: FormBuilder, private userService: UserService) {
        this.userEditForm = formBuilder.group({
            'first_name': [null, Validators.required],
            'last_name': [null, Validators.required],
            'email': [null],
            'date_of_birth': [null, Validators.required],
            'gender': ["", Validators.required],
            'contact_number': [null, Validators.required],
            'profile_pic': [null],
            'pan_card': [null, Validators.required],
            'introducer_name': [null]
        });
        this.userAddressEditForm = formBuilder.group({
            'address_line_1': [null, Validators.required],
            'address_line_2': [null],
            'city': [null, Validators.required],
            'state': [null, Validators.required],
            'country': [null, Validators.required],
            'pin_code': [null]
        });
        this.users = [];
        this.userModel = new EndUser();
        this.addressModel = new Address();
        this.genderList = AppConstants.GENDER_TYPES;
        this.genderNames = AppConstants.GENDER_NAMES;
        this.getUsersList();
     }

     getUsersList(load?: boolean){
         let user: EndUser = {};
         user.user_type = AppConstants.USER_TYPE.user;
         if(load){
             user.start = this.users.length;
             user.size = AppConstants.PAGINATION_SIZE;
         }

         let response: Observable<ServiceResponse>;
         response =  this.userService.getUsersList(user);
         response.subscribe(
             data => {
                 if(data.status){
                     if(data.result.length){
                         this.users = this.users.concat(data.result);
                         if(data.result.length < AppConstants.PAGINATION_SIZE){
                             this.hasMoreUsers = false;
                         } else {
                             this.hasMoreUsers = true;
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
        this.userModel = {
            user_id: userId,
            index: index
        };
        this.deleteUserModal.show();
    }

     closeDeleteUserModal(){
        this.userModel = {};
        this.deleteUserModal.hide();
    }

    deleteUser(){
        let user: User = this.userModel;
        let response: Observable<ServiceResponse>;
        user.id = user.user_id;
        response = this.userService.deleteUser(user);
        response.subscribe(
            data => {
                if(data.status){
                    this.users.splice(user.index, 1);
                    this.userDeleteSuccessMessage = true;
                    this.successMessage = data.result;
                    setTimeout(function() {
                        this.userDeleteSuccessMessage = false;
                        this.closeDeleteUserModal();
                    }.bind(this), 3000);
                } else {
                    this.userDeleteFailureMessage = true;
                    this.failureMessage = data.result;
                    setTimeout(function() {
                        this.userDeleteFailureMessage = false;
                    }.bind(this), 3000);
                }
            },
            err => {
                console.log(err);
            }
        );
    }

    showEditUser(index:number, user:EndUser){
        this.isEditUser = true;
        this.userModel = user;
        this.userModel.index = index;
        this.datePickerDate = moment(user.date_of_birth).toDate();
        this.userEditForm = this.formBuilder.group({
            'first_name': [user.first_name, Validators.required],
            'last_name': [user.last_name, Validators.required],
            'email': [user.email],
            'date_of_birth': [user.date_of_birth, Validators.required],
            'gender': [user.gender, Validators.required],
            'contact_number': [user.contact_number, Validators.required],
            'profile_pic': [null],
            'pan_card': [user.pan_card, Validators.required],
            'introducer_name': [user.introducer_name]
        });

    }

    showEditUserAddress(index:number, user:EndUser){
        this.isEditUserAddress = true;
        this.user = user.first_name + ' ' + user.last_name;
        this.addressModel = user;
        this.addressModel.index = index;
        this.userAddressEditForm = this.formBuilder.group({
            'address_line_1': [user.address_line_1, Validators.required],
            'address_line_2': [user.address_line_2],
            'city': [user.city, Validators.required],
            'state': [user.state, Validators.required],
            'country': [user.country, Validators.required],
            'pin_code': [user.pin_code]
        });

    }

    cancelEditUser(){
        this.userModel = {};
        this.isEditUser = false;
    }

    cancelEditUserAddress(){
        this.addressModel = {};
        this.isEditUserAddress = false;
    }

    editUser(value: User){
        if(this.userEditForm.valid){
            value.user_id = this.userModel.user_id;
            let response: Observable<ServiceResponse>;

            let file:any = document.getElementById('profile_pic');
             if(file && file.files.length){
                 var image:File = file.files[0]
                 if(image.type.indexOf("image") > -1){
                    this.invalidFile = false;
                    value.profile_pic = image;
                 } else {
                     this.invalidFile = true;
                     return false;
                 }
             }
            
            response = this.userService.editEndUser(value);
            response.subscribe(
                data => {
                    if(data.status){
                        this.userEditSuccessMessage = true;
                        this.successMessage = data.result;
                        value.id = this.userModel.id;
                        var user = this.users[this.userModel.index];
                        for(var key in value){
                            if(value.hasOwnProperty(key) && value[key] != null){
                                user[key] = value[key];
                                if(key == "profile_pic"){
                                    user[key] = null;
                                }
                            }
                        }
                        this.userModel = {};
                        setTimeout(function() {
                            this.userEditSuccessMessage = false;
                            this.isEditUser = false;
                        }.bind(this), 3000);
                    } else{
                        this.userEditFailureMessage = true;
                        this.failureMessage = data.result;
                        setTimeout(function() {
                            this.userEditFailureMessage = false;
                        }.bind(this), 3000);
                    }
                },
                err => {
                    console.log(err);
                }
            );

        }
    }

    editUserAddress(value: Address){
        if(this.userAddressEditForm.valid){
            value.address_id = this.addressModel.id;
            let response: Observable<ServiceResponse>;
            
            response = this.userService.editUserAddress(value);
            response.subscribe(
                data => {
                    if(data.status){
                        this.userAddressEditSuccessMessage = true;
                        this.successMessage = data.result;
                        value.id = this.addressModel.id;
                        var user = this.users[this.addressModel.index];
                        for(var key in value){
                            if(value.hasOwnProperty(key) && value[key] != null){
                                user[key] = value[key];
                            }
                        }
                        this.addressModel = {};
                        setTimeout(function() {
                            this.userAddressEditSuccessMessage = false;
                            this.isEditUserAddress = false;
                        }.bind(this), 3000);
                    } else{
                        this.userAddressEditFailureMessage = true;
                        this.failureMessage = data.result;
                        setTimeout(function() {
                            this.userAddressEditFailureMessage = false;
                        }.bind(this), 3000);
                    }
                },
                err => {
                    console.log(err);
                }
            );

        }
    }

    showDatePicker(){
         this.isDatePickerShown = true;
     }

     hideDatePicker(){
         this.isDatePickerShown = false;
     }

     dateSelected(event){
         this.datePickerValue = moment(event).format("YYYY-MM-DD");
         this.hideDatePicker();
     }

     handleClick(event){
         if(!(event.target.closest('datepicker') != null || event.target.closest('.btn') != null || event.target.closest('.date_of_birth') != null)){
             this.hideDatePicker();
         }
     }


}