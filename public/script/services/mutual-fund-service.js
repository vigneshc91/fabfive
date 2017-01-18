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
var app_constants_1 = require("../helper/app.constants");
var common_1 = require("../helper/common");
var MutualFundService = (function () {
    function MutualFundService(http) {
        this.http = http;
        this.createMutualFundUrl = app_constants_1.AppConstants.AppUrl + "admin/createMutualFund";
        this.editMutualFundUrl = app_constants_1.AppConstants.AppUrl + "admin/editMutualFund";
        this.deleteMutualFundUrl = app_constants_1.AppConstants.AppUrl + "admin/deleteMutualFund";
        this.getMutualFundsListUrl = app_constants_1.AppConstants.AppUrl + "admin/getMutualFundsList";
        this.common = new common_1.Common();
        this.token = this.common.authToken;
    }
    MutualFundService.prototype.createMutualFund = function (data) {
        var headers = new http_1.Headers({ 'Content-type': 'application/json', 'Authorization': 'Bearer ' + this.token });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.createMutualFundUrl, data, options)
            .map(function (res) { return res.json(); });
    };
    MutualFundService.prototype.editMutualFund = function (data) {
        var headers = new http_1.Headers({ 'Content-type': 'application/json', 'Authorization': 'Bearer ' + this.token });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.editMutualFundUrl, data, options)
            .map(function (res) { return res.json(); });
    };
    MutualFundService.prototype.deleteMutualFund = function (data) {
        var headers = new http_1.Headers({ 'Content-type': 'application/json', 'Authorization': 'Bearer ' + this.token });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.deleteMutualFundUrl, data, options)
            .map(function (res) { return res.json(); });
    };
    MutualFundService.prototype.getMutualFundsList = function (data) {
        var headers = new http_1.Headers({ 'Content-type': 'application/json', 'Authorization': 'Bearer ' + this.token });
        var options = new http_1.RequestOptions({ headers: headers });
        return this.http.post(this.getMutualFundsListUrl, data, options)
            .map(function (res) { return res.json(); });
    };
    return MutualFundService;
}());
MutualFundService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], MutualFundService);
exports.MutualFundService = MutualFundService;
//# sourceMappingURL=mutual-fund-service.js.map