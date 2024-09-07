import Bidder from "./Bidder";
import Auction from "./Auction";

const auction = new Auction();

const bidder1 = new Bidder("Bidder1", auction);
const bidder2 = new Bidder("Bidder2", auction);
const bidder3 = new Bidder("Bidder3", auction);

auction.addColleague(bidder1);
auction.addColleague(bidder2);
auction.addColleague(bidder3);

bidder1.placeBid(100);
bidder2.placeBid(200);
bidder3.placeBid(300);

