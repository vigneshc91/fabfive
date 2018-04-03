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
var admin_service_1 = require("../services/admin-service");
var route = app_constants_1.AppConstants.RouteUrl;
var SuperAdminDashboardComponent = (function () {
    function SuperAdminDashboardComponent(adminService) {
        this.adminService = adminService;
        this.superAdminChartOptions = {
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
        this.superAdminChartLabels = ["Admin", "User"];
        this.superAdminChartType = 'bar';
        this.superAdminChartLegend = false;
        this.superAdminChartData = [
            { data: [], label: 'Total' }
        ];
        this.getStatForSuperAdmin();
    }
    SuperAdminDashboardComponent.prototype.getStatForSuperAdmin = function () {
        var _this = this;
        var response;
        response = this.adminService.getStatForSuperAdmin();
        response.subscribe(function (data) {
            if (data.status) {
                var res = data.result;
                var chartData = [];
                chartData.push(res.admin);
                chartData.push(res.user);
                _this.superAdminChartData = [{ data: chartData, label: 'Total' }];
            }
        }, function (err) {
            console.log(err);
        });
    };
    return SuperAdminDashboardComponent;
}());
SuperAdminDashboardComponent = __decorate([
    core_1.Component({
        selector: 'super-admin-dashboard',
        templateUrl: route + '/resources/views/superAdmin/super-admin-dashboard.component.html',
        providers: [admin_service_1.AdminService]
    }),
    __metadata("design:paramtypes", [admin_service_1.AdminService])
], SuperAdminDashboardComponent);
exports.SuperAdminDashboardComponent = SuperAdminDashboardComponent;
//# sourceMappingURL=super-admin-dashboard.component.js.map