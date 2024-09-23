import RoomVisitor from "./Interface/RoomVisitor";
import DeluxeRoom from "./Rooms/DeluxeRoom";
import DoubleRoom from "./Rooms/DoubleRoom";
import SingleRoom from "./Rooms/SingleRoom";

class RoomPricingVisitor implements RoomVisitor {
    visit(room: SingleRoom | DeluxeRoom | DoubleRoom) {
        if (room instanceof SingleRoom) {
            console.log("Single room price is 100");
            room.roomPrice = 100;
        } else if (room instanceof DeluxeRoom) {
            console.log("Deluxe room price is 200");
            room.roomPrice = 200;
        } else if (room instanceof DoubleRoom) {
            console.log("Double room price is 300");
            room.roomPrice = 300;
        }
    }
}

export default RoomPricingVisitor;