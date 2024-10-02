import Message from "./Message";
import Subscriber from "./Subscriber";
import ConsoleColors from "../../../ConsoleColors";

class PrintSubscriber implements Subscriber {
    private name: string;

    constructor(name: string) {
        this.name = name;
    }

    onMessage(message: Message): void {
        console.log(ConsoleColors.fgBrightMagenta + `Message received by ${this.name}: ${message.getContent()}`);
        console.log(ConsoleColors.reset);
    }
}

export default PrintSubscriber;