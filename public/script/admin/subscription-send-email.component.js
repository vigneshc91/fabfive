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
var user_service_1 = require("../services/user-service");
var route = app_constants_1.AppConstants.RouteUrl;
var SubscriptionSendEmailComponent = (function () {
    function SubscriptionSendEmailComponent(formBuilder, userService) {
        this.formBuilder = formBuilder;
        this.userService = userService;
        this.success = false;
        this.failed = false;
        this.isSubmitted = false;
        this.sendMailForm = formBuilder.group({
            'subject': [null, forms_1.Validators.required],
            'content': [null, forms_1.Validators.required]
        });
    }
    SubscriptionSendEmailComponent.prototype.sendMailToSubscribers = function (value) {
        var _this = this;
        if (this.sendMailForm.valid) {
            this.isSubmitted = true;
            var response = void 0;
            response = this.userService.sendMailToSubscribers(value);
            response.subscribe(function (data) {
                if (data.status) {
                    _this.sendMailForm.reset();
                    _this.isSubmitted = false;
                    _this.success = true;
                    _this.message = data.result;
                    setTimeout(function () {
                        this.success = false;
                    }.bind(_this), 3000);
                }
                else {
                    _this.isSubmitted = false;
                    _this.failed = true;
                    _this.message = data.result;
                    setTimeout(function () {
                        this.failed = false;
                    }.bind(_this), 3000);
                }
            }, function (err) {
                console.log(err);
            });
        }
    };
    return SubscriptionSendEmailComponent;
}());
SubscriptionSendEmailComponent = __decorate([
    core_1.Component({
        selector: 'subscription-send-email',
        templateUrl: route + '/resources/views/admin/subscription-send-email.component.html',
        providers: [user_service_1.UserService]
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, user_service_1.UserService])
], SubscriptionSendEmailComponent);
exports.SubscriptionSendEmailComponent = SubscriptionSendEmailComponent;
//# sourceMappingURL=subscription-send-email.component.js.map