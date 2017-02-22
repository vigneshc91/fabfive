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
var vendor_service_1 = require("../services/vendor-service");
var route = app_constants_1.AppConstants.RouteUrl;
var VendorDashboardComponent = (function () {
    function VendorDashboardComponent(vendorService) {
        var _this = this;
        this.vendorService = vendorService;
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
        this.vendor.forEach(function (element) {
            _this.vendorChartLabels.push(element.name);
        });
        this.getVendorStat();
    }
    VendorDashboardComponent.prototype.getVendorStat = function () {
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
    return VendorDashboardComponent;
}());
VendorDashboardComponent = __decorate([
    core_1.Component({
        selector: 'vendor-dashboard',
        templateUrl: route + '/resources/views/admin/vendor-dashboard.component.html',
        providers: [vendor_service_1.VendorService]
    }),
    __metadata("design:paramtypes", [vendor_service_1.VendorService])
], VendorDashboardComponent);
exports.VendorDashboardComponent = VendorDashboardComponent;
//# sourceMappingURL=vendor-dashboard.component.js.map