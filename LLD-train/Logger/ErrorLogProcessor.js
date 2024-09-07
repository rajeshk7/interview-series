"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var LogProcessor_1 = require("./LogProcessor");
var ErrorLogProcessor = /** @class */ (function (_super) {
    __extends(ErrorLogProcessor, _super);
    function ErrorLogProcessor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    ErrorLogProcessor.prototype.log = function (logType, message) {
        if (logType == LogProcessor_1.LogType.ERROR)
            console.log("Error: " + message);
        else
            _super.prototype.log.call(this, logType, message);
    };
    return ErrorLogProcessor;
}(LogProcessor_1.LogProcessor));
exports.default = ErrorLogProcessor;
