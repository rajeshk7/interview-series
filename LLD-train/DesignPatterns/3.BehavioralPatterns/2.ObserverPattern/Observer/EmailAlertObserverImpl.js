"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var EmailAlertObserverImpl = /** @class */ (function () {
    function EmailAlertObserverImpl(email, observable) {
        this.email = email;
        this.observable = observable;
    }
    EmailAlertObserverImpl.prototype.update = function () {
        console.log("EmailAlertObserverImpl: ", this.email, " - Notification received: ", this.observable.getStockCount());
    };
    EmailAlertObserverImpl.prototype.sendEmail = function () {
        console.log("Email sent to: ", this.email);
    };
    return EmailAlertObserverImpl;
}());
exports.default = EmailAlertObserverImpl;
