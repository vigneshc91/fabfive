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
var moment = require("moment");
var app_constants_1 = require("../helper/app.constants");
var custom_validator_1 = require("../helper/custom.validator");
var vendor_service_1 = require("../services/vendor-service");
var route = app_constants_1.AppConstants.RouteUrl;
var UserCreateComponent = (function () {
    function UserCreateComponent(formBuilder, vendorService) {
        this.formBuilder = formBuilder;
        this.vendorService = vendorService;
        this.userCreateSuccessMessage = false;
        this.userCreateFailureMessage = false;
        this.isDatePickerShown = false;
        this.today = new Date();
        this.userCreateForm = formBuilder.group({
            'first_name': [null, forms_1.Validators.required],
            'last_name': [null, forms_1.Validators.required],
            'email': [null, [forms_1.Validators.required, custom_validator_1.CustomValidator.isInvalidEmail]],
            'date_of_birth': [null, forms_1.Validators.required],
            'gender': ["", forms_1.Validators.required],
            'contact_number': [null, forms_1.Validators.required],
            'profile_pic': [null],
            'pan_card': [null, forms_1.Validators.required],
            'introducer_name': [null],
            'address_line_1': [null, forms_1.Validators.required],
            'address_line_2': [null],
            'city': [null, forms_1.Validators.required],
            'state': [null, forms_1.Validators.required],
            'country': [null, forms_1.Validators.required],
            'pin_code': [null]
        });
        this.gender = app_constants_1.AppConstants.GENDER_TYPES;
    }
    UserCreateComponent.prototype.createUser = function (value) {
        var _this = this;
        if (this.userCreateForm.valid) {
            var response = void 0;
            response = this.vendorService.createVendor(value);
            response.subscribe(function (data) {
                if (data.status) {
                    _this.userCreateSuccessMessage = true;
                    _this.successMessage = data.result;
                    _this.userCreateForm.reset({ 'type': '' });
                    setTimeout(function () {
                        this.userCreateSuccessMessage = false;
                    }.bind(_this), 3000);
                }
                else {
                    _this.userCreateFailureMessage = true;
                    _this.failureMessage = data.result;
                    setTimeout(function () {
                        this.userCreateFailureMessage = false;
                    }.bind(_this), 3000);
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    UserCreateComponent.prototype.showDatePicker = function () {
        this.isDatePickerShown = true;
    };
    UserCreateComponent.prototype.hideDatePicker = function () {
        this.isDatePickerShown = false;
    };
    UserCreateComponent.prototype.dateSelected = function (event) {
        this.datePickerValue = moment(event).format("YYYY-MM-DD");
        this.hideDatePicker();
    };
    UserCreateComponent.prototype.handleClick = function (event) {
        if (!(event.target.closest('datepicker') != null || event.target.closest('.btn') != null || event.target.closest('.date_of_birth') != null)) {
            this.hideDatePicker();
        }
    };
    return UserCreateComponent;
}());
UserCreateComponent = __decorate([
    core_1.Component({
        selector: 'user-create',
        host: {
            '(document:click)': 'handleClick($event)'
        },
        templateUrl: route + '/resources/views/admin/user-create.component.html',
        providers: [vendor_service_1.VendorService]
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, vendor_service_1.VendorService])
], UserCreateComponent);
exports.UserCreateComponent = UserCreateComponent;
//# sourceMappingURL=user-create.component.js.map