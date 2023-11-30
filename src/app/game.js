import { Player } from "./player";

class Game {
    constructor() {
        this.player = new Player('Player');
        this.computer = new Player('Computer');
    }

    initPlayerTurn() {
        this.player.turn = true;
    }

    // Will change this later...
    initRandomShips(gameboard) { 
        gameboard.placeShip(...gameboard.getRandomShipCoordinates(5));
        gameboard.placeShip(...gameboard.getRandomShipCoordinates(4));
        gameboard.placeShip(...gameboard.getRandomShipCoordinates(3));
        gameboard.placeShip(...gameboard.getRandomShipCoordinates(3));
        gameboard.placeShip(...gameboard.getRandomShipCoordinates(2));
        gameboard.placeShip(...gameboard.getRandomShipCoordinates(2));
    }

    start() {
        this.initRandomShips(this.player.gameboard);
        this.initRandomShips(this.computer.gameboard);
        this.initPlayerTurn();
    }

    playRound([x, y]) {
        if (!this.computer.gameboard.alreadyPlayed([x, y])) {  
            if (this.player.turn) {
                this.playerMove([x, y]);
            } else {
                throw new Error('Not your turn yet!');
            }
    
            this.switchTurns();
            this.computerMove();
            this.switchTurns();
    
            if (this.hasEnded()) {
                console.log(this.getGameResult());
            }
        }
    }

    isAHit([x, y], gameboard) {
        const node = gameboard.graph[x][y];
        return node.hasShip && node.isShot;
    }

    playerMove([x, y]) {
        this.player.attack([x, y], this.computer.gameboard);
    }

    computerMove([x, y] = this.player.gameboard.getRandomCoordinates()) {
        this.computer.attack([x, y], this.player.gameboard);
    }

    switchTurns() {
        if(this.player.turn) {
            this.player.turn = false;
            this.computer.turn = true;
        } else {
            this.player.turn = true;
            this.computer.turn = false;
        }
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

export { Game };