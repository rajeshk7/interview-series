import type PieceType from '../Interface/PieceType'

class PlayingPiece {
    PieceTypeVar: PieceType

    constructor(piece: PieceType) {
        this.PieceTypeVar = piece
    }
}

export default PlayingPiece;