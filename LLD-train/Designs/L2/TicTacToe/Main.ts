import TicTacToeGame from "./TicTacToeGame";

class Main {
    game: TicTacToeGame | null = null;

    async playGame() {
        this.game = new TicTacToeGame(null as any, null as any);
        this.game.initializeGame();
        await this.game.playGame()
    }
}

console.log("Starting game");
const main = new Main();
main.playGame();