"use strict";
var CustomValidator = (function () {
    function CustomValidator() {
    }
    CustomValidator.isInvalidEmail = function (formControl) {
        var EMAIL_REGEXP = /^[a-z0-9!#$%&'*+\/=?^_`{|}~.-]+@[a-z0-9]([a-z0-9-]*[a-z0-9])?(\.[a-z0-9]([a-z0-9-]*[a-z0-9])?)*$/i;
        var value = formControl.value;
        if (value && (value.length <= 5 || !EMAIL_REGEXP.test(value))) {
            return {
                isInvalidEmail: true
            };
        }
        return null;
    };
    CustomValidator.isInvalidPhoneNumber = function (formControl) {
        var PHONE_REGEXP = /^[0-9]{10,20}$/;
        var value = formControl.value;
        if (value && (value.length <= 5 || !PHONE_REGEXP.test(value))) {
            return {
                isInvalidPhoneNumber: true
            };
        }
        return null;
    };
    return CustomValidator;
}());
exports.CustomValidator = CustomValidator;
//# sourceMappingURL=custom.validator.js.map