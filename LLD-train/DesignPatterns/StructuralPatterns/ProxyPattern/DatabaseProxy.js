"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DatabaseImpl_1 = require("./DatabaseImpl");
var DatabaseProxy = /** @class */ (function () {
    function DatabaseProxy() {
        this.dbImpl = new DatabaseImpl_1.default();
    }
    DatabaseProxy.prototype.getEntry = function (clientId, object) {
        if (clientId === 'admin')
            this.dbImpl.getEntry(clientId, object);
        else
            console.log('Access denied');
    };
    DatabaseProxy.prototype.createEntry = function (clientId, object) {
        if (clientId === 'admin')
            this.dbImpl.createEntry(clientId, object);
        else
            console.log('Access denied');
    };
    DatabaseProxy.prototype.deleteEntry = function (clientId, objectId) {
        if (clientId === 'admin')
            this.dbImpl.deleteEntry(clientId, objectId);
        else
            console.log('Access denied');
    };
    return DatabaseProxy;
}());
exports.default = DatabaseProxy;
