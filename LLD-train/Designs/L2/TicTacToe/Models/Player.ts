import PlayingPiece from "./PlayingPiece";

class Player {
    name: string;
    piece: PlayingPiece

    constructor(name: string, piece: PlayingPiece) {
        this.name = name
        this.piece = piece
    }

    getName() {
        return this.name
    }

    getPiece() {
        return this.piece
    }

    setName(name: string) {
        this.name = name
    }

    setPiece(piece: PlayingPiece) {
        this.piece = piece
    }
}

export default Player;