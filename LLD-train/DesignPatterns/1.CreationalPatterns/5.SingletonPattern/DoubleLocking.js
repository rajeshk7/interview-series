var DoubleLocking = /** @class */ (function () {
    function DoubleLocking() {
    }
    DoubleLocking.getInstance = function () {
        if (this.instance === null) {
            console.log("Double Locking Singleton created");
            // We cannot add synchronized keyword in typescript
            this.instance = new DoubleLocking();
        }
        console.log("Double Locking Singleton already created");
        return this.instance;
    };
    return DoubleLocking;
}());
var doubleLocking_1 = DoubleLocking.getInstance();
var doubleLocking_2 = DoubleLocking.getInstance();
