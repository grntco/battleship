import { Player } from "./player";
import { Gameboard } from "./gameboard";
// import { Ship } from "./ship";

class Game {
    constructor() {
        this.humanPlayer = new Player('Grant');
        this.computer = new Player('Computer');
        this.humanGameboard = new Gameboard();
        this.computerGameboard = new Gameboard();
    }

    // Will change this later...
    createAllShips() { 
        this.humanGameboard.placeShip([4, 5], [4, 6]);
        this.humanGameboard.placeShip([7, 2], [7, 1]);
        this.humanGameboard.placeShip([0, 0], [0, 1], [0, 2]);
        this.humanGameboard.placeShip([5, 0], [4, 0], [3, 0]);
        this.humanGameboard.placeShip([9, 9], [9, 8], [9, 7], [9, 6]);
    
        this.computerGameboard.placeShip([4, 5], [4, 6]);
        this.computerGameboard.placeShip([7, 2], [7, 1]);
        this.computerGameboard.placeShip([0, 0], [0, 1], [0, 2]);
        this.computerGameboard.placeShip([5, 0], [4, 0], [3, 0]);
        this.computerGameboard.placeShip([9, 9], [9, 8], [9, 7], [9, 6]);
    }
}

export { Game };