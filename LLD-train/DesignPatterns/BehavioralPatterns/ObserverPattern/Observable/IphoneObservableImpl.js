"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var IphoneObservableImpl = /** @class */ (function () {
    function IphoneObservableImpl() {
        this.stockCount = 0;
        this.observers = [];
    }
    IphoneObservableImpl.prototype.add = function (observer) {
        this.observers.push(observer);
    };
    IphoneObservableImpl.prototype.remove = function (observer) {
        this.observers = this.observers.filter(function (obs) { return obs !== observer; });
    };
    IphoneObservableImpl.prototype.notifySubscribers = function () {
        this.observers.forEach(function (observer) { return observer.update(); });
    };
    IphoneObservableImpl.prototype.setStockCount = function (stockCount) {
        this.stockCount = stockCount;
        this.notifySubscribers();
    };
    IphoneObservableImpl.prototype.getStockCount = function () {
        return this.stockCount;
    };
    return IphoneObservableImpl;
}());
exports.default = IphoneObservableImpl;
