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
    return AppConstants;
}());
exports.AppConstants = AppConstants;
//# sourceMappingURL=app.constants.js.map