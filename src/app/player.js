import { Gameboard } from "./gameboard";

class Player {
    constructor(name) {
        this.name = name;
        this.turn = false;
        this.gameboard = new Gameboard();
    }

    // maybe...
    attack([x, y], gameboard) {
        gameboard.receiveAttack([x, y]);
    }
}

export { Player };