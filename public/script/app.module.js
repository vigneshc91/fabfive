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
var platform_browser_1 = require("@angular/platform-browser");
var forms_1 = require("@angular/forms");
var http_1 = require("@angular/http");
var app_component_1 = require("./app.component");
// Third party plugins
var ng2_bootstrap_1 = require("ng2-bootstrap/ng2-bootstrap");
var ng2_charts_1 = require("ng2-charts");
var ng2_ckeditor_1 = require("ng2-ckeditor");
// Common Components
var app_routing_module_1 = require("./app-routing.module");
var header_component_1 = require("./user/header.component");
var change_password_component_1 = require("./user/change-password.component");
var forgot_password_component_1 = require("./user/forgot-password.component");
// Super Admin Components
var super_admin_login_component_1 = require("./superAdmin/super-admin-login.component");
var super_admin_dashboard_component_1 = require("./superAdmin/super-admin-dashboard.component");
var super_admin_create_component_1 = require("./superAdmin/super-admin-create.component");
var super_admin_view_component_1 = require("./superAdmin/super-admin-view.component");
// Admin Components
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
// Services
var login_logout_service_1 = require("./services/login-logout.service");
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    core_1.NgModule({
        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule, forms_1.ReactiveFormsModule, http_1.HttpModule, ng2_bootstrap_1.ModalModule.forRoot(), app_routing_module_1.AppRoutingModule, ng2_bootstrap_1.DatepickerModule.forRoot(), ng2_charts_1.ChartsModule, ng2_ckeditor_1.CKEditorModule],
        declarations: [app_component_1.AppComponent, super_admin_login_component_1.SuperAdminLoginComponent, header_component_1.HeaderComponent, super_admin_dashboard_component_1.SuperAdminDashboardComponent,
            super_admin_create_component_1.SuperAdminCreateComponent, super_admin_view_component_1.SuperAdminViewComponent, change_password_component_1.ChangePasswordComponent,
            admin_login_component_1.AdminLoginComponent, admin_dashboard_component_1.AdminDashboardComponent, vendor_dashboard_component_1.VendorDashboardComponent,
            vendor_create_component_1.VendorCreateComponent, vendor_view_component_1.VendorViewComponent, user_dashboard_component_1.UserDashboardComponent, forgot_password_component_1.ForgotPasswordComponent,
            user_create_component_1.UserCreateComponent, user_view_component_1.UserViewComponent, mutual_fund_dashboard_component_1.MutualFundDashboardComponent,
            mutual_fund_create_component_1.MutualFundCreateComponent, mutual_fund_view_component_1.MutualFundViewComponent,
            subscription_dashboard_component_1.SubscriptionDashboardComponent, subscription_view_component_1.SubscriptionViewComponent, subscription_send_email_component_1.SubscriptionSendEmailComponent],
        providers: [login_logout_service_1.LoginLogoutService],
        bootstrap: [app_component_1.AppComponent]
    }),
    __metadata("design:paramtypes", [])
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map