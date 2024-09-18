var DBConnectionEager = /** @class */ (function () {
    function DBConnectionEager() {
        console.log("DB Connection created");
    }
    DBConnectionEager.getInstance = function () {
        return DBConnectionEager.instance;
    };
    DBConnectionEager.instance = new DBConnectionEager();
    return DBConnectionEager;
}());
var dbConnectionEager_1 = DBConnectionEager.getInstance();
var dbConnectionEager_2 = DBConnectionEager.getInstance();
