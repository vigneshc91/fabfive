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
var vendor_service_1 = require("../services/vendor-service");
var user_service_1 = require("../services/user-service");
var mutual_fund_service_1 = require("../services/mutual-fund-service");
var mutual_fund_model_1 = require("../models/mutual-fund.model");
var route = app_constants_1.AppConstants.RouteUrl;
var MutualFundViewComponent = (function () {
    function MutualFundViewComponent(formBuilder, vendorService, userService, mutualFundService) {
        this.formBuilder = formBuilder;
        this.vendorService = vendorService;
        this.userService = userService;
        this.mutualFundService = mutualFundService;
        this.mutualFundEditSuccessMessage = false;
        this.mutualFundEditFailureMessage = false;
        this.mutualFundDeleteSuccessMessage = false;
        this.mutualFundDeleteFailureMessage = false;
        this.isEditMutualFund = false;
        this.isDatePickerShown = false;
        this.isMatureDatePickerShown = false;
        this.today = new Date();
        this.mutualFundEditForm = formBuilder.group({
            'user_id': ["", forms_1.Validators.required],
            'vendor_id': ["", forms_1.Validators.required],
            'folio_number': [null, forms_1.Validators.required],
            'type': ["", forms_1.Validators.required],
            'scheme': [null, forms_1.Validators.required],
            'start_date': [null, forms_1.Validators.required],
            'amount_invested': [null, forms_1.Validators.required],
            'comments': [null],
            'mature_date': [null],
            'matured_amount': [null],
        });
        this.types = app_constants_1.AppConstants.MUTUAL_FUND_TYPES;
        this.mutualFunds = [];
        this.mutualFundModel = new mutual_fund_model_1.MutualFund();
        this.getUsers();
        this.getVendors();
        this.getMutualFundsList();
    }
    MutualFundViewComponent.prototype.getUsers = function () {
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
    MutualFundViewComponent.prototype.getVendors = function (load) {
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
    MutualFundViewComponent.prototype.getMutualFundsList = function (load) {
        var _this = this;
        var mutualFund = {};
        if (load) {
            mutualFund.start = this.mutualFunds.length;
            mutualFund.size = app_constants_1.AppConstants.PAGINATION_SIZE;
        }
        var response;
        response = this.mutualFundService.getMutualFundsList(mutualFund);
        response.subscribe(function (data) {
            if (data.status) {
                if (data.result.length) {
                    _this.mutualFunds = _this.mutualFunds.concat(data.result);
                    if (data.result.length < app_constants_1.AppConstants.PAGINATION_SIZE) {
                        _this.hasMoreMutualFunds = false;
                    }
                    else {
                        _this.hasMoreMutualFunds = true;
                    }
                }
            }
        }, function (err) {
            console.log(err);
        });
    };
    MutualFundViewComponent.prototype.showDeleteConfirm = function (index, mutualFundId) {
        this.mutualFundModel = {
            mutual_fund_id: mutualFundId,
            index: index
        };
        this.deleteMutualFundModal.show();
    };
    MutualFundViewComponent.prototype.closeDeleteMutualFundModal = function () {
        this.mutualFundModel = {};
        this.deleteMutualFundModal.hide();
    };
    MutualFundViewComponent.prototype.deleteMutualFund = function () {
        var _this = this;
        var mutualFund = this.mutualFundModel;
        var response;
        response = this.mutualFundService.deleteMutualFund(mutualFund);
        response.subscribe(function (data) {
            if (data.status) {
                _this.mutualFunds.splice(mutualFund.index, 1);
                _this.mutualFundDeleteSuccessMessage = true;
                _this.successMessage = data.result;
                setTimeout(function () {
                    this.mutualFundDeleteSuccessMessage = false;
                    this.closeDeleteMutualFundModal();
                }.bind(_this), 3000);
            }
            else {
                _this.mutualFundDeleteFailureMessage = true;
                _this.failureMessage = data.result;
                setTimeout(function () {
                    this.mutualFundDeleteFailureMessage = false;
                }.bind(_this), 3000);
            }
        }, function (err) {
            console.log(err);
        });
    };
    MutualFundViewComponent.prototype.showEditMutualFund = function (index, mutualFund) {
        this.isEditMutualFund = true;
        this.mutualFundModel = mutualFund;
        this.mutualFundModel.index = index;
        this.datePickerDate = moment(mutualFund.start_date).toDate();
        this.mutualFundEditForm = this.formBuilder.group({
            'user_id': [mutualFund.user_id, forms_1.Validators.required],
            'vendor_id': [mutualFund.vendor_id, forms_1.Validators.required],
            'folio_number': [mutualFund.folio_number, forms_1.Validators.required],
            'type': [mutualFund.type, forms_1.Validators.required],
            'scheme': [mutualFund.scheme, forms_1.Validators.required],
            'start_date': [mutualFund.start_date, forms_1.Validators.required],
            'amount_invested': [mutualFund.amount_invested, forms_1.Validators.required],
            'comments': [mutualFund.comments],
            'mature_date': [mutualFund.mature_date],
            'matured_amount': [mutualFund.matured_amount],
        });
    };
    MutualFundViewComponent.prototype.cancelEditMutualFund = function () {
        this.mutualFundModel = {};
        this.isEditMutualFund = false;
    };
    MutualFundViewComponent.prototype.editMutualFund = function (value) {
        var _this = this;
        if (this.mutualFundEditForm.valid) {
            value.mutual_fund_id = this.mutualFundModel.id;
            var response = void 0;
            response = this.mutualFundService.editMutualFund(value);
            response.subscribe(function (data) {
                if (data.status) {
                    _this.mutualFundEditSuccessMessage = true;
                    _this.successMessage = data.result;
                    value.id = _this.mutualFundModel.id;
                    for (var key in _this.mutualFunds[_this.mutualFundModel.index]) {
                        if (value[key] != undefined) {
                            _this.mutualFunds[_this.mutualFundModel.index][key] = value[key];
                        }
                    }
                    _this.mutualFundModel = {};
                    setTimeout(function () {
                        this.mutualFundEditSuccessMessage = false;
                        this.isEditMutualFund = false;
                    }.bind(_this), 3000);
                }
                else {
                    _this.mutualFundEditFailureMessage = true;
                    _this.failureMessage = data.result;
                    setTimeout(function () {
                        this.mutualFundEditFailureMessage = false;
                    }.bind(_this), 3000);
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    MutualFundViewComponent.prototype.showDatePicker = function () {
        this.isDatePickerShown = true;
    };
    MutualFundViewComponent.prototype.hideDatePicker = function () {
        this.isDatePickerShown = false;
    };
    MutualFundViewComponent.prototype.showMatureDatePicker = function () {
        this.isMatureDatePickerShown = true;
    };
    MutualFundViewComponent.prototype.hideMatureDatePicker = function () {
        this.isMatureDatePickerShown = false;
    };
    MutualFundViewComponent.prototype.dateSelected = function (event) {
        this.datePickerValue = moment(event).format("YYYY-MM-DD");
        this.hideDatePicker();
    };
    MutualFundViewComponent.prototype.matureDateSelected = function (event) {
        this.matureDatePickerValue = moment(event).format("YYYY-MM-DD");
        this.hideMatureDatePicker();
    };
    MutualFundViewComponent.prototype.handleClick = function (event) {
        if (!(event.target.closest('datepicker') != null || event.target.closest('.btn') != null || event.target.closest('.date-picker') != null)) {
            this.hideDatePicker();
        }
    };
    return MutualFundViewComponent;
}());
__decorate([
    core_1.ViewChild('deleteMutualFundModal'),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], MutualFundViewComponent.prototype, "deleteMutualFundModal", void 0);
MutualFundViewComponent = __decorate([
    core_1.Component({
        selector: 'mutual-fund-view',
        host: {
            '(document:click)': 'handleClick($event)'
        },
        templateUrl: route + '/resources/views/admin/mutual-fund-view.component.html',
        providers: [vendor_service_1.VendorService, user_service_1.UserService, mutual_fund_service_1.MutualFundService]
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, vendor_service_1.VendorService, user_service_1.UserService, mutual_fund_service_1.MutualFundService])
], MutualFundViewComponent);
exports.MutualFundViewComponent = MutualFundViewComponent;
//# sourceMappingURL=mutual-fund-view.component.js.map