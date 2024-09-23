import RoomVisitor from "./Interface/RoomVisitor";
import DeluxeRoom from "./Rooms/DeluxeRoom";
import DoubleRoom from "./Rooms/DoubleRoom";
import SingleRoom from "./Rooms/SingleRoom";

class RoomMaintenenceVisitor implements RoomVisitor {
    visit(room: SingleRoom | DeluxeRoom | DoubleRoom) {
        if (room instanceof SingleRoom) {
            console.log("Single room is maintained");
        }
        else if(room instanceof DeluxeRoom) {
            console.log("Deluxe room is maintained");
        }
        else if(room instanceof DoubleRoom) {
            console.log("Double room is maintained");
        }
    }
}

export default RoomMaintenenceVisitor;