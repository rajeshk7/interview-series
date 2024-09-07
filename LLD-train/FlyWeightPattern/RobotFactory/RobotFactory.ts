import Robot from "./Robot";
import DataStore from "./DataStore";
import RoboticDog from "./RoboticDog";
import RoboticHuman from "./RoboticHuman";
import Color from '../../ConsoleColors';

class RobotFactory {
    private static robotFactory = new Map<string, Robot>();

    static getRobot(type: string): Robot {
        if(!this.robotFactory.has(type)) {
            console.log(Color.fgBrightMagenta + `Creating a new ${type} robot` + Color.reset);
            if(type === "RoboticDog") {
                const robot = new RoboticDog(type, new DataStore());
                this.robotFactory.set(type, robot);
            }
            if(type === "RoboticHuman") {
                const robot = new RoboticHuman(type, new DataStore());
                this.robotFactory.set(type, robot);
            }
        }
        else
            console.log(Color.fgBrightYellow + `Using existing ${type} robot` + Color.reset);

        return this.robotFactory.get(type) as Robot;
    }
}

export default RobotFactory;