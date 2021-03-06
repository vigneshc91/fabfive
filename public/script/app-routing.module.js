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
var app_constants_1 = require("./helper/app.constants");
// Super Admin components
var super_admin_login_component_1 = require("./superAdmin/super-admin-login.component");
var super_admin_dashboard_component_1 = require("./superAdmin/super-admin-dashboard.component");
var super_admin_create_component_1 = require("./superAdmin/super-admin-create.component");
var super_admin_view_component_1 = require("./superAdmin/super-admin-view.component");
var change_password_component_1 = require("./user/change-password.component");
// Admin components
var admin_login_component_1 = require("./admin/admin-login.component");
var admin_dashboard_component_1 = require("./admin/admin-dashboard.component");
var vendor_dashboard_component_1 = require("./admin/vendor-dashboard.component");
var vendor_create_component_1 = require("./admin/vendor-create.component");
var vendor_view_component_1 = require("./admin/vendor-view.component");
var user_dashboard_component_1 = require("./admin/user-dashboard.component");
var user_create_component_1 = require("./admin/user-create.component");
var user_view_component_1 = require("./admin/user-view.component");
var mutual_fund_dashboard_component_1 = require("./admin/mutual-fund-dashboard.component");
var mutual_fund_create_component_1 = require("./admin/mutual-fund-create.component");
var mutual_fund_view_component_1 = require("./admin/mutual-fund-view.component");
var subscription_dashboard_component_1 = require("./admin/subscription-dashboard.component");
var subscription_view_component_1 = require("./admin/subscription-view.component");
var subscription_send_email_component_1 = require("./admin/subscription-send-email.component");
var forgot_password_component_1 = require("./user/forgot-password.component");
var routeurl = app_constants_1.AppConstants.RouteUrl;
var routes = [
    // super admin routes
    { path: routeurl + 'superAdmin', redirectTo: routeurl + 'superAdmin/login', pathMatch: 'full' },
    { path: routeurl + 'superAdmin/login', component: super_admin_login_component_1.SuperAdminLoginComponent },
    { path: routeurl + 'superAdmin/dashboard', component: super_admin_dashboard_component_1.SuperAdminDashboardComponent },
    { path: routeurl + 'superAdmin/create', component: super_admin_create_component_1.SuperAdminCreateComponent },
    { path: routeurl + 'superAdmin/view', component: super_admin_view_component_1.SuperAdminViewComponent },
    // common routes
    { path: routeurl + 'user/changePassword', component: change_password_component_1.ChangePasswordComponent },
    { path: routeurl + 'user/forgotPassword', component: forgot_password_component_1.ForgotPasswordComponent },
    // admin routes  
    { path: routeurl + 'admin', redirectTo: routeurl + 'admin/login', pathMatch: 'full' },
    { path: routeurl + 'admin/login', component: admin_login_component_1.AdminLoginComponent },
    { path: routeurl + 'admin/dashboard', component: admin_dashboard_component_1.AdminDashboardComponent },
    { path: routeurl + 'vendor/dashboard', component: vendor_dashboard_component_1.VendorDashboardComponent },
    { path: routeurl + 'vendor/create', component: vendor_create_component_1.VendorCreateComponent },
    { path: routeurl + 'vendor/view', component: vendor_view_component_1.VendorViewComponent },
    { path: routeurl + 'user/dashboard', component: user_dashboard_component_1.UserDashboardComponent },
    { path: routeurl + 'user/create', component: user_create_component_1.UserCreateComponent },
    { path: routeurl + 'user/view', component: user_view_component_1.UserViewComponent },
    { path: routeurl + 'mutualFund/dashboard', component: mutual_fund_dashboard_component_1.MutualFundDashboardComponent },
    { path: routeurl + 'mutualFund/create', component: mutual_fund_create_component_1.MutualFundCreateComponent },
    { path: routeurl + 'mutualFund/view', component: mutual_fund_view_component_1.MutualFundViewComponent },
    { path: routeurl + 'subscription/dashboard', component: subscription_dashboard_component_1.SubscriptionDashboardComponent },
    { path: routeurl + 'subscription/view', component: subscription_view_component_1.SubscriptionViewComponent },
    { path: routeurl + 'subscription/sendMail', component: subscription_send_email_component_1.SubscriptionSendEmailComponent },
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    return AppRoutingModule;
}());
AppRoutingModule = __decorate([
    core_1.NgModule({
        imports: [router_1.RouterModule.forRoot(routes)],
        exports: [router_1.RouterModule]
    }),
    __metadata("design:paramtypes", [])
], AppRoutingModule);
exports.AppRoutingModule = AppRoutingModule;
//# sourceMappingURL=app-routing.module.js.map