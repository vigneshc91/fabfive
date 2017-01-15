"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var ng2_bootstrap_1 = require("ng2-bootstrap/ng2-bootstrap");
var moment = require("moment");
var app_constants_1 = require("../helper/app.constants");
var user_service_1 = require("../services/user-service");
var address_model_1 = require("../models/address.model");
var end_user_model_1 = require("../models/end-user.model");
var route = app_constants_1.AppConstants.RouteUrl;
var UserViewComponent = (function () {
    function UserViewComponent(formBuilder, userService) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.userEditSuccessMessage = false;
        this.userEditFailureMessage = false;
        this.userAddressEditSuccessMessage = false;
        this.userAddressEditFailureMessage = false;
        this.userDeleteSuccessMessage = false;
        this.userDeleteFailureMessage = false;
        this.isEditUser = false;
        this.isEditUserAddress = false;
        this.isDatePickerShown = false;
        this.today = new Date();
        this.invalidFile = false;
        this.imageBaseUrl = app_constants_1.AppConstants.ImageUrl;
        this.malePlaceholderImage = app_constants_1.AppConstants.AppUrl + 'public/images/placeholder-male.jpg';
        this.femalePlaceholderImage = app_constants_1.AppConstants.AppUrl + 'public/images/placeholder-female.jpg';
        this.userEditForm = formBuilder.group({
            'first_name': [null, forms_1.Validators.required],
            'last_name': [null, forms_1.Validators.required],
            'email': [null],
            'date_of_birth': [null, forms_1.Validators.required],
            'gender': ["", forms_1.Validators.required],
            'contact_number': [null, forms_1.Validators.required],
            'profile_pic': [null],
            'pan_card': [null, forms_1.Validators.required],
            'introducer_name': [null]
        });
        this.userAddressEditForm = formBuilder.group({
            'address_line_1': [null, forms_1.Validators.required],
            'address_line_2': [null],
            'city': [null, forms_1.Validators.required],
            'state': [null, forms_1.Validators.required],
            'country': [null, forms_1.Validators.required],
            'pin_code': [null]
        });
        this.users = [];
        this.userModel = new end_user_model_1.EndUser();
        this.addressModel = new address_model_1.Address();
        this.genderList = app_constants_1.AppConstants.GENDER_TYPES;
        this.genderNames = app_constants_1.AppConstants.GENDER_NAMES;
        this.getUsersList();
    }
    UserViewComponent.prototype.getUsersList = function (load) {
        var _this = this;
        var user = {};
        user.user_type = app_constants_1.AppConstants.USER_TYPE.user;
        if (load) {
            user.start = this.users.length;
            user.size = app_constants_1.AppConstants.PAGINATION_SIZE;
        }
        var response;
        response = this.userService.getUsersList(user);
        response.subscribe(function (data) {
            if (data.status) {
                if (data.result.length) {
                    _this.users = _this.users.concat(data.result);
                    if (data.result.length < app_constants_1.AppConstants.PAGINATION_SIZE) {
                        _this.hasMoreUsers = false;
                    }
                    else {
                        _this.hasMoreUsers = true;
                    }
                }
            }
        }, function (err) {
            console.log(err);
        });
    };
    UserViewComponent.prototype.showDeleteConfirm = function (index, userId) {
        this.userModel = {
            user_id: userId,
            index: index
        };
        this.deleteUserModal.show();
    };
    UserViewComponent.prototype.closeDeleteUserModal = function () {
        this.userModel = {};
        this.deleteUserModal.hide();
    };
    UserViewComponent.prototype.deleteUser = function () {
        var _this = this;
        var user = this.userModel;
        var response;
        user.id = user.user_id;
        response = this.userService.deleteUser(user);
        response.subscribe(function (data) {
            if (data.status) {
                _this.users.splice(user.index, 1);
                _this.userDeleteSuccessMessage = true;
                _this.successMessage = data.result;
                setTimeout(function () {
                    this.userDeleteSuccessMessage = false;
                    this.closeDeleteUserModal();
                }.bind(_this), 3000);
            }
            else {
                _this.userDeleteFailureMessage = true;
                _this.failureMessage = data.result;
                setTimeout(function () {
                    this.userDeleteFailureMessage = false;
                }.bind(_this), 3000);
            }
        }, function (err) {
            console.log(err);
        });
    };
    UserViewComponent.prototype.showEditUser = function (index, user) {
        this.isEditUser = true;
        this.userModel = user;
        this.userModel.index = index;
        this.datePickerDate = moment(user.date_of_birth).toDate();
        this.userEditForm = this.formBuilder.group({
            'first_name': [user.first_name, forms_1.Validators.required],
            'last_name': [user.last_name, forms_1.Validators.required],
            'email': [user.email],
            'date_of_birth': [user.date_of_birth, forms_1.Validators.required],
            'gender': [user.gender, forms_1.Validators.required],
            'contact_number': [user.contact_number, forms_1.Validators.required],
            'profile_pic': [null],
            'pan_card': [user.pan_card, forms_1.Validators.required],
            'introducer_name': [user.introducer_name]
        });
    };
    UserViewComponent.prototype.showEditUserAddress = function (index, user) {
        this.isEditUserAddress = true;
        this.user = user.first_name + ' ' + user.last_name;
        this.addressModel = user;
        this.addressModel.index = index;
        this.userAddressEditForm = this.formBuilder.group({
            'address_line_1': [user.address_line_1, forms_1.Validators.required],
            'address_line_2': [user.address_line_2],
            'city': [user.city, forms_1.Validators.required],
            'state': [user.state, forms_1.Validators.required],
            'country': [user.country, forms_1.Validators.required],
            'pin_code': [user.pin_code]
        });
    };
    UserViewComponent.prototype.cancelEditUser = function () {
        this.userModel = {};
        this.isEditUser = false;
    };
    UserViewComponent.prototype.cancelEditUserAddress = function () {
        this.addressModel = {};
        this.isEditUserAddress = false;
    };
    UserViewComponent.prototype.editUser = function (value) {
        var _this = this;
        if (this.userEditForm.valid) {
            value.user_id = this.userModel.user_id;
            var response = void 0;
            var file = document.getElementById('profile_pic');
            if (file && file.files.length) {
                var image = file.files[0];
                if (image.type.indexOf("image") > -1) {
                    this.invalidFile = false;
                    value.profile_pic = image;
                }
                else {
                    this.invalidFile = true;
                    return false;
                }
            }
            response = this.userService.editEndUser(value);
            response.subscribe(function (data) {
                if (data.status) {
                    _this.userEditSuccessMessage = true;
                    _this.successMessage = data.result;
                    value.id = _this.userModel.id;
                    var user = _this.users[_this.userModel.index];
                    for (var key in value) {
                        if (value.hasOwnProperty(key) && value[key] != null) {
                            user[key] = value[key];
                            if (key == "profile_pic") {
                                user[key] = null;
                            }
                        }
                    }
                    _this.userModel = {};
                    setTimeout(function () {
                        this.userEditSuccessMessage = false;
                        this.isEditUser = false;
                    }.bind(_this), 3000);
                }
                else {
                    _this.userEditFailureMessage = true;
                    _this.failureMessage = data.result;
                    setTimeout(function () {
                        this.userEditFailureMessage = false;
                    }.bind(_this), 3000);
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    UserViewComponent.prototype.editUserAddress = function (value) {
        var _this = this;
        if (this.userAddressEditForm.valid) {
            value.address_id = this.addressModel.id;
            var response = void 0;
            response = this.userService.editUserAddress(value);
            response.subscribe(function (data) {
                if (data.status) {
                    _this.userAddressEditSuccessMessage = true;
                    _this.successMessage = data.result;
                    value.id = _this.addressModel.id;
                    var user = _this.users[_this.addressModel.index];
                    for (var key in value) {
                        if (value.hasOwnProperty(key) && value[key] != null) {
                            user[key] = value[key];
                        }
                    }
                    _this.addressModel = {};
                    setTimeout(function () {
                        this.userAddressEditSuccessMessage = false;
                        this.isEditUserAddress = false;
                    }.bind(_this), 3000);
                }
                else {
                    _this.userAddressEditFailureMessage = true;
                    _this.failureMessage = data.result;
                    setTimeout(function () {
                        this.userAddressEditFailureMessage = false;
                    }.bind(_this), 3000);
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    UserViewComponent.prototype.showDatePicker = function () {
        this.isDatePickerShown = true;
    };
    UserViewComponent.prototype.hideDatePicker = function () {
        this.isDatePickerShown = false;
    };
    UserViewComponent.prototype.dateSelected = function (event) {
        this.datePickerValue = moment(event).format("YYYY-MM-DD");
        this.hideDatePicker();
    };
    UserViewComponent.prototype.handleClick = function (event) {
        if (!(event.target.closest('datepicker') != null || event.target.closest('.btn') != null || event.target.closest('.date_of_birth') != null)) {
            this.hideDatePicker();
        }
    };
    return UserViewComponent;
}());
__decorate([
    core_1.ViewChild('deleteUserModal'),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], UserViewComponent.prototype, "deleteUserModal", void 0);
UserViewComponent = __decorate([
    core_1.Component({
        selector: 'user-view',
        host: {
            '(document:click)': 'handleClick($event)'
        },
        templateUrl: route + '/resources/views/admin/user-view.component.html',
        providers: [user_service_1.UserService]
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, user_service_1.UserService])
], UserViewComponent);
exports.UserViewComponent = UserViewComponent;
//# sourceMappingURL=user-view.component.js.map