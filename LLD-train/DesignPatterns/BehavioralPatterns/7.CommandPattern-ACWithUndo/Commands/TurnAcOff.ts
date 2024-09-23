import ICommand from '../Interface/ICommand';
import AirConditioner from '../Receiver';

class TurnAcOff implements ICommand {
    airConditioner: AirConditioner;

    constructor(airConditioner: AirConditioner) {
        this.airConditioner = airConditioner;
    }

    execute() {
        this.airConditioner.turnOff();
    }

    undo() {
        this.airConditioner.turnOn();
    }
}

export default TurnAcOff;