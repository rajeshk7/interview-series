import ICommand from "../Interface/ICommand";
import AirConditioner from "../Receiver";

class DecreaseTemperature implements ICommand {
    private ac: AirConditioner;

    constructor(ac: AirConditioner) {
        this.ac = ac;
    }

    execute(): void {
        this.ac.decreaseTemperature();
    }

    undo(): void {
        this.ac.increaseTemperature();
    }
}

export default DecreaseTemperature;