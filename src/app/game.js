import { Player } from "./player";

class Game {
    constructor() {
        this.player;
        this.computer;
    }

    initPlayers() {
        this.player = new Player('Player');
        this.computer = new Player('Computer');
    }

    initPlayerTurn() {
        this.player.turn = true;
    }

    // Will change this later...
    initRandomShips() { 
        this.player.gameboard.placeShip(...this.player.gameboard.getRandomShipCoordinates(5));
        this.player.gameboard.placeShip(...this.player.gameboard.getRandomShipCoordinates(4));
        this.player.gameboard.placeShip(...this.player.gameboard.getRandomShipCoordinates(3));
        this.player.gameboard.placeShip(...this.player.gameboard.getRandomShipCoordinates(3));
        this.player.gameboard.placeShip(...this.player.gameboard.getRandomShipCoordinates(2));
        this.player.gameboard.placeShip(...this.player.gameboard.getRandomShipCoordinates(2));
       
        this.computer.gameboard.placeShip(...this.computer.gameboard.getRandomShipCoordinates(5));
        this.computer.gameboard.placeShip(...this.computer.gameboard.getRandomShipCoordinates(4));
        this.computer.gameboard.placeShip(...this.computer.gameboard.getRandomShipCoordinates(3));
        this.computer.gameboard.placeShip(...this.computer.gameboard.getRandomShipCoordinates(3));
        this.computer.gameboard.placeShip(...this.computer.gameboard.getRandomShipCoordinates(2));
        this.computer.gameboard.placeShip(...this.computer.gameboard.getRandomShipCoordinates(2));
    }

    start() {
        this.initPlayers();
        this.initRandomShips();
        this.initPlayerTurn();
    }

    // game "loop"
    playRound(coordinates) {
        if (this.player.turn) {
            this.playerMove(coordinates);
        } else {
            throw new Error('Not your turn yet!');
        }

        this.switchTurns();

        // setTimeout(() => {
            this.computerMove();
        // }, 1000);
        
        this.switchTurns();

        if (this.hasEnded()) {
            console.log(this.gameOver());
        }
    }

    isAHit(coordinates, gameboard) {
        const [x, y] = coordinates;
        const node = gameboard.graph[x][y];
        return node.hasShip && node.isShot;
    }

    playerMove(coordinates) {
        this.player.attack(coordinates, this.computer.gameboard);
        // console.log(coordinates);
    }

    computerMove(coordinates = this.player.gameboard.getRandomCoordinates()) {
        this.computer.attack(coordinates, this.player.gameboard);
        console.log(coordinates);
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

    gameOver() {
        let gameOverText = '';
        if (this.getWinnerName() === 'Computer') {
            gameOverText = 'Better luck next time. Your enemy wins this game.';
        } else {
            gameOverText = 'Great work captain: you won the game!';
        }
        return gameOverText;
    }
}

export { Game };