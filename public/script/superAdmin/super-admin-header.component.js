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
var router_1 = require("@angular/router");
var app_constants_1 = require("../helper/app.constants");
var user_service_1 = require("../services/user-service");
var common_1 = require("../helper/common");
var route = app_constants_1.AppConstants.RouteUrl;
var SuperAdminHeaderComponent = (function () {
    function SuperAdminHeaderComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.routerurl = app_constants_1.AppConstants.RouterUrl;
        this.loggedInUser = {};
        this.superAdminDashboardLink = this.routerurl + '/superAdmin/dashboard';
        this.superAdminCreateLink = this.routerurl + '/superAdmin/create';
        this.superAdminViewLink = this.routerurl + '/superAdmin/view';
        this.common = new common_1.Common();
        this.getLoggedInUser();
    }
    SuperAdminHeaderComponent.prototype.getLoggedInUser = function () {
        var _this = this;
        var response;
        response = this.userService.getLoggedInUser();
        response.subscribe(function (data) {
            if (data.status) {
                _this.loggedInUser = data.result;
            }
            else {
                _this.router.navigate([_this.routerurl + '/superAdmin/login']);
            }
        }, function (err) {
            console.log(err);
        });
    };
    SuperAdminHeaderComponent.prototype.superAdminLogout = function () {
        if (this.common.clearToken()) {
            this.router.navigate([this.routerurl + '/superAdmin/login']);
        }
    };
    return SuperAdminHeaderComponent;
}());
SuperAdminHeaderComponent = __decorate([
    core_1.Component({
        selector: 'super-admin-header',
        templateUrl: route + '/resources/views/superAdmin/super-admin-header.component.html',
        providers: [user_service_1.UserService]
    }),
    __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService])
], SuperAdminHeaderComponent);
exports.SuperAdminHeaderComponent = SuperAdminHeaderComponent;
//# sourceMappingURL=super-admin-header.component.js.map