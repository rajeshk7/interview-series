"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DBConnection_1 = require("./DBConnection");
var DBConnectionPoolManager = /** @class */ (function () {
    function DBConnectionPoolManager() {
        DBConnectionPoolManager.freeConnections = [];
        DBConnectionPoolManager.usedConnections = [];
        for (var i = 0; i < DBConnectionPoolManager.INITIAL_POOL_SIZE; i++) {
            DBConnectionPoolManager.freeConnections.push(new DBConnection_1.default());
        }
    }
    DBConnectionPoolManager.getInstance = function () {
        if (!DBConnectionPoolManager.instance) {
            console.log("\n" + "\u001B[31m" /* Color.fgRed */ + "Creating DBConnectionPoolManager instance" + "\u001B[0m" /* Color.reset */ + "\n");
            DBConnectionPoolManager.instance = new DBConnectionPoolManager();
        }
        return DBConnectionPoolManager.instance;
    };
    // In Java this method is synchronized to make it thread safe
    DBConnectionPoolManager.prototype.getConnection = function () {
        if (DBConnectionPoolManager.freeConnections.length === 0) {
            if (DBConnectionPoolManager.usedConnections.length < DBConnectionPoolManager.MAX_POOL_SIZE) {
                console.log("Creating new DB Connection");
                DBConnectionPoolManager.freeConnections.push(new DBConnection_1.default());
            }
            else {
                throw new Error("\n" + "\u001B[95m" /* Color.fgBrightMagenta */ + "Maximum pool size reached, no free connections available" + "\u001B[0m" /* Color.reset */ + "\n");
            }
        }
        var connection = DBConnectionPoolManager.freeConnections.pop();
        DBConnectionPoolManager.usedConnections.push(connection);
        console.log("\u001B[94m" /* Color.fgBrightBlue */ + "DB Connection acquired" + "\u001B[0m" /* Color.reset */);
        return connection;
    };
    DBConnectionPoolManager.prototype.releaseConnection = function (connection) {
        var index = DBConnectionPoolManager.usedConnections.indexOf(connection);
        if (index > -1) {
            console.log("\u001B[92m" /* Color.fgBrightGreen */ + "DB Connection released" + "\u001B[0m" /* Color.reset */);
            DBConnectionPoolManager.usedConnections.splice(index, 1);
            DBConnectionPoolManager.freeConnections.push(connection);
        }
    };
    DBConnectionPoolManager.INITIAL_POOL_SIZE = 2;
    DBConnectionPoolManager.MAX_POOL_SIZE = 4;
    return DBConnectionPoolManager;
}());
exports.default = DBConnectionPoolManager;
