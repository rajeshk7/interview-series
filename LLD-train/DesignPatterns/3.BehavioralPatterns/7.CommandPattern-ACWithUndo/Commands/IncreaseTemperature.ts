import ICommand from "../Interface/ICommand";
import AirConditioner from "../Receiver";

class IncreaseTemperature implements ICommand {
    private ac: AirConditioner;

    constructor(ac: AirConditioner) {
        this.ac = ac;
    }

    execute(): void {
        this.ac.increaseTemperature();
    }

    undo(): void {
        this.ac.decreaseTemperature();
    }

}

export default IncreaseTemperature;