import { Gameboard } from "./gameboard";

class Player {
    constructor() {
        this.turn = false;
        this.gameboard = new Gameboard();
    }

    // maybe...
    attack(coordinates, gameboard) {
        gameboard.receiveAttack(coordinates);
    }
}

export { Player };