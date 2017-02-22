"use strict";
var Common = (function () {
    function Common() {
    }
    Object.defineProperty(Common.prototype, "authToken", {
        get: function () {
            return localStorage.getItem('token');
        },
        set: function (token) {
            localStorage.setItem('token', token);
        },
        enumerable: true,
        configurable: true
    });
    Common.prototype.clearToken = function () {
        localStorage.clear();
        return true;
    };
    return Common;
}());
exports.Common = Common;
//# sourceMappingURL=common.js.map