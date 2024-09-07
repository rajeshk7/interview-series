import BreatheImplementor from "./BreatheImplementor";
import Color from '../ConsoleColors';

class TreeBreatheImplementor implements BreatheImplementor {
    breathe() {
        console.log(Color.fgBrightCyan, "Tree Breathe", Color.reset);
    }
}

export default TreeBreatheImplementor;