import AuctionMediator from "./AuctionMediator";
import Colleague from "./Colleague";

class Auction implements AuctionMediator {
    bidders: Colleague[] = [];

    addColleague(colleague: Colleague): void {
        console.log(`Adding ${colleague.getName()} to the auction`);
        this.bidders.push(colleague);
    }

    placeBid(bid: number, bidder: Colleague, ): void {
        this.bidders.forEach(b => {
            if (b !== bidder) {
                b.receiveBid(bid);
            }
        });
    }
}

export default Auction;