import BreatheImplementor from "./BreatheImplementor";
import Color from '../ConsoleColors';

class LandBreatheImplementor implements BreatheImplementor {
    breathe() {
        console.log(Color.fgBrightRed, "Land Breathe", Color.reset);
    }
}

export default LandBreatheImplementor;