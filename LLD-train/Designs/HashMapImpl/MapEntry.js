"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MapEntry = /** @class */ (function () {
    function MapEntry(key, value, next) {
        this.key = key;
        this.value = value;
        this.next = next;
    }
    MapEntry.prototype.getKey = function () {
        return this.key;
    };
    MapEntry.prototype.getValue = function () {
        return this.value;
    };
    MapEntry.prototype.setValue = function (value) {
        this.value = value;
    };
    MapEntry.prototype.getNext = function () {
        return this.next;
    };
    return MapEntry;
}());
exports.default = MapEntry;
