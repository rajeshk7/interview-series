"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DatabaseImpl = /** @class */ (function () {
    function DatabaseImpl() {
    }
    DatabaseImpl.prototype.getEntry = function (clientId, object) {
        console.log("Entry for client id ".concat(clientId, " from database"));
    };
    DatabaseImpl.prototype.createEntry = function (clientId, object) {
        console.log("Entry for client id ".concat(clientId, " created in database"));
    };
    DatabaseImpl.prototype.deleteEntry = function (clientId, objectId) {
        console.log("Entry for client id ".concat(clientId, " deleted from database"));
    };
    return DatabaseImpl;
}());
exports.default = DatabaseImpl;
