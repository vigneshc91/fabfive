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
var custom_validator_1 = require("../helper/custom.validator");
var user_service_1 = require("../services/user-service");
var app_constants_1 = require("../helper/app.constants");
var route = app_constants_1.AppConstants.RouteUrl;
var ChangePasswordComponent = (function () {
    function ChangePasswordComponent(formBuilder, userService) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.changePasswordSuccessMessage = false;
        this.changePasswordFailureMessage = false;
        this.changePasswordForm = formBuilder.group({
            'old_password': [null, forms_1.Validators.required],
            'new_password': [null, forms_1.Validators.required],
            'confirm_new_password': [null, [forms_1.Validators.required, custom_validator_1.CustomValidator.passwordMatch]]
        });
    }
    ChangePasswordComponent.prototype.changePassword = function (value) {
        var _this = this;
        if (this.changePasswordForm.valid) {
            var response = void 0;
            response = this.userService.changePassword(value);
            response.subscribe(function (data) {
                if (data.status) {
                    _this.changePasswordSuccessMessage = true;
                    _this.successMessage = data.result;
                    _this.changePasswordForm.reset();
                    setTimeout(function () {
                        this.changePasswordSuccessMessage = false;
                    }.bind(_this), 3000);
                }
                else {
                    _this.changePasswordFailureMessage = true;
                    _this.failureMessage = data.result;
                    setTimeout(function () {
                        this.changePasswordFailureMessage = false;
                    }.bind(_this), 3000);
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    return ChangePasswordComponent;
}());
ChangePasswordComponent = __decorate([
    core_1.Component({
        selector: 'change-password',
        templateUrl: route + '/resources/views/user/change-password.component.html',
        providers: [user_service_1.UserService]
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, user_service_1.UserService])
], ChangePasswordComponent);
exports.ChangePasswordComponent = ChangePasswordComponent;
//# sourceMappingURL=change-password.component.js.map