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
var router_1 = require("@angular/router");
var app_constants_1 = require("../helper/app.constants");
var custom_validator_1 = require("../helper/custom.validator");
var login_logout_service_1 = require("../services/login-logout.service");
var common_1 = require("../helper/common");
var route = app_constants_1.AppConstants.RouteUrl;
var SuperAdminLoginComponent = (function () {
    function SuperAdminLoginComponent(router, formBuilder, loginLogoutService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.loginLogoutService = loginLogoutService;
        this.superAdminLoginFailureMessage = false;
        this.routerurl = app_constants_1.AppConstants.RouterUrl;
        this.superAdminLoginForm = formBuilder.group({
            'email': [null, [forms_1.Validators.required, custom_validator_1.CustomValidator.isInvalidEmail]],
            'password': [null, forms_1.Validators.required]
        });
        this.forgotPasswordLink = this.routerurl + "/user/forgotPassword";
        this.common = new common_1.Common();
    }
    SuperAdminLoginComponent.prototype.superAdminLogin = function (value) {
        var _this = this;
        var response;
        if (this.superAdminLoginForm.valid) {
            response = this.loginLogoutService.login(value);
            response.subscribe(function (data) {
                if (data.status) {
                    _this.common.authToken = data.result;
                    _this.router.navigate([route + '/superAdmin/dashboard']);
                }
                else {
                    _this.superAdminLoginFailureMessage = true;
                    _this.message = data.result;
                    setTimeout(function () {
                        this.superAdminLoginFailureMessage = false;
                    }.bind(_this), 3000);
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    return SuperAdminLoginComponent;
}());
SuperAdminLoginComponent = __decorate([
    core_1.Component({
        selector: 'super-admin-login',
        templateUrl: route + '/resources/views/superAdmin/super-admin-login.component.html'
    }),
    __metadata("design:paramtypes", [router_1.Router, forms_1.FormBuilder, login_logout_service_1.LoginLogoutService])
], SuperAdminLoginComponent);
exports.SuperAdminLoginComponent = SuperAdminLoginComponent;
//# sourceMappingURL=super-admin-login.component.js.map