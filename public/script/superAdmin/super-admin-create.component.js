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
var admin_service_1 = require("../services/admin-service");
var custom_validator_1 = require("../helper/custom.validator");
var route = app_constants_1.AppConstants.RouteUrl;
var SuperAdminCreateComponent = (function () {
    function SuperAdminCreateComponent(formBuilder, adminService) {
        this.formBuilder = formBuilder;
        this.adminService = adminService;
        this.adminCreateSuccessMessage = false;
        this.adminCreateFailureMessage = false;
        this.adminCreateForm = formBuilder.group({
            'first_name': [null, forms_1.Validators.required],
            'last_name': [null],
            'email': [null, [forms_1.Validators.required, custom_validator_1.CustomValidator.isInvalidEmail]],
        });
    }
    SuperAdminCreateComponent.prototype.createAdmin = function (value) {
        var _this = this;
        if (this.adminCreateForm.valid) {
            var response = void 0;
            response = this.adminService.createAdmin(value);
            response.subscribe(function (data) {
                if (data.status) {
                    _this.adminCreateSuccessMessage = true;
                    _this.successMessage = data.result;
                    setTimeout(function () {
                        this.adminCreateSuccessMessage = false;
                    }.bind(_this), 3000);
                }
                else {
                    _this.adminCreateFailureMessage = true;
                    _this.failureMessage = data.result;
                    setTimeout(function () {
                        this.adminCreateFailureMessage = false;
                    }.bind(_this), 3000);
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    return SuperAdminCreateComponent;
}());
SuperAdminCreateComponent = __decorate([
    core_1.Component({
        selector: 'super-admin-create',
        templateUrl: route + '/resources/views/superAdmin/super-admin-create.component.html',
        providers: [admin_service_1.AdminService]
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, admin_service_1.AdminService])
], SuperAdminCreateComponent);
exports.SuperAdminCreateComponent = SuperAdminCreateComponent;
//# sourceMappingURL=super-admin-create.component.js.map