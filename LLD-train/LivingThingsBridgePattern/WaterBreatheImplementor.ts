import BreatheImplementor from "./BreatheImplementor";
import Color from '../ConsoleColors';

class WaterBreatheImplementor implements BreatheImplementor {
    breathe() {
        console.log(Color.fgBrightMagenta ,"Water Breathe", Color.reset);
    }
}

export default WaterBreatheImplementor;