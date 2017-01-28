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
var user_service_1 = require("../services/user-service");
var route = app_constants_1.AppConstants.RouteUrl;
var ForgotPasswordComponent = (function () {
    function ForgotPasswordComponent(router, formBuilder, userService) {
        this.router = router;
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.forgotPasswordFailureMessage = false;
        this.forgotPasswordSuccessMessage = false;
        this.forgotPasswordForm = formBuilder.group({
            'email': [null, [forms_1.Validators.required, custom_validator_1.CustomValidator.isInvalidEmail]]
        });
    }
    ForgotPasswordComponent.prototype.forgotPassword = function (value) {
        var _this = this;
        var response;
        if (this.forgotPasswordForm.valid) {
            response = this.userService.forgotPassword(value);
            response.subscribe(function (data) {
                if (data.status) {
                    _this.forgotPasswordSuccessMessage = true;
                    _this.message = data.result;
                    setTimeout(function () {
                        this.forgotPasswordSuccessMessage = false;
                    }.bind(_this), 3000);
                }
                else {
                    _this.forgotPasswordFailureMessage = true;
                    _this.message = data.result;
                    setTimeout(function () {
                        this.forgotPasswordFailureMessage = false;
                    }.bind(_this), 3000);
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    return ForgotPasswordComponent;
}());
ForgotPasswordComponent = __decorate([
    core_1.Component({
        selector: 'forgot-password',
        templateUrl: route + '/resources/views/user/forgot-password.component.html',
        providers: [user_service_1.UserService]
    }),
    __metadata("design:paramtypes", [router_1.Router, forms_1.FormBuilder, user_service_1.UserService])
], ForgotPasswordComponent);
exports.ForgotPasswordComponent = ForgotPasswordComponent;
//# sourceMappingURL=forgot-password.component.js.map