"use strict";
var AppConstants = (function () {
    function AppConstants() {
    }
    Object.defineProperty(AppConstants, "RouteUrl", {
        get: function () {
            if (window.location.hostname == 'localhost') {
                return 'fabfive';
            }
            else {
                return '';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConstants, "RouterUrl", {
        get: function () {
            if (window.location.hostname == 'localhost') {
                return '/fabfive';
            }
            else {
                return '';
            }
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(AppConstants, "AppUrl", {
        get: function () {
            if (window.location.hostname == 'localhost') {
                return 'http://localhost/fabfive/';
            }
            else {
                return 'http://' + window.location.hostname + '/';
            }
        },
        enumerable: true,
        configurable: true
    });
    return AppConstants;
}());
AppConstants.USER_TYPE = {
    'superAdmin': 1,
    'admin': 2,
    'user': 3
};
AppConstants.PAGINATION_SIZE = 10;
exports.AppConstants = AppConstants;
//# sourceMappingURL=app.constants.js.map