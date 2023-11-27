import { Gameboard } from "./gameboard";

class Player {
    constructor(name) {
        this.name = name;
        this.turn = false;
        this.gameboard = new Gameboard();
    }

    // maybe...
    attack(coordinates, gameboard) {
        gameboard.receiveAttack(coordinates);
    }
}

export { Player };