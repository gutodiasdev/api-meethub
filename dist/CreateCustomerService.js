"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CreateCustomerService = /** @class */ (function () {
    function CreateCustomerService() {
    }
    CreateCustomerService.prototype.execute = function (_a) {
        var firstname = _a.firstname, lastname = _a.lastname, _b = _a.pro, pro = _b === void 0 ? false : _b;
        console.log(firstname, lastname, pro);
    };
    return CreateCustomerService;
}());
exports.default = new CreateCustomerService();
