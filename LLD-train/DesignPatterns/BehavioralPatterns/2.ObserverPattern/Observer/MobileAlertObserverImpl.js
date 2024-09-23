"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MobileAlertObserverImpl = /** @class */ (function () {
    function MobileAlertObserverImpl(mobile, observable) {
        this.mobile = mobile;
        this.observable = observable;
    }
    MobileAlertObserverImpl.prototype.update = function () {
        console.log("MobileAlertObserverImpl: ", this.mobile, " - Notification received: ", this.observable.getStockCount());
    };
    MobileAlertObserverImpl.prototype.sendSMS = function () {
        console.log("SMS sent to: ", this.mobile);
    };
    return MobileAlertObserverImpl;
}());
exports.default = MobileAlertObserverImpl;
