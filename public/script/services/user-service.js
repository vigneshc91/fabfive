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
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
var app_constants_1 = require("../helper/app.constants");
var common_1 = require("../helper/common");
var UserService = (function () {
    function UserService(http) {
        this.http = http;
        this.getLoggedInUserUrl = app_constants_1.AppConstants.AppUrl + "user/getLoggedInUser";
        this.changePasswordUrl = app_constants_1.AppConstants.AppUrl + "user/changePassword";
        this.getUsersListUrl = app_constants_1.AppConstants.AppUrl + "user/getUsersList";
        this.editUserUrl = app_constants_1.AppConstants.AppUrl + "admin/editUser";
        this.createEndUserUrl = app_constants_1.AppConstants.AppUrl + "admin/createUser";
        this.deleteUserUrl = app_constants_1.AppConstants.AppUrl + "admin/deleteUser";
        this.editEndUserUrl = app_constants_1.AppConstants.AppUrl + "admin/editUser";
        this.editUserAddressUrl = app_constants_1.AppConstants.AppUrl + "admin/editAddress";
        this.common = new common_1.Common();
        this.token = this.common.authToken;
    }
    UserService.prototype.getLoggedInUser = function () {
        var headers = new http_1.Headers({ 'Content-type': 'application/json', 'Authorization': 'Bearer ' + this.token });
        var options = new http_1.RequestOptions({ headers: headers });
        var data;
        return this.http.post(this.getLoggedInUserUrl, data, options)
            .map(function (res) { return res.json(); });
        // .catch((error:any) => Observable.throw(error.json().error || "Server error" ));
    };
    UserService.prototype.changePassword = function (data) {
        var headers = new http_1.Headers({ 'Content-type': 'application/json', 'Authorization': 'Bearer ' + this.token });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.changePasswordUrl, data, options)
            .map(function (res) { return res.json(); });
        // .catch((error:any) => Observable.throw(error.json().error || "Server error" ));
    };
    UserService.prototype.getUsersList = function (data) {
        var headers = new http_1.Headers({ 'Content-type': 'application/json', 'Authorization': 'Bearer ' + this.token });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.getUsersListUrl, data, options)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.editUser = function (data) {
        var headers = new http_1.Headers({ 'Content-type': 'application/json', 'Authorization': 'Bearer ' + this.token });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.editUserUrl, data, options)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.editUserAddress = function (data) {
        var headers = new http_1.Headers({ 'Content-type': 'application/json', 'Authorization': 'Bearer ' + this.token });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.editUserAddressUrl, data, options)
            .map(function (res) { return res.json(); });
    };
    UserService.prototype.createEndUser = function (data) {
        var headers = new http_1.Headers({ 'Content-type': 'multipart/form-data', 'Authorization': 'Bearer ' + this.token });
        var options = new http_1.RequestOptions({ headers: headers });
        var fd = new FormData();
        for (var key in data) {
            if (data.hasOwnProperty(key) && data[key] != null) {
                fd.append(key, data[key]);
            }
        }
        var xhr = new XMLHttpRequest();
        xhr.open('post', this.createEndUserUrl, true);
        xhr.setRequestHeader('Authorization', 'Bearer ' + this.token);
        xhr.send(fd);
        return Rx_1.Observable.create(function (res) {
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        res.next(JSON.parse(xhr.response));
                    }
                    else {
                        res.error(xhr.response);
                    }
                }
            };
        });
    };
    UserService.prototype.editEndUser = function (data) {
        var headers = new http_1.Headers({ 'Content-type': 'multipart/form-data', 'Authorization': 'Bearer ' + this.token });
        var options = new http_1.RequestOptions({ headers: headers });
        var fd = new FormData();
        for (var key in data) {
            if (data.hasOwnProperty(key) && data[key] != null) {
                fd.append(key, data[key]);
            }
        }
        var xhr = new XMLHttpRequest();
        xhr.open('post', this.editEndUserUrl, true);
        xhr.setRequestHeader('Authorization', 'Bearer ' + this.token);
        xhr.send(fd);
        return Rx_1.Observable.create(function (res) {
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4) {
                    if (xhr.status == 200) {
                        res.next(JSON.parse(xhr.response));
                    }
                    else {
                        res.error(xhr.response);
                    }
                }
            };
        });
    };
    UserService.prototype.deleteUser = function (data) {
        var headers = new http_1.Headers({ 'Content-type': 'application/json', 'Authorization': 'Bearer ' + this.token });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.deleteUserUrl, data, options)
            .map(function (res) { return res.json(); });
    };
    return UserService;
}());
UserService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user-service.js.map