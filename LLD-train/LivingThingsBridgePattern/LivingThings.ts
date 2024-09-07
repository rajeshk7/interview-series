import BreatheImplementor from "./BreatheImplementor";

abstract class Livingthings {
    breatheImplementor: BreatheImplementor;

    constructor(breatheImplementor: BreatheImplementor) {
        this.breatheImplementor = breatheImplementor;
    }

    abstract breatheProcess(): void;
}

export default Livingthings;