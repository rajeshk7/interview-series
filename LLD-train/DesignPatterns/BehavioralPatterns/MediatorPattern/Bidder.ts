import Colleague from "./Colleague";
import Color from "../ConsoleColors";
import AuctionMediator from "./AuctionMediator";

class Bidder implements Colleague {
    private name: string;
    private mediator : AuctionMediator

    constructor(name: string, mediator: AuctionMediator) {
        this.name = name;
        this.mediator = mediator;
    }

    placeBid(bid: number): void {
        console.log(`\n` + Color.fgBrightMagenta + `${this.name} placed a bid of ${bid}` + Color.reset);
        this.mediator.placeBid(bid, this);
    }

    receiveBid(bid: number): void {
        console.log(Color.fgBrightCyan + ` => ${this.name} received a bid of ${bid}` + Color.reset);
    }

    getName(): string {
        return this.name;
    }
}

export default Bidder;