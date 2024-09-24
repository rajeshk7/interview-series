"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DBConnectionPoolManager_1 = require("./DBConnectionPoolManager");
var dbConnectionPoolManager = DBConnectionPoolManager_1.default.getInstance();
var connection1 = dbConnectionPoolManager.getConnection();
var connection2 = dbConnectionPoolManager.getConnection();
dbConnectionPoolManager.releaseConnection(connection1);
var connection3 = dbConnectionPoolManager.getConnection();
var connection4 = dbConnectionPoolManager.getConnection();
var connection5 = dbConnectionPoolManager.getConnection();
try {
    var connection6 = dbConnectionPoolManager.getConnection();
}
catch (e) {
    console.log(e.message);
}
dbConnectionPoolManager.releaseConnection(connection2);
dbConnectionPoolManager.releaseConnection(connection3);
dbConnectionPoolManager.releaseConnection(connection4);
dbConnectionPoolManager.releaseConnection(connection5);
