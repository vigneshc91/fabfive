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
var UserDashboardComponent = (function () {
    function UserDashboardComponent(userService) {
        this.userService = userService;
        this.userChartData = [
            { data: [], label: 'User' }
        ];
        this.userChartLabels = [];
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
    }
    UserDashboardComponent.prototype.ngOnInit = function () {
        this.getUserStat();
    };
    UserDashboardComponent.prototype.getUserStat = function () {
        var _this = this;
        var response;
        response = this.userService.getUserStat();
        response.subscribe(function (data) {
            if (data.status) {
                var res = data.result;
                var dates_1 = [];
                var totals_1 = [];
                res.forEach(function (element) {
                    dates_1.push(element.date);
                    totals_1.push(element.total);
                });
                _this.userChartLabels = dates_1;
                _this.userChartData = [{ data: totals_1, label: "User" }];
            }
        });
    };
    return UserDashboardComponent;
}());
UserDashboardComponent = __decorate([
    core_1.Component({
        selector: 'user-dashboard',
        templateUrl: route + '/resources/views/admin/user-dashboard.component.html',
        providers: [user_service_1.UserService]
    }),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserDashboardComponent);
exports.UserDashboardComponent = UserDashboardComponent;
//# sourceMappingURL=user-dashboard.component.js.map