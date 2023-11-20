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
        this.playerGameboard.placeShip([4, 5], [3, 5]);
        this.playerGameboard.placeShip([7, 2], [7, 1]);
        this.playerGameboard.placeShip([0, 0], [0, 1], [0, 2]);
        this.playerGameboard.placeShip([5, 0], [4, 0], [3, 0]);
        this.playerGameboard.placeShip([9, 9], [9, 8], [9, 7], [9, 6]);
    
        this.computerGameboard.placeShip([4, 5], [4, 6]);
        this.computerGameboard.placeShip([7, 2], [7, 1]);
        this.computerGameboard.placeShip([0, 0], [0, 1], [0, 2]);
        this.computerGameboard.placeShip([5, 0], [4, 0], [3, 0]);
        this.computerGameboard.placeShip([5, 9], [6, 9], [7, 9], [8, 9]);
    }
}

export { Game };