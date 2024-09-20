var DBConnectionLazy = /** @class */ (function () {
    function DBConnectionLazy() {
        console.log("DB Connection created");
    }
    DBConnectionLazy.getInstance = function () {
        if (!DBConnectionLazy.instance) {
            DBConnectionLazy.instance = new DBConnectionLazy();
        }
        return DBConnectionLazy.instance;
    };
    return DBConnectionLazy;
}());
var dbConnectionLazy_1 = DBConnectionLazy.getInstance();
var dbConnectionLazy_2 = DBConnectionLazy.getInstance();
console.log(dbConnectionLazy_1);
console.log(dbConnectionLazy_2);
