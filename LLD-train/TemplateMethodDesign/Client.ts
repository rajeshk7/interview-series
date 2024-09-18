import PayToMerchant from "./PayToMerchant";
import PayToFriend from "./PayToFriend";

const paymentFlow = new PayToFriend();
paymentFlow.sendMoney();

console.log("\n");

const paymentFlow2 = new PayToMerchant();
paymentFlow2.sendMoney();