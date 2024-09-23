import Board from './Models/Board';
import PlayingPiece from './Models/PlayingPiece';
import PlayingPieceO from './Models/PlayingPieceO';
import PlayingPieceX from './Models/PlayingPieceX';
import Player from './Models/Player';
import * as readline from 'readline';

class TicTacToeGame {
    gameBoard: Board;
    playingQueue: Array<Player>;

    constructor(gameBoard: Board, playingQueue: Array<Player>) {
        this.gameBoard = gameBoard
        this.playingQueue = playingQueue
    }

    public initializeGame = () => {
        this.playingQueue = new Array()

        const crossPiece: PlayingPiece = new PlayingPieceX()
        const player1: Player = new Player("Player 1", crossPiece)

        const circlePiece: PlayingPiece = new PlayingPieceO()
        const player2: Player = new Player("Player 2", circlePiece)

        this.playingQueue.push(player1)
        this.playingQueue.push(player2)

        this.gameBoard = new Board(3)
    }

    private getUserInput = (query: string): Promise<string> => {
        const rl = readline.createInterface({
            input: process.stdin,
            output: process.stdout
        });

        return new Promise((resolve) => rl.question(query, (ans: string) => {
            rl.close();
            resolve(ans);
        }));
    }

    public playGame = async () => {
        let noWinner: Boolean = true
        try {
            while(noWinner) {
                let currentPlayer: Player = this.playingQueue.shift() as Player
                this.gameBoard.printBoard()
                if(!this.gameBoard.isThereAFreeCell()) {
                    console.log("No winner")
                    break
                }

                console.log(currentPlayer.name + " plays")
                const move = await this.getUserInput(`Enter your move (row,col): `);
                const [row, col] = move.split(',').map(Number);
                console.log(`You entered row: ${row} and col: ${col}`)

                if(!this.gameBoard.addPiece(row, col, currentPlayer.piece))  {
                    console.log("Invalid move")
                    this.playingQueue.unshift(currentPlayer)
                    continue
                }

                this.playingQueue.push(currentPlayer)
                if(this.isThereAWinner(row, col, currentPlayer.piece)) {
                    console.log(currentPlayer.name + " wins")
                    noWinner = false
                    this.gameBoard.printBoard()
                    return currentPlayer.name
                }
            }
        } catch(e) {
            console.log(e)
        }
    }

    public isThereAWinner = (row: number, col: number, piece: PlayingPiece): Boolean => {
        let rowMatch = true, colMatch = true, diagMatch = true, antiDiagMatch = true;
    
        for (let i = 0; i < this.gameBoard.size; i++) 
            if (this.gameBoard.board[row][i] != piece) {
                rowMatch = false;
                break;
            }
    
        for (let i = 0; i < this.gameBoard.size; i++) 
            if (this.gameBoard.board[i][col] != piece) {
                colMatch = false;
                break;
            }
    
        if (row == col) {
            for (let i = 0; i < this.gameBoard.size; i++) {
                if (this.gameBoard.board[i][i] != piece) {
                    diagMatch = false;
                    break;
                }
            }
        } else 
            diagMatch = false;
    
        if (row + col == this.gameBoard.size - 1) {
            for (let i = 0; i < this.gameBoard.size; i++) {
                if (this.gameBoard.board[i][this.gameBoard.size - i - 1] != piece) {
                    antiDiagMatch = false;
                    break;
                }
            }
        } else 
            antiDiagMatch = false;
    
        return rowMatch || colMatch || diagMatch || antiDiagMatch;
    }
}

export default TicTacToeGame;