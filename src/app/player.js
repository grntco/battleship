import { Gameboard } from "./gameboard";

export class Player {
    constructor(name) {
        this.name = name;
        this.turn = false;
        this.gameboard = new Gameboard();
    }

    attack([x, y], gameboard) {
        gameboard.receiveAttack([x, y]);
    }
}