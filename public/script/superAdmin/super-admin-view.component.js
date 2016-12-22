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
var ng2_bootstrap_1 = require("ng2-bootstrap/ng2-bootstrap");
var app_constants_1 = require("../helper/app.constants");
var admin_service_1 = require("../services/admin-service");
var user_service_1 = require("../services/user-service");
var user_model_1 = require("../models/user.model");
var route = app_constants_1.AppConstants.RouteUrl;
var SuperAdminViewComponent = (function () {
    function SuperAdminViewComponent(adminService, userService) {
        this.adminService = adminService;
        this.userService = userService;
        this.adminDeleteSuccessMessage = false;
        this.adminDeleteFailureMessage = false;
        this.admins = [];
        this.adminModel = new user_model_1.User();
        this.getAdminsList();
    }
    SuperAdminViewComponent.prototype.getAdminsList = function (load) {
        var _this = this;
        var user = {
            user_type: app_constants_1.AppConstants.USER_TYPE.admin
        };
        if (load) {
            user.start = this.admins.length;
            user.size = app_constants_1.AppConstants.PAGINATION_SIZE;
        }
        var response;
        response = this.userService.getUsersList(user);
        response.subscribe(function (data) {
            if (data.status) {
                if (data.result.length) {
                    _this.admins = _this.admins.concat(data.result);
                    if (data.result.length < app_constants_1.AppConstants.PAGINATION_SIZE) {
                        _this.hasMoreAdmins = false;
                    }
                    else {
                        _this.hasMoreAdmins = true;
                    }
                }
            }
        }, function (err) {
            console.log(err);
        });
    };
    SuperAdminViewComponent.prototype.showDeleteConfirm = function (index, userId) {
        this.adminModel = {
            user_id: userId,
            index: index
        };
        this.deleteAdminModal.show();
    };
    SuperAdminViewComponent.prototype.closeDeleteAdminModal = function () {
        this.adminModel = {};
        this.deleteAdminModal.hide();
    };
    SuperAdminViewComponent.prototype.deleteAdmin = function () {
        var _this = this;
        var admin = this.adminModel;
        var response;
        response = this.adminService.deleteAdmin(admin);
        response.subscribe(function (data) {
            if (data.status) {
                _this.admins.splice(admin.index, 1);
                _this.adminDeleteSuccessMessage = true;
                _this.successMessage = data.result;
                setTimeout(function () {
                    this.adminDeleteSuccessMessage = false;
                }.bind(_this), 3000);
            }
            else {
                _this.adminDeleteFailureMessage = true;
                _this.failureMessage = data.result;
                setTimeout(function () {
                    this.adminDeleteFailureMessage = false;
                }.bind(_this), 3000);
            }
        }, function (err) {
            console.log(err);
        });
    };
    return SuperAdminViewComponent;
}());
__decorate([
    core_1.ViewChild('deleteAdminModal'),
    __metadata("design:type", ng2_bootstrap_1.ModalDirective)
], SuperAdminViewComponent.prototype, "deleteAdminModal", void 0);
SuperAdminViewComponent = __decorate([
    core_1.Component({
        selector: 'super-admin-view',
        templateUrl: route + '/resources/views/superAdmin/super-admin-view.component.html',
        providers: [admin_service_1.AdminService, user_service_1.UserService]
    }),
    __metadata("design:paramtypes", [admin_service_1.AdminService, user_service_1.UserService])
], SuperAdminViewComponent);
exports.SuperAdminViewComponent = SuperAdminViewComponent;
//# sourceMappingURL=super-admin-view.component.js.map