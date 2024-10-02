"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Topic = /** @class */ (function () {
    function Topic(name) {
        this.name = name;
        this.subscribers = new Set();
    }
    Topic.prototype.getName = function () {
        return this.name;
    };
    Topic.prototype.addSubscriber = function (subscriber) {
        this.subscribers.add(subscriber);
    };
    Topic.prototype.removeSubscriber = function (subscriber) {
        this.subscribers.delete(subscriber);
    };
    Topic.prototype.publish = function (message) {
        this.subscribers.forEach(function (subscriber) { return subscriber.onMessage(message); });
    };
    return Topic;
}());
exports.default = Topic;
