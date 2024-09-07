import PlayingPiece from "./PlayingPiece";

class Board {
    size: number;
    board: PlayingPiece[][];

    constructor(size: number) {
        this.size = size
        this.board = new Array(size)
        for(let i = 0; i < size; i++) {
            this.board[i] = new Array(size)
        }
    }

    public addPiece = (row: number, col: number, piece: PlayingPiece) : Boolean => {
        if(this.board[row][col] != null)
            return false
        this.board[row][col] = piece
        return true
    }

    public isThereAFreeCell = () => {
        for(let i = 0; i < this.size; i++) {
            for(let j = 0; j < this.size; j++) {
                if(this.board[i][j] == null)
                    return true
            }
        }
        return false
    }

    public printBoard = () => {
        for(let i = 0; i < this.size; i++) {
            let row = ""
            for(let j = 0; j < this.size; j++) {
                if(this.board[i][j] == null)
                    row += " "
                else
                    row += this.board[i][j].PieceTypeVar
                if(j != this.size - 1)
                    row += "|"
            }
            console.log(row)
            if(i != this.size - 1)
                console.log(new Array(this.size * 2).join("-"));
        }
    }
}

export default Board;
