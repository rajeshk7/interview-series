import RoomVisitor from "./RoomVisitor";

interface RootElement {
    accept(visitor: RoomVisitor): void;
}

export default RootElement;