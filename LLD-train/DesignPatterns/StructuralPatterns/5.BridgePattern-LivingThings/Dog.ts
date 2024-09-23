import Livingthings from "./LivingThings";
import BreatheImplementor from "./BreatheImplementor";

class Dog extends Livingthings {
    constructor(breatheImplementor: BreatheImplementor) {
        super(breatheImplementor);
    }

    breatheProcess() {
        console.log("Dog");
        this.breatheImplementor.breathe();
    }
}

export default Dog;