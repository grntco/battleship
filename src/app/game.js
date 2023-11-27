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
        this.loopThroughTurns();
    }

    loopThroughTurns() {
        while (!this.hasEnded()) {
            if (this.computer.turn) {
                this.computerMove();
            } else {
                this.playerMove();
            }
            this.switchTurns();
        }
        this.gameOver();
    }

    playerMove() {
        // this needs help
        // how to get coordinates from gridItem click?
        this.player.attack(this.computer.gameboard.getRandomCoordinates(), this.computer.gameboard);
    }

    computerMove() {
        // setTimeout(() => {
            this.computer.attack(this.player.gameboard.getRandomCoordinates(), this.player.gameboard);
        // }, 1000);
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
        console.log(`Game end! The winner is ${this.getWinnerName()}`);
    }
}

export { Game };