import Livingthings from "./LivingThings";
import BreatheImplementor from "./BreatheImplementor";

class Tree extends Livingthings {
    constructor(breatheImplementor: BreatheImplementor) {
        super(breatheImplementor);
    }

    breatheProcess() {
        console.log("Tree");
        this.breatheImplementor.breathe();
    }
}

export default Tree;