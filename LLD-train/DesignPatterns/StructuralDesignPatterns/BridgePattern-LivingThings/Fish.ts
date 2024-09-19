import Livingthings from "./LivingThings";
import BreatheImplementor from "./BreatheImplementor";

class Fish extends Livingthings {
    constructor(breatheImplementor: BreatheImplementor) {
        super(breatheImplementor);
    }

    breatheProcess() {
        console.log("Fish");
        this.breatheImplementor.breathe();
    }
}

export default Fish;