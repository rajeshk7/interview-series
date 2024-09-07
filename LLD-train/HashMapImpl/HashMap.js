"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MapEntry_1 = require("./MapEntry");
var ts_md5_1 = require("ts-md5");
var HashMap = /** @class */ (function () {
    function HashMap(size) {
        this.DEFAULT_SIZE = 16;
        this.MAX_CAPACITY = 1 << 30;
        this.hashTable = [];
        if (!size)
            this.hashTable = new Array(this.DEFAULT_SIZE);
        else {
            var nearsetPowerOfTwo = this.tableSizeFor(size);
            this.hashTable = new Array(size);
        }
    }
    HashMap.prototype.tableSizeFor = function (capacity) {
        var n = capacity - 1;
        n |= n >> 1;
        n |= n >> 2;
        n |= n >> 4;
        n |= n >> 8;
        n |= n >> 16;
        return (n < 0) ? 1 : (n >= this.MAX_CAPACITY) ? this.MAX_CAPACITY : n + 1;
    };
    HashMap.prototype.put = function (key, value) {
        var index = Number(ts_md5_1.Md5.hashStr(JSON.stringify(value))) % this.hashTable.length;
        var entry = this.hashTable[index];
        if (!entry) {
            this.hashTable[index] = new MapEntry_1.default(key, value, null);
            return;
        }
        else {
            var prevNode = entry.getNext();
            while (entry) {
                if (entry.getKey() === key) {
                    entry.setValue(value);
                    return;
                }
                prevNode = entry;
                entry = entry.getNext();
            }
            if (prevNode)
                prevNode.next = new MapEntry_1.default(key, value, null);
        }
    };
    HashMap.prototype.get = function (key) {
        var index = Number(ts_md5_1.Md5.hashStr(JSON.stringify(key))) % this.hashTable.length;
        var entry = this.hashTable[index];
        while (entry) {
            if (entry.getKey() === key)
                return entry.getValue();
            entry = entry.getNext();
        }
        return null;
    };
    return HashMap;
}());
exports.default = HashMap;
