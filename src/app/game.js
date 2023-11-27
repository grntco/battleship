import { Player } from "./player";
import { Gameboard } from "./gameboard";

class Game {
    constructor() {
        this.player = new Player('Grant');
        this.playerGameboard = new Gameboard();
        this.computer = new Player('Computer');
        this.computerGameboard = new Gameboard();
    }

    // Will change this later...
    createAllShips() { 
        // this.playerGameboard.placeShip([0, 1], [0, 2], [0, 3], [0, 4]);
        this.playerGameboard.placeShip(...this.playerGameboard.getRandomShipCoordinates(5));
        this.playerGameboard.placeShip(...this.playerGameboard.getRandomShipCoordinates(4));
        this.playerGameboard.placeShip(...this.playerGameboard.getRandomShipCoordinates(3));
        this.playerGameboard.placeShip(...this.playerGameboard.getRandomShipCoordinates(3));
        this.playerGameboard.placeShip(...this.playerGameboard.getRandomShipCoordinates(2));
        this.playerGameboard.placeShip(...this.playerGameboard.getRandomShipCoordinates(2));
       
        this.computerGameboard.placeShip(...this.computerGameboard.getRandomShipCoordinates(5));
        this.computerGameboard.placeShip(...this.computerGameboard.getRandomShipCoordinates(4));
        this.computerGameboard.placeShip(...this.computerGameboard.getRandomShipCoordinates(3));
        this.computerGameboard.placeShip(...this.computerGameboard.getRandomShipCoordinates(3));
        this.computerGameboard.placeShip(...this.computerGameboard.getRandomShipCoordinates(2));
        this.computerGameboard.placeShip(...this.computerGameboard.getRandomShipCoordinates(2));
    }

    // start() {
    //     let currentPlayer = this.player;
    //     currentPlayer.turn = true;

    //     while () {
    //         if (currentPlayer.turn) { // and the enemy board is clicked?
    //             // or enable the enemy board to be clicked
    //             // the player can make a hit
    //         }
    //     }

    // }

    hasEnded() {
        return this.playerGameboard.allShipsSunk() || this.computerGameboard.allShipsSunk();
    }
}

export { Game };