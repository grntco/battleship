import { Player } from "./player";
import { Gameboard } from "./gameboard";
// import { Ship } from "./ship";

class Game {
    constructor() {
        this.player = new Player('Grant');
        this.playerGameboard = new Gameboard();
        this.computer = new Player('Computer');
        this.computerGameboard = new Gameboard();
    }

    // Will change this later...
    createAllShips() { 
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
}

export { Game };