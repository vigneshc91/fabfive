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
var app_constants_1 = require("../helper/app.constants");
var vendor_service_1 = require("../services/vendor-service");
var route = app_constants_1.AppConstants.RouteUrl;
var VendorCreateComponent = (function () {
    function VendorCreateComponent(formBuilder, vendorService) {
        this.formBuilder = formBuilder;
        this.vendorService = vendorService;
        this.vendorCreateSuccessMessage = false;
        this.vendorCreateFailureMessage = false;
        this.vendorCreateForm = formBuilder.group({
            'type': ["", forms_1.Validators.required],
            'name': [null, forms_1.Validators.required]
        });
        this.vendors = app_constants_1.AppConstants.VENDOR_TYPES;
    }
    VendorCreateComponent.prototype.createVendor = function (value) {
        var _this = this;
        if (this.vendorCreateForm.valid) {
            var response = void 0;
            response = this.vendorService.createVendor(value);
            response.subscribe(function (data) {
                if (data.status) {
                    _this.vendorCreateSuccessMessage = true;
                    _this.successMessage = data.result;
                    _this.vendorCreateForm.reset({ 'type': '' });
                    setTimeout(function () {
                        this.vendorCreateSuccessMessage = false;
                    }.bind(_this), 3000);
                }
                else {
                    _this.vendorCreateFailureMessage = true;
                    _this.failureMessage = data.result;
                    setTimeout(function () {
                        this.vendorCreateFailureMessage = false;
                    }.bind(_this), 3000);
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    return VendorCreateComponent;
}());
VendorCreateComponent = __decorate([
    core_1.Component({
        selector: 'vendor-create',
        templateUrl: route + '/resources/views/admin/vendor-create.component.html',
        providers: [vendor_service_1.VendorService]
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, vendor_service_1.VendorService])
], VendorCreateComponent);
exports.VendorCreateComponent = VendorCreateComponent;
//# sourceMappingURL=vendor-create.component.js.map