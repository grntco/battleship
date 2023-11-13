class Player {
    constructor(name) {
        this.name = name;
        this.turn = false;
    }

    attack(enemyGameboard, coordinates) {
        enemyGameboard.receiveAttack(coordinates);
    }
}

export { Player };