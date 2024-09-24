import SingleRoom from "../Rooms/SingleRoom";
import DeluxeRoom from "../Rooms/DeluxeRoom";
import DoubleRoom from "../Rooms/DoubleRoom";

interface RoomVisitor {
    visit(singleRoom: SingleRoom): void;
    visit(deluxeRoom: DeluxeRoom): void;
    visit(doubleRoom: DoubleRoom): void;
}

export default RoomVisitor;