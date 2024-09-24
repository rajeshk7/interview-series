class SynchronisedMethodSingleton {
  private static instance: SynchronisedMethodSingleton;

  private constructor() {}

  // We cannot add synchronized keyword in typescript
  public static getInstance(): SynchronisedMethodSingleton {
    if (!SynchronisedMethodSingleton.instance) {
        console.log("Synchronised Method Singleton created");
        SynchronisedMethodSingleton.instance = new SynchronisedMethodSingleton();
    }
    return SynchronisedMethodSingleton.instance;
  }
}

const synchronisedMethodSingleton_1 = SynchronisedMethodSingleton.getInstance();
const synchronisedMethodSingleton_2 = SynchronisedMethodSingleton.getInstance();