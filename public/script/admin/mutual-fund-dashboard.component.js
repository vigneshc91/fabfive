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
var ng2_charts_1 = require("ng2-charts");
var app_constants_1 = require("../helper/app.constants");
var mutual_fund_service_1 = require("../services/mutual-fund-service");
var route = app_constants_1.AppConstants.RouteUrl;
var MutualFundDashboardComponent = (function () {
    function MutualFundDashboardComponent(mutualFundService) {
        this.mutualFundService = mutualFundService;
        this.mutualFundChartLabels = [];
        this.mutualFundChartData = [];
        this.mutualFundChartType = 'pie';
        this.mutualFundStatus = app_constants_1.AppConstants.MUTUAL_FUND_STATUS;
        this.getMutualFundStat();
    }
    MutualFundDashboardComponent.prototype.getMutualFundStat = function (status) {
        var _this = this;
        var response;
        var data = {};
        if (status) {
            data['status'] = status;
        }
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
    return MutualFundDashboardComponent;
}());
__decorate([
    core_1.ViewChild(ng2_charts_1.BaseChartDirective),
    __metadata("design:type", Object)
], MutualFundDashboardComponent.prototype, "chart", void 0);
MutualFundDashboardComponent = __decorate([
    core_1.Component({
        selector: 'mutual-fund-dashboard',
        templateUrl: route + '/resources/views/admin/mutual-fund-dashboard.component.html',
        providers: [mutual_fund_service_1.MutualFundService]
    }),
    __metadata("design:paramtypes", [mutual_fund_service_1.MutualFundService])
], MutualFundDashboardComponent);
exports.MutualFundDashboardComponent = MutualFundDashboardComponent;
//# sourceMappingURL=mutual-fund-dashboard.component.js.map