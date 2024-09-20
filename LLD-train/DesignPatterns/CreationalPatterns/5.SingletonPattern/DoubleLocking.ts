class DoubleLocking {
  private static instance: DoubleLocking;

  private constructor() {}

  public static getInstance() {
    if (this.instance === null) {
        console.log("Double Locking Singleton created");
        // We cannot add synchronized keyword in typescript
        this.instance = new DoubleLocking();
    }
    console.log("Double Locking Singleton already created");
    return this.instance;
  }
}

const doubleLocking_1 = DoubleLocking.getInstance();
const doubleLocking_2 = DoubleLocking.getInstance();