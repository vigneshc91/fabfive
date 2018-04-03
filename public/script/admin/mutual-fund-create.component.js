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
var user_service_1 = require("../services/user-service");
var vendor_service_1 = require("../services/vendor-service");
var mutual_fund_service_1 = require("../services/mutual-fund-service");
var route = app_constants_1.AppConstants.RouteUrl;
var MutualFundCreateComponent = (function () {
    function MutualFundCreateComponent(formBuilder, userService, vendorService, mutualFundService) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.vendorService = vendorService;
        this.mutualFundService = mutualFundService;
        this.mutualFundCreateSuccessMessage = false;
        this.mutualFundCreateFailureMessage = false;
        this.isDatePickerShown = false;
        this.today = new Date();
        this.mutualFundCreateForm = formBuilder.group({
            'user_id': ["", forms_1.Validators.required],
            'vendor_id': ["", forms_1.Validators.required],
            'folio_number': [null, forms_1.Validators.required],
            'type': ["", forms_1.Validators.required],
            'scheme': [null, forms_1.Validators.required],
            'start_date': [null, forms_1.Validators.required],
            'amount_invested': [null, forms_1.Validators.required],
            'comments': [null]
        });
        this.types = app_constants_1.AppConstants.MUTUAL_FUND_TYPES;
        this.getUsers();
        this.getVendors();
    }
    MutualFundCreateComponent.prototype.getUsers = function () {
        var _this = this;
        var user = {};
        user.user_type = app_constants_1.AppConstants.USER_TYPE.user;
        user.start = 0;
        user.size = app_constants_1.AppConstants.MAX_VALUE;
        var response;
        response = this.userService.getUsersList(user);
        response.subscribe(function (data) {
            if (data.status) {
                if (data.result.length) {
                    _this.users = data.result;
                }
            }
        }, function (err) {
            console.log(err);
        });
    };
    MutualFundCreateComponent.prototype.getVendors = function (load) {
        var _this = this;
        var vendor = {};
        vendor.type = app_constants_1.AppConstants.VENDOR_VALUES.MUTUAL_FUND;
        vendor.start = 0;
        vendor.size = app_constants_1.AppConstants.PAGINATION_SIZE;
        var response;
        response = this.vendorService.getVendorsList(vendor);
        response.subscribe(function (data) {
            if (data.status) {
                if (data.result.length) {
                    _this.vendors = data.result;
                }
            }
        }, function (err) {
            console.log(err);
        });
    };
    MutualFundCreateComponent.prototype.createMutualFund = function (value) {
        var _this = this;
        if (this.mutualFundCreateForm.valid) {
            var response = void 0;
            response = this.mutualFundService.createMutualFund(value);
            response.subscribe(function (data) {
                if (data.status) {
                    _this.mutualFundCreateSuccessMessage = true;
                    _this.successMessage = data.result;
                    _this.mutualFundCreateForm.reset({
                        'vendor_id': '',
                        'user_id': '',
                        'type': ''
                    });
                    setTimeout(function () {
                        this.mutualFundCreateSuccessMessage = false;
                    }.bind(_this), 3000);
                }
                else {
                    _this.mutualFundCreateFailureMessage = true;
                    _this.failureMessage = data.result;
                    setTimeout(function () {
                        this.mutualFundCreateFailureMessage = false;
                    }.bind(_this), 3000);
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    MutualFundCreateComponent.prototype.showDatePicker = function () {
        this.isDatePickerShown = true;
    };
    MutualFundCreateComponent.prototype.hideDatePicker = function () {
        this.isDatePickerShown = false;
    };
    MutualFundCreateComponent.prototype.dateSelected = function (event) {
        this.datePickerValue = moment(event).format("YYYY-MM-DD");
        this.hideDatePicker();
    };
    MutualFundCreateComponent.prototype.handleClick = function (event) {
        if (!(event.target.closest('datepicker') != null || event.target.closest('.btn') != null || event.target.closest('.date-picker') != null)) {
            this.hideDatePicker();
        }
    };
    return MutualFundCreateComponent;
}());
MutualFundCreateComponent = __decorate([
    core_1.Component({
        selector: 'mutual-fund-create',
        host: {
            '(document:click)': 'handleClick($event)'
        },
        templateUrl: route + '/resources/views/admin/mutual-fund-create.component.html',
        providers: [user_service_1.UserService, vendor_service_1.VendorService, mutual_fund_service_1.MutualFundService]
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, user_service_1.UserService, vendor_service_1.VendorService, mutual_fund_service_1.MutualFundService])
], MutualFundCreateComponent);
exports.MutualFundCreateComponent = MutualFundCreateComponent;
//# sourceMappingURL=mutual-fund-create.component.js.map