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
var routeurl = app_constants_1.AppConstants.RouteUrl;
var routes = [
    // super admin routes
    { path: routeurl + '/superAdmin', redirectTo: routeurl + '/superAdmin/login', pathMatch: 'full' },
    { path: routeurl + '/superAdmin/login', component: super_admin_login_component_1.SuperAdminLoginComponent },
    { path: routeurl + '/superAdmin/dashboard', component: super_admin_dashboard_component_1.SuperAdminDashboardComponent },
    { path: routeurl + '/superAdmin/create', component: super_admin_create_component_1.SuperAdminCreateComponent },
    { path: routeurl + '/superAdmin/view', component: super_admin_view_component_1.SuperAdminViewComponent },
    // common routes
    { path: routeurl + '/user/changePassword', component: change_password_component_1.ChangePasswordComponent },
    // admin routes  
    { path: routeurl + '/admin', redirectTo: routeurl + '/admin/login', pathMatch: 'full' },
    { path: routeurl + '/admin/login', component: admin_login_component_1.AdminLoginComponent },
    { path: routeurl + '/admin/dashboard', component: admin_dashboard_component_1.AdminDashboardComponent },
    { path: routeurl + '/vendor/dashboard', component: vendor_dashboard_component_1.VendorDashboardComponent },
    { path: routeurl + '/vendor/create', component: vendor_create_component_1.VendorCreateComponent },
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