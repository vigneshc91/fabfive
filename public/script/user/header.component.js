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
var HeaderComponent = (function () {
    function HeaderComponent(router, userService) {
        this.router = router;
        this.userService = userService;
        this.routerurl = app_constants_1.AppConstants.RouterUrl;
        this.loggedInUser = {};
        this.common = new common_1.Common();
        this.getLoggedInUser();
    }
    HeaderComponent.prototype.getLoggedInUser = function () {
        var _this = this;
        var response;
        response = this.userService.getLoggedInUser();
        response.subscribe(function (data) {
            if (data.status) {
                _this.loggedInUser = data.result;
                switch (_this.loggedInUser.user_type) {
                    case 1:
                        _this.setSuperAdminRoutes();
                        break;
                    case 2:
                        _this.setAdminRoutes();
                        break;
                }
            }
            else {
                _this.router.navigate([_this.routerurl + '/superAdmin/login']);
            }
        }, function (err) {
            console.log(err);
        });
    };
    HeaderComponent.prototype.setSuperAdminRoutes = function () {
        this.superAdminDashboardLink = this.routerurl + '/superAdmin/dashboard';
        this.superAdminCreateLink = this.routerurl + '/superAdmin/create';
        this.superAdminViewLink = this.routerurl + '/superAdmin/view';
        this.changePasswordLink = this.routerurl + '/user/changePassword';
    };
    HeaderComponent.prototype.setAdminRoutes = function () {
        this.adminDashboardLink = this.routerurl + '/admin/dashboard';
        this.changePasswordLink = this.routerurl + '/user/changePassword';
        this.vendorDashboardLink = this.routerurl + '/vendor/dashboard';
        this.vendorCreateLink = this.routerurl + '/vendor/create';
        this.vendorViewLink = this.routerurl + '/vendor/view';
        this.userDashboardLink = this.routerurl + '/user/dashboard';
        this.userCreateLink = this.routerurl + '/user/create';
        this.userViewLink = this.routerurl + '/user/view';
        this.mutualFundDashboardLink = this.routerurl + '/mutualFund/dashboard';
        this.mutualFundCreateLink = this.routerurl + '/mutualFund/create';
        this.mutualFundViewLink = this.routerurl + '/mutualFund/view';
    };
    HeaderComponent.prototype.superAdminLogout = function () {
        if (this.common.clearToken()) {
            this.router.navigate([this.routerurl + '/superAdmin/login']);
        }
    };
    HeaderComponent.prototype.adminLogout = function () {
        if (this.common.clearToken()) {
            this.router.navigate([this.routerurl + '/admin/login']);
        }
    };
    return HeaderComponent;
}());
HeaderComponent = __decorate([
    core_1.Component({
        selector: 'user-header',
        templateUrl: route + '/resources/views/user/header.component.html',
        providers: [user_service_1.UserService]
    }),
    __metadata("design:paramtypes", [router_1.Router, user_service_1.UserService])
], HeaderComponent);
exports.HeaderComponent = HeaderComponent;
//# sourceMappingURL=header.component.js.map