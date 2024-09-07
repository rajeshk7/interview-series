import ICommand from '../Interface/ICommand';
import AirConditioner from '../Receiver';

class TurnAcOn implements ICommand {
    airConditioner: AirConditioner;

    constructor(airConditioner: AirConditioner) {
        this.airConditioner = airConditioner;
    }

    execute() {
        this.airConditioner.turnOn();
    }

    undo() {
        this.airConditioner.turnOff();
    }
}

export default TurnAcOn;