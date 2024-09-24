import Color from '../../../ConsoleColors'

class AirConditioner {
    temperature: number;
    state: Boolean;

    constructor() {
        this.temperature = 25;
        this.state = false;
    }

    turnOn() {
        this.state = true;
        console.log(Color.fgBrightMagenta + "AC is ON" + Color.reset);
    }

    turnOff() {
        this.state = false;
        console.log(Color.fgBrightWhite + "AC is OFF" + Color.reset);
    }

    increaseTemperature() {
        this.temperature++;
        console.log(Color.fgCyan + "Temperature is now: " + this.temperature + Color.reset);
    }

    decreaseTemperature() {
        this.temperature--;
        console.log(Color.fgCyan + "Temperature is now: " + this.temperature + Color.reset);
    }
    
}

export default AirConditioner;