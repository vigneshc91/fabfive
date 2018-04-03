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
var app_constants_1 = require("../helper/app.constants");
var vendor_service_1 = require("../services/vendor-service");
var vendor_model_1 = require("../models/vendor.model");
var route = app_constants_1.AppConstants.RouteUrl;
var VendorViewComponent = (function () {
    function VendorViewComponent(formBuilder, vendorService) {
        this.formBuilder = formBuilder;
        this.vendorService = vendorService;
        this.vendorEditSuccessMessage = false;
        this.vendorEditFailureMessage = false;
        this.vendorDeleteSuccessMessage = false;
        this.vendorDeleteFailureMessage = false;
        this.isEditVendor = false;
        this.vendorEditForm = formBuilder.group({
            'type': ["", forms_1.Validators.required],
            'name': [null, forms_1.Validators.required]
        });
        this.vendorSearchForm = formBuilder.group({
            'type': [""]
        });
        this.vendors = [];
        this.vendorModel = new vendor_model_1.Vendor();
        this.vendorList = app_constants_1.AppConstants.VENDOR_TYPES;
        this.vendorNames = app_constants_1.AppConstants.VENDOR_NAMES;
        this.getVendorsList();
    }
    VendorViewComponent.prototype.getVendorsList = function (load) {
        var _this = this;
        var vendor = {};
        if (load) {
            vendor.start = this.vendors.length;
            vendor.size = app_constants_1.AppConstants.PAGINATION_SIZE;
        }
        if (this.vendorModel.type) {
            vendor.type = this.vendorModel.type;
        }
        var response;
        response = this.vendorService.getVendorsList(vendor);
        response.subscribe(function (data) {
            if (data.status) {
                if (data.result.length) {
                    _this.vendors = _this.vendors.concat(data.result);
                    if (data.result.length < app_constants_1.AppConstants.PAGINATION_SIZE) {
                        _this.hasMoreVendors = false;
                    }
                    else {
                        _this.hasMoreVendors = true;
                    }
                }
            }
        }, function (err) {
            console.log(err);
        });
    };
    VendorViewComponent.prototype.showDeleteConfirm = function (index, vendorId) {
        this.vendorModel = {
            vendor_id: vendorId,
            index: index
        };
        this.deleteVendorModal.show();
    };
    VendorViewComponent.prototype.closeDeleteVendorModal = function () {
        this.vendorModel = {};
        this.deleteVendorModal.hide();
    };
    VendorViewComponent.prototype.deleteVendor = function () {
        var _this = this;
        var vendor = this.vendorModel;
        var response;
        response = this.vendorService.deleteVendor(vendor);
        response.subscribe(function (data) {
            if (data.status) {
                _this.vendors.splice(vendor.index, 1);
                _this.vendorDeleteSuccessMessage = true;
                _this.successMessage = data.result;
                setTimeout(function () {
                    this.vendorDeleteSuccessMessage = false;
                    this.closeDeleteVendorModal();
                }.bind(_this), 3000);
            }
            else {
                _this.vendorDeleteFailureMessage = true;
                _this.failureMessage = data.result;
                setTimeout(function () {
                    this.vendorDeleteFailureMessage = false;
                }.bind(_this), 3000);
            }
        }, function (err) {
            console.log(err);
        });
    };
    VendorViewComponent.prototype.showEditVendor = function (index, vendor) {
        this.isEditVendor = true;
        this.vendorModel = vendor;
        this.vendorModel.index = index;
        this.vendorEditForm = this.formBuilder.group({
            'type': [vendor.type, forms_1.Validators.required],
            'name': [vendor.name, forms_1.Validators.required],
        });
    };
    VendorViewComponent.prototype.cancelEditVendor = function () {
        this.vendorModel = {};
        this.isEditVendor = false;
    };
    VendorViewComponent.prototype.editVendor = function (value) {
        var _this = this;
        if (this.vendorEditForm.valid) {
            value.vendor_id = this.vendorModel.id;
            var response = void 0;
            response = this.vendorService.editVendor(value);
            response.subscribe(function (data) {
                if (data.status) {
                    _this.vendorEditSuccessMessage = true;
                    _this.successMessage = data.result;
                    value.id = _this.vendorModel.id;
                    _this.vendors[_this.vendorModel.index] = value;
                    _this.vendorModel = {};
                    setTimeout(function () {
                        this.vendorEditSuccessMessage = false;
                        this.isEditVendor = false;
                    }.bind(_this), 3000);
                }
                else {
                    _this.vendorEditFailureMessage = true;
                    _this.failureMessage = data.result;
                    setTimeout(function () {
                        this.vendorEditFailureMessage = false;
                    }.bind(_this), 3000);
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    VendorViewComponent.prototype.searchVendor = function (value) {
        var _this = this;
        if (this.vendorSearchForm.valid) {
            this.vendorModel.type = value.type;
            var response = void 0;
            response = this.vendorService.getVendorsList(value);
            response.subscribe(function (data) {
                if (data.status) {
                    _this.vendors = [];
                    if (data.result.length) {
                        _this.vendors = _this.vendors.concat(data.result);
                        if (data.result.length < app_constants_1.AppConstants.PAGINATION_SIZE) {
                            _this.hasMoreVendors = false;
                        }
                        else {
                            _this.hasMoreVendors = true;
                        }
                    }
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    return VendorViewComponent;
}());
__decorate([
    core_1.ViewChild('deleteVendorModal'),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], VendorViewComponent.prototype, "deleteVendorModal", void 0);
VendorViewComponent = __decorate([
    core_1.Component({
        selector: 'vendor-view',
        templateUrl: route + '/resources/views/admin/vendor-view.component.html',
        providers: [vendor_service_1.VendorService]
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, vendor_service_1.VendorService])
], VendorViewComponent);
exports.VendorViewComponent = VendorViewComponent;
//# sourceMappingURL=vendor-view.component.js.map