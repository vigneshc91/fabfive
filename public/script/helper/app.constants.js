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
    Object.defineProperty(AppConstants, "ImageUrl", {
        get: function () {
            return this.AppUrl + "storage/app/public/";
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
AppConstants.MAX_VALUE = 99999999;
AppConstants.VENDOR_NAMES = {
    1: "EQUITY",
    2: "COMMODITY",
    3: "MUTUAL FUND",
    4: "LIFE INSURANCE",
    5: "HEALTH INSURANCE",
    6: "GENERAL INSURANCE"
};
AppConstants.VENDOR_VALUES = {
    "EQUITY": 1,
    "COMMODITY": 2,
    "MUTUAL_FUND": 3,
    "LIFE_INSURANCE": 4,
    "HEALTH_INSURANCE": 5,
    "GENERAL_INSURANCE": 6
};
AppConstants.VENDOR_TYPES = [
    {
        name: 'EQUITY',
        value: 1,
        short: 'EQ'
    },
    {
        name: 'COMMODITY',
        value: 2,
        short: 'COM'
    },
    {
        name: "MUTUAL FUND",
        value: 3,
        short: 'MF'
    },
    {
        name: "LIFE INSURANCE",
        value: 4,
        short: 'LI'
    },
    {
        name: "HEALTH INSURANCE",
        value: 5,
        short: 'HI'
    },
    {
        name: "GENERAL INSURANCE",
        value: 6,
        short: 'GI'
    }
];
AppConstants.GENDER_NAMES = {
    1: "Male",
    2: "Female"
};
AppConstants.GENDER_TYPES = [
    {
        name: 'Male',
        value: 1
    },
    {
        name: 'Female',
        value: 2
    }
];
AppConstants.MUTUAL_FUND_NAMES = {
    1: 'SIP',
    2: 'ONE TIME INVESTMENT'
};
AppConstants.MUTUAL_FUND_TYPES = [
    {
        name: 'SIP',
        value: 1
    },
    {
        name: 'ONE TIME INVESTMENT',
        value: 2
    }
];
AppConstants.MUTUAL_FUND_STATUS = [
    {
        name: 'ACTIVE',
        value: 1
    },
    {
        name: 'HOLD',
        value: 2
    },
    {
        name: 'CLOSED',
        value: 3
    }
];
AppConstants.MUTUAL_FUND_STATUS_NAMES = {
    1: 'ACTIVE',
    2: 'HOLD',
    3: 'CLOSED'
};
exports.AppConstants = AppConstants;
//# sourceMappingURL=app.constants.js.map