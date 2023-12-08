import { Player } from "./player";

export class Game {
    constructor() {
        this.player = new Player('Player');
        this.computer = new Player('Computer');
    }

    start() {
        const computerGameboard = this.computer.gameboard;
        computerGameboard.shipLengths.forEach(length => {
            computerGameboard.placeShip(computerGameboard.getRandomShipCoordinates(length));
        });
    }

    playRound([x, y]) {
        if (!this.computer.gameboard.alreadyPlayed([x, y])) {  
            this._playerMove([x, y]);
            this._computerMove();    
            if (this.hasEnded()) {
                console.log(this.getGameResult());
            }
        }
    }

    hasEnded() {
        return this.player.gameboard.allShipsSunk() || this.computer.gameboard.allShipsSunk();
    }

    getGameResult() {
        return this._getWinnerName() === 'Computer' ?
        'Better luck next time. Your enemy wins this game.' :
        'Great work captain: you won the game!';
    }

    _getWinnerName() {
        return this.player.gameboard.allShipsSunk() ? this.computer.name : this.player.name;
    }

    _playerMove([x, y]) {
        this.player.attack([x, y], this.computer.gameboard);
    }

    _computerMove([x, y] = this.player.gameboard.getRandomCoordinates()) {
        this.computer.attack([x, y], this.player.gameboard);
    }
}