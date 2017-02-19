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
var moment = require("moment");
var ng2_charts_1 = require("ng2-charts");
var app_constants_1 = require("../helper/app.constants");
var vendor_service_1 = require("../services/vendor-service");
var user_service_1 = require("../services/user-service");
var mutual_fund_service_1 = require("../services/mutual-fund-service");
var route = app_constants_1.AppConstants.RouteUrl;
var AdminDashboardComponent = (function () {
    function AdminDashboardComponent(vendorService, userService, mutualFundService) {
        var _this = this;
        this.vendorService = vendorService;
        this.userService = userService;
        this.mutualFundService = mutualFundService;
        //  Vendor chart
        this.vendorChartOptions = {
            scaleShowVerticalLines: false,
            responsive: true,
            scales: {
                xAxes: [{
                        gridLines: {
                            display: false
                        }
                    }],
                yAxes: [{
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            min: 0
                        }
                    }]
            }
        };
        this.vendorChartLabels = [];
        this.vendorChartType = 'bar';
        this.vendorChartLegend = false;
        this.vendorChartData = [
            { data: [], label: 'Vendor' }
        ];
        this.vendor = app_constants_1.AppConstants.VENDOR_TYPES;
        // User chart
        this.userChartData = [
            { data: [], label: 'User' }
        ];
        this.userChartLabels = moment.monthsShort();
        this.userChartOptions = {
            responsive: true,
            scales: {
                xAxes: [{
                        gridLines: {
                            display: false
                        }
                    }],
                yAxes: [{
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            min: 0
                        }
                    }]
            }
        };
        this.userChartColors = [
            {
                backgroundColor: '#fff',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.userChartLegend = false;
        this.userChartType = 'line';
        // Mutual Fund chart
        this.mutualFundChartLabels = [];
        this.mutualFundChartData = [];
        this.mutualFundChartType = 'pie';
        this.mutualFundStatus = app_constants_1.AppConstants.MUTUAL_FUND_STATUS;
        // Subscribers chart
        this.subscriptionChartData = [
            { data: [], label: 'User' }
        ];
        this.subscriptionChartLabels = moment.monthsShort();
        this.subscriptionChartOptions = {
            responsive: true,
            scales: {
                xAxes: [{
                        gridLines: {
                            display: false
                        }
                    }],
                yAxes: [{
                        gridLines: {
                            display: false
                        },
                        ticks: {
                            min: 0
                        }
                    }]
            }
        };
        this.subscriptionChartColors = [
            {
                backgroundColor: '#fff',
                borderColor: 'rgba(148,159,177,1)',
                pointBackgroundColor: 'rgba(148,159,177,1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(148,159,177,0.8)'
            }
        ];
        this.subscriptionChartLegend = false;
        this.subscriptionChartType = 'line';
        this.vendor.forEach(function (element) {
            _this.vendorChartLabels.push(element.short);
        });
        this.getVendorStat();
        this.getUserStat();
        this.getMutualFundStat();
        this.getSubscriptionStat();
    }
    AdminDashboardComponent.prototype.getVendorStat = function () {
        var _this = this;
        var response;
        response = this.vendorService.getVendorStat();
        response.subscribe(function (data) {
            if (data.status) {
                var res = data.result;
                var chartData = [];
                var vendors = {};
                for (var i = 0; i < res.length; i++) {
                    vendors[res[i].type] = res[i].total;
                }
                for (var i = 1; i < _this.vendor.length + 1; i++) {
                    if (vendors[i]) {
                        chartData.push(vendors[i]);
                    }
                    else {
                        chartData.push(0);
                    }
                }
                _this.vendorChartData = [{ data: chartData, label: 'Vendor' }];
            }
        }, function (err) {
            console.log(err);
        });
    };
    AdminDashboardComponent.prototype.getUserStat = function () {
        var _this = this;
        var data = { year: moment().format("YYYY") };
        var response;
        response = this.userService.getUserStat(data);
        response.subscribe(function (data) {
            if (data.status) {
                var res = data.result;
                var totals = [];
                var months = {};
                for (var i = 0; i < res.length; i++) {
                    months[parseInt(res[i].month)] = res[i].total;
                }
                for (var i = 1; i < _this.userChartLabels.length + 1; i++) {
                    if (months[i]) {
                        totals.push(months[i]);
                    }
                    else {
                        totals.push(0);
                    }
                }
                _this.userChartData = [{ data: totals, label: "User" }];
            }
        });
    };
    AdminDashboardComponent.prototype.getMutualFundStat = function () {
        var _this = this;
        var response;
        var data = {};
        response = this.mutualFundService.getMutualFundStat(data);
        response.subscribe(function (data) {
            if (data.status) {
                var res = data.result;
                var labels_1 = [];
                var total_1 = [];
                res.forEach(function (element) {
                    labels_1.push(element.first_name + ' ' + element.last_name);
                    total_1.push(element.total);
                });
                if (!res.length) {
                    labels_1.push("No data found");
                    total_1.push("1");
                }
                _this.mutualFundChartLabels = labels_1;
                _this.mutualFundChartData = total_1;
                setTimeout(function () {
                    this.chart.refresh();
                }.bind(_this), 10);
            }
        }, function (err) {
        });
    };
    AdminDashboardComponent.prototype.getSubscriptionStat = function () {
        var _this = this;
        var data = { year: moment().format("YYYY") };
        var response;
        response = this.userService.getSubscriptionStat(data);
        response.subscribe(function (data) {
            if (data.status) {
                var res = data.result;
                var totals = [];
                var months = {};
                for (var i = 0; i < res.length; i++) {
                    months[parseInt(res[i].month)] = res[i].total;
                }
                for (var i = 1; i < _this.subscriptionChartLabels.length + 1; i++) {
                    if (months[i]) {
                        totals.push(months[i]);
                    }
                    else {
                        totals.push(0);
                    }
                }
                _this.subscriptionChartData = [{ data: totals, label: "Subscribers" }];
            }
        });
    };
    return AdminDashboardComponent;
}());
__decorate([
    core_1.ViewChild(ng2_charts_1.BaseChartDirective),
    __metadata("design:type", Object)
], AdminDashboardComponent.prototype, "chart", void 0);
AdminDashboardComponent = __decorate([
    core_1.Component({
        selector: 'admin-dashboard',
        templateUrl: route + '/resources/views/admin/admin-dashboard.component.html',
        providers: [vendor_service_1.VendorService, user_service_1.UserService, mutual_fund_service_1.MutualFundService]
    }),
    __metadata("design:paramtypes", [vendor_service_1.VendorService, user_service_1.UserService, mutual_fund_service_1.MutualFundService])
], AdminDashboardComponent);
exports.AdminDashboardComponent = AdminDashboardComponent;
//# sourceMappingURL=admin-dashboard.component.js.map