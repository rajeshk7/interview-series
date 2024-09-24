var SynchronisedMethodSingleton = /** @class */ (function () {
    function SynchronisedMethodSingleton() {
    }
    // We cannot add synchronized keyword in typescript
    SynchronisedMethodSingleton.getInstance = function () {
        if (!SynchronisedMethodSingleton.instance) {
            console.log("Synchronised Method Singleton created");
            SynchronisedMethodSingleton.instance = new SynchronisedMethodSingleton();
        }
        return SynchronisedMethodSingleton.instance;
    };
    return SynchronisedMethodSingleton;
}());
var synchronisedMethodSingleton_1 = SynchronisedMethodSingleton.getInstance();
var synchronisedMethodSingleton_2 = SynchronisedMethodSingleton.getInstance();
