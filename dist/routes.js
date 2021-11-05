"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCustomer = void 0;
var CreateCustomerService_1 = __importDefault(require("./CreateCustomerService"));
function createCustomer(request, response) {
    CreateCustomerService_1.default.execute({
        firstname: "Jayson",
        lastname: "Silva",
        pro: true,
    });
    return response.send();
}
exports.createCustomer = createCustomer;
