import { Player } from "./player";

export class Game {
    constructor() {
        this.player = new Player('Player');
        this.computer = new Player('Computer');
    }

    initRandomShips(gameboard) {
        gameboard.shipLengths.forEach(length => {
            gameboard.placeShip(gameboard.getRandomShipCoordinates(length));
        });
    }

    start() {
        this.initRandomShips(this.computer.gameboard);
    }

    playRound([x, y]) {
        if (!this.computer.gameboard.alreadyPlayed([x, y])) {  
            this.playerMove([x, y]);
            this.computerMove();    
            if (this.hasEnded()) {
                console.log(this.getGameResult());
            }
        }
    }

    playerMove([x, y]) {
        this.player.attack([x, y], this.computer.gameboard);
    }

    computerMove([x, y] = this.player.gameboard.getRandomCoordinates()) {
        this.computer.attack([x, y], this.player.gameboard);
    }

    hasEnded() {
        return this.player.gameboard.allShipsSunk() || this.computer.gameboard.allShipsSunk();
    }

    getWinnerName() {
        return this.player.gameboard.allShipsSunk() ? this.computer.name : this.player.name;
    }

    getGameResult() {
        return this.getWinnerName() === 'Computer' ?
        'Better luck next time. Your enemy wins this game.' :
        'Great work captain: you won the game!';
    }
}