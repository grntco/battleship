import { Player } from "./player";

class Game {
    constructor() {
        this.player;
        this.computer;
    }

    initPlayers() {
        this.player = new Player();
        this.computer = new Player();
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
        // this.initRandomShips();
        // let currentPlayer = this.player;
        // currentPlayer.turn = true;

        // while (!this.hasEnded()) {
        //     if (currentPlayer.turn) { 
        //         if (currentPlayer === this.computer) {
        //             setTimeout(() => {
        //                 this.playerGameboard.receiveAttack(this.playerGameboard.getRandomCoordinates());
        //             }, 1000);
        //             currentPlayer.turn = false;
        //             currentPlayer = this.player;
        //         } else {
        //             // and the enemy board is clicked?
        //             // or enable the enemy board to be clicked
        //             // the player can make a hit
        //         }
        //     }
        // }

    }

    hasEnded() {
        return this.player.gameboard.allShipsSunk() || this.computer.gameboard.allShipsSunk();
    }
}

export { Game };