import Colleague from "./Colleague";

interface AuctionMediator {
    addColleague(colleague: Colleague): void;
    placeBid(bid: number, bidder: Colleague): void;
}

export default AuctionMediator;