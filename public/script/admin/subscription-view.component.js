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
var app_constants_1 = require("../helper/app.constants");
var user_service_1 = require("../services/user-service");
var route = app_constants_1.AppConstants.RouteUrl;
var SubscriptionViewComponent = (function () {
    function SubscriptionViewComponent(userService) {
        this.userService = userService;
        this.subscriptions = [];
        this.hasMoreSubscriptions = false;
        this.subscriptionStatus = app_constants_1.AppConstants.SUBSCRIPTION_STATUS;
        this.subscriptionStatusNames = app_constants_1.AppConstants.SUBSCRIPTION_STATUS_NAMES;
        this.subscriptionModel = {};
        this.getSubscriptionsList();
    }
    SubscriptionViewComponent.prototype.getSubscriptionsList = function (load) {
        var _this = this;
        var subscription = this.subscriptionModel;
        if (load) {
            subscription.start = this.subscriptions.length;
            subscription.size = app_constants_1.AppConstants.PAGINATION_SIZE;
        }
        var response;
        response = this.userService.getSubscriptionsList(subscription);
        response.subscribe(function (data) {
            if (data.status) {
                if (data.result.length) {
                    _this.subscriptions = _this.subscriptions.concat(data.result);
                }
                if (data.result.length < app_constants_1.AppConstants.PAGINATION_SIZE) {
                    _this.hasMoreSubscriptions = false;
                }
                else {
                    _this.hasMoreSubscriptions = true;
                }
            }
        }, function (err) {
            console.log(err);
        });
    };
    SubscriptionViewComponent.prototype.getSubscriptionsListByStatus = function (status) {
        this.subscriptionModel = {};
        this.subscriptionModel.status = status;
        this.subscriptions = [];
        this.getSubscriptionsList();
    };
    return SubscriptionViewComponent;
}());
SubscriptionViewComponent = __decorate([
    core_1.Component({
        selector: 'subscription-dashboard',
        templateUrl: route + '/resources/views/admin/subscription-view.component.html',
        providers: [user_service_1.UserService]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], SubscriptionViewComponent);
exports.SubscriptionViewComponent = SubscriptionViewComponent;
//# sourceMappingURL=subscription-view.component.js.map