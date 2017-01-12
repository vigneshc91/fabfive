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
AppConstants.VENDOR_NAMES = {
    1: "EQUITY",
    2: "COMMODITY",
    3: "MUTUAL FUND",
    4: "LIFE INSURANCE",
    5: "HEALTH INSURANCE",
    6: "GENERAL INSURANCE"
};
AppConstants.VENDOR_TYPES = [
    {
        name: 'EQUITY',
        value: 1
    },
    {
        name: 'COMMODITY',
        value: 2
    },
    {
        name: "MUTUAL FUND",
        value: 3
    },
    {
        name: "LIFE INSURANCE",
        value: 4
    },
    {
        name: "HEALTH INSURANCE",
        value: 5
    },
    {
        name: "GENERAL INSURANCE",
        value: 6
    }
];
exports.AppConstants = AppConstants;
//# sourceMappingURL=app.constants.js.map