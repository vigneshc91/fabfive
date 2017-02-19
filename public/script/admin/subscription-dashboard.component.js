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
var forms_1 = require("@angular/forms");
var moment = require("moment");
var app_constants_1 = require("../helper/app.constants");
var user_service_1 = require("../services/user-service");
var route = app_constants_1.AppConstants.RouteUrl;
var SubscriptionDashboardComponent = (function () {
    function SubscriptionDashboardComponent(formBuilder, userService) {
        var _this = this;
        this.formBuilder = formBuilder;
        this.userService = userService;
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
        this.currentYear = moment().format("YYYY");
        this.years = [];
        this.subscriptionStatus = app_constants_1.AppConstants.SUBSCRIPTION_STATUS;
        var year = app_constants_1.AppConstants.STATISTICS_START_YEAR;
        for (var i = 0; i < app_constants_1.AppConstants.STATISTICS_YEAR_COUNT; i++) {
            this.years.push(year);
            year += 1;
        }
        this.subscriptionForm = formBuilder.group({
            'status': [""],
            'year': [this.currentYear]
        });
        this.subscriptionForm.valueChanges.subscribe(function (data) {
            _this.getSubscriptionStat();
        });
        this.getSubscriptionStat();
    }
    SubscriptionDashboardComponent.prototype.getSubscriptionStat = function () {
        var _this = this;
        var data = this.subscriptionForm.value;
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
    return SubscriptionDashboardComponent;
}());
SubscriptionDashboardComponent = __decorate([
    core_1.Component({
        selector: 'subscription-dashboard',
        templateUrl: route + '/resources/views/admin/subscription-dashboard.component.html',
        providers: [user_service_1.UserService]
    }),
    __metadata("design:paramtypes", [forms_1.FormBuilder, user_service_1.UserService])
], SubscriptionDashboardComponent);
exports.SubscriptionDashboardComponent = SubscriptionDashboardComponent;
//# sourceMappingURL=subscription-dashboard.component.js.map