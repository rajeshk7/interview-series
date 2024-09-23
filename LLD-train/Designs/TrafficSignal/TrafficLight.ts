import Singal from "./Signal";
import Color from '../../ConsoleColors';

class TrafficLight {
    private id: string;
    private currentSignal: Singal;
    private redDuration: number;
    private yellowDuration: number;
    private greenDuration: number;

    constructor(id: string, redDuration: number, yellowDuration: number, greenDuration: number) {
        this.id = id;
        this.redDuration = redDuration;
        this.yellowDuration = yellowDuration;
        this.greenDuration = greenDuration;
        this.currentSignal = Singal.RED;
    }

    changeSignal(signal: Singal) {
        this.currentSignal = signal;

        switch (signal) {
            case Singal.RED:
                console.log(`${Color.fgRed}Traffic Light ${this.id} is RED${Color.reset}`);
                break;
            case Singal.YELLOW:
                console.log(`${Color.fgYellow}Traffic Light ${this.id} is YELLOW${Color.reset}`);
                break;
            case Singal.GREEN:
                console.log(`${Color.fgGreen}Traffic Light ${this.id} is GREEN${Color.reset}`);
                break;
        }

        this.notifyObservers();
    }

    getCurrentSignal() {
        return this.currentSignal;
    }

    getRedDuration() {
        return this.redDuration;
    }

    getYellowDuration() {
        return this.yellowDuration;
    }

    getGreenDuration() {
        return this.greenDuration;
    }

    setRedDuration(redDuration: number) {
        this.redDuration = redDuration;
    }

    setYellowDuration(yellowDuration: number) {
        this.yellowDuration = yellowDuration;
    }

    setGreenDuration(greenDuration: number) {
        this.greenDuration = greenDuration;
    }

    notifyObservers() {
        console.log(`Traffic Light ${this.id} is ${this.currentSignal}`);
    }

}

export default TrafficLight;