import RootElement from "../Interface/RootElement";
import RoomVisitor from "../Interface/RoomVisitor";

class SingleRoom implements RootElement {
    roomPrice: number;

    accept(visitor: RoomVisitor): void {
        visitor.visit(this);
    }
}

export default SingleRoom;