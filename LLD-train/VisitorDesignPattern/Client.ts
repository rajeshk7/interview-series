import RootElement from "./Interface/RootElement";
import SingleRoom from "./Rooms/SingleRoom";
import DoubleRoom from "./Rooms/DoubleRoom";
import DeluxeRoom from "./Rooms/DeluxeRoom";
import RoomMaintenenceVisitor from "./RoomMaintenenceVisitor";
import RoomPricingVisitor from "./RoomPricingVisitor";

const singleRoom = new SingleRoom();
const doubleRoom = new DoubleRoom();
const deluxeRoom = new DeluxeRoom();

const pricingRoomVisitor = new RoomPricingVisitor();
singleRoom.accept(pricingRoomVisitor);
doubleRoom.accept(pricingRoomVisitor);
deluxeRoom.accept(pricingRoomVisitor);

console.log(singleRoom.roomPrice);
console.log(doubleRoom.roomPrice);
console.log(deluxeRoom.roomPrice);

const roomMaintenenceVisitor = new RoomMaintenenceVisitor();
singleRoom.accept(roomMaintenenceVisitor);
doubleRoom.accept(roomMaintenenceVisitor);
deluxeRoom.accept(roomMaintenenceVisitor);
